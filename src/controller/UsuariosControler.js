const { prisma } = require("../services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

async function buscarUsuarios() {
    try {
        return await prisma.usuarios.findMany();
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.mensagem
        }
    }
}
async function CriarUsuario(dados) {
    try {
        let senhaCriptografada = await bcrypt.hash(dados.usuario_senha, saltRounds);
        dados = { ...dados, usuario_senha: senhaCriptografada };
        return await prisma.usuarios.create({
            data: dados
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.mensagem
        }
    }

}
module.exports = {
    buscarUsuarios,
    CriarUsuario
}