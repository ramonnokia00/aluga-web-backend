const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function buscarUsuarios() {
    try {
        return await prisma.usuario.findMany();
    } catch (error) {
        return { tipo: "error", mensagem: error.message }
    }
}

async function criarUsuario(req, res) {
    try {
        const { usuario_nome, usuario_email, usuario_senha, usuario_telefone, usuario_nascimento } = req.body;
        if (!usuario_nome || !usuario_email || !usuario_senha || !usuario_telefone || !usuario_nascimento) {
            return res.status(400).json({ erro: "Preencha todos os campos obrigatórios." });
        }

        const senhaCriptografada = await bcrypt.hash(usuario_senha, 10);

        const novoUsuario = await prisma.usuarios.create({
            data: {
                usuario_nome,
                usuario_email,
                usuario_senha: senhaCriptografada,
                usuario_telefone,
                usuario_nascimento,
                usuario_imagem: req.file ? req.file.filename : null,
            }
        });

        return res.status(201).json(novoUsuario);
    } catch (error) {
        console.log(error); // Adicione esta linha!
        return res.status(500).json({ erro: error.message });
    }
}

async function loginUsuario(req, res) {
    const { usuario_email, usuario_senha } = req.body;
    if (!usuario_email || !usuario_senha) {
        return res.status(400).json({ erro: "Email e senha são obrigatórios" });
    }
    const usuario = await prisma.usuario.findUnique({ where: { email: usuario_email } });
    if (!usuario) return res.status(401).json({ erro: "Usuário não encontrado" });

    const senhaCorreta = await bcrypt.compare(usuario_senha, usuario.senha);
    if (!senhaCorreta) return res.status(401).json({ erro: "Senha inválida" });

    const { senha, ...usuarioSemSenha } = usuario;
    res.json(usuarioSemSenha);
}

async function atualizarFoto(usuarioId, foto_url) {
    return await prisma.usuario.update({
        where: { id: Number(usuarioId) },
        data: { foto_url }
    });
}

module.exports = {
    buscarUsuarios,
    criarUsuario,
    loginUsuario,
    atualizarFoto
};