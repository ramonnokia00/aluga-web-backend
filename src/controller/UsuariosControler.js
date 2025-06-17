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
    try {
        let senhaCriptografada = await bcrypt.hash(dados.usuario_senha, saltRounds);
        dados = {...dados, usuario_senha: senhaCriptografada};
        return await prisma.usuarios.create({
            data: dados
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
    // return await executarSQL(`INSERT INTO usuarios (usuario_nome, usuario_preco, usuario_desconto, usuario_imagem, marca_id,categoria_id) VALUES ('${dados.usuario_nome}', ${dados.usuario_preco}, ${dados.usuario_desconto},'${dados.usuario_imagem}', ${dados.marca_id}, ${dados.categoria_id})`)
}

async function editarUsuario(id,dados) {
    try {
        let senhaCriptografada = await bcrypt.hash(dados.usuario_senha, saltRounds);
        dados = {...dados, usuario_senha: senhaCriptografada};
        return await prisma.usuarios.update({
            where: {usuario_id: Number(id)},
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
        if (!dados.usuario_email || !dados.usuario_senha) {
            return {
                tipo: "error",
                mensagem: "Email e senha são obrigatórios!"
            };
        }

        // Busca o usuário no banco
        let usuario = await prisma.usuarios.findFirst({
            where: {
                usuario_email: dados.usuario_email
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
            { id: usuario.usuario_id, email: usuario.usuario_email },
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