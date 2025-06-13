const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/**
 * Busca todos os imóveis, com possibilidade de filtros por cidade, tipo, quartos, banheiros, garagens e faixa de preço.
 * Os filtros devem ser passados como objeto (ex: { cidade: 'Fortaleza', tipo: 'Casa', quartos: 3 })
 */
async function buscarImoveis(filtros = {}) {
    try {
        const where = {};

        if (filtros.imovel_cidade) where.imovel_cidade = filtros.imovel_cidade;
        if (filtros.imovel_tipo) where.imovel_tipo = filtros.imovel_tipo;
        if (
            filtros.imovel_quartos !== undefined &&
            filtros.imovel_quartos !== "" &&
            !isNaN(Number(filtros.imovel_quartos))
        ) {
            where.imovel_quartos = Number(filtros.imovel_quartos);
        }
        if (filtros.imovel_banheiros) where.imovel_banheiros = { gte: Number(filtros.imovel_banheiros) };
        if (filtros.imovel_garagens) where.imovel_garagens = { gte: Number(filtros.imovel_garagens) };
        if (filtros.precoMin || filtros.precoMax) {
            where.imovel_valor = {};
            if (filtros.precoMin) where.imovel_valor.gte = Number(filtros.precoMin);
            if (filtros.precoMax) where.imovel_valor.lte = Number(filtros.precoMax);
        }

        console.log('Filtro final:', where);

        return await prisma.imoveis.findMany({ where });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        };
    }
}

// Busca um imóvel pelo ID
async function buscarUmImovel(id) {
    try {
        return await prisma.imoveis.findUnique({
            where: { imovel_id: Number(id) }
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        };
    }
}

// Cria um novo imóvel
async function criarImovel(dados) {
    try {
        return await prisma.imoveis.create({
            data: dados
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        };
    }
}

// Edita um imóvel existente
async function editarImovel(id, dados) {
    try {
        return await prisma.imoveis.update({
            where: { imovel_id: Number(id) },
            data: dados
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        };
    }
}

// Deleta um imóvel
async function deletarImovel(id) {
    try {
        return await prisma.imoveis.delete({
            where: { imovel_id: Number(id) }
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        };
    }
}

async function teste() {
    return await prisma.imoveis.findMany()
}

module.exports = {
    buscarImoveis,
    buscarUmImovel,
    criarImovel,
    editarImovel,
    deletarImovel
};



