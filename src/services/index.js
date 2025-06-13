const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const mysql = require("mysql2/promise");

async function executarSQL(comandosql) {
    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        port: "3307",
        database: "aluga_web_backend",
    });
    const [result] = await conexao.query(comandosql);
    conexao.end();

    return result;
    
}
module.exports = {executarSQL, prisma};