const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/**
 * Busca todos os imóveis, com possibilidade de filtros por cidade, tipo, quartos, banheiros, garagens e faixa de preço.
 * Os filtros devem ser passados como objeto (ex: { cidade: 'Fortaleza', tipo: 'Casa', quartos: 3 })
 */
async function buscarImoveis(filtros = {}) {
    try {
        const where = {};

        if (filtros.cidade) where.cidade = filtros.cidade;
        if (filtros.tipo) where.tipo = filtros.tipo; // Ex: 'Casa' ou 'Apartamento'
        if (filtros.quartos) where.quartos = { gte: filtros.quartos };
        if (filtros.banheiros) where.banheiros = { gte: filtros.banheiros };
        if (filtros.garagens) where.garagens = { gte: filtros.garagens };
        if (filtros.precoMin || filtros.precoMax) {
            where.preco = {};
            if (filtros.precoMin) where.preco.gte = filtros.precoMin;
            if (filtros.precoMax) where.preco.lte = filtros.precoMax;
        }

        return await prisma.imoveis.findMany({ where });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        };
    };
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
    deletarImovel,
    teste
};



