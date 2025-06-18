const { prisma } = require("../services");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

async function buscarUsuarios() {
    try {
        return await prisma.usuarios.findMany();
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
    // return await executarSQL("SELECT * FROM usuarios;");
}

async function buscarUmUsuario(id) {
    try {
        return await prisma.usuarios.findFirst({
            where: {
                usuario_id: Number(id)
            }
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
    // return await executarSQL(`SELECT * FROM usuarios WHERE usuario_id = ${id};`);
}

async function criarUsuario(dados) {
    console.log('Requisição recebida em criarUsuario:', dados);
    try {
        // Garante que o campo correto do Prisma será usado
        if (dados.usuario_email) {
            dados.Usuario_email = dados.usuario_email;
            delete dados.usuario_email;
        }
        // Verifica duplicidade de email, telefone e CPF (se informado)
        const whereDuplicado = {
            OR: [
                { Usuario_email: dados.Usuario_email },
                { usuario_telefone: dados.usuario_telefone }
            ]
        };
        if (dados.usuario_cpf) {
            whereDuplicado.OR.push({ usuario_cpf: dados.usuario_cpf });
        }
        const usuarioExistente = await prisma.usuarios.findFirst({
            where: whereDuplicado
        });
        if (usuarioExistente) {
            return {
                tipo: "error",
                mensagem: "Já existe um usuário com este e-mail, telefone ou CPF."
            };
        }
        let senhaCriptografada = await bcrypt.hash(dados.usuario_senha, saltRounds);
        dados = { ...dados, usuario_senha: senhaCriptografada };
        const usuarioCriado = await prisma.usuarios.create({
            data: dados
        });
        // Gera token igual ao login
        let token = jwt.sign(
            { id: usuarioCriado.usuario_id, email: usuarioCriado.Usuario_email },
            process.env.SEGREDO,
            { expiresIn: '1h' }
        );
        return {
            tipo: "success",
            mensagem: "Usuário cadastrado com sucesso!",
            usuario: usuarioCriado,
            token
        };
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
    // return await executarSQL(`INSERT INTO usuarios (usuario_nome, usuario_preco, usuario_desconto, usuario_imagem, marca_id,categoria_id) VALUES ('${dados.usuario_nome}', ${dados.usuario_preco}, ${dados.usuario_desconto},'${dados.usuario_imagem}', ${dados.marca_id}, ${dados.categoria_id})`)
}

async function editarUsuario(id, dados) {
    try {
        let senhaCriptografada = await bcrypt.hash(dados.usuario_senha, saltRounds);
        dados = { ...dados, usuario_senha: senhaCriptografada };
        return await prisma.usuarios.update({
            where: { usuario_id: Number(id) },
            data: dados
        })
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }

    };
}

async function apagarUsuario(id) {
    try {
        return await prisma.usuarios.delete({
            where: {
                usuario_id: Number(id)
            }
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
    // return await executarSQL(`DELETE FROM usuarios WHERE usuario_id = ${id}`)
}


;

async function login(dados) {
    try {
        // Validação de entrada básica
        if (!dados.Usuario_email || !dados.usuario_senha) {
            return {
                tipo: "error",
                mensagem: "Email e senha são obrigatórios!"
            };
        }
        // Busca o usuário no banco (padronizado para Usuario_email)
        let usuario = await prisma.usuarios.findFirst({
            where: {
                Usuario_email: dados.Usuario_email
            }
        });
        // Verifica se o usuário existe
        if (!usuario || !usuario.usuario_senha) {
            return {
                tipo: "warning",
                mensagem: "Usuário ou senha incorretos"
            };
        }
        // Compara a senha fornecida com o hash salvo
        let senhaComparada = await bcrypt.compare(dados.usuario_senha, usuario.usuario_senha);
        if (!senhaComparada) {
            return {
                tipo: "warning",
                mensagem: "Usuário ou senha incorretos"
            };
        }
        // Gera o token se tudo OK
        let token = jwt.sign(
            { id: usuario.usuario_id, email: usuario.Usuario_email },
            process.env.SEGREDO,
            { expiresIn: '1h' }
        );
        return {
            tipo: "success",
            mensagem: "Usuário logado!",
            usuario,
            token
        };
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        };
    }
}

module.exports = { login };


module.exports = {
    buscarUsuarios,
    buscarUmUsuario,
    criarUsuario,
    apagarUsuario,
    editarUsuario,
    login
}