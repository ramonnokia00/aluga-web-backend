const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

/**
 * Busca todos os imóveis, com possibilidade de filtros por cidade, tipo, quartos, banheiros, garagens e faixa de preço.
 * Os filtros devem ser passados como objeto (ex: { cidade: 'Fortaleza', tipo: 'Casa', quartos: 3 })
 */
async function buscarImoveis(filtros = {}) {
    try {
        const where = {};

        if (filtros.cidade) where.imovel_cidade = filtros.cidade;
        if (filtros.estado) where.imovel_estado = filtros.estado;
        if (filtros.bairro) where.imovel_bairro = filtros.bairro;
        if (filtros.nomeImovel) where.imovel_logradouro = filtros.nomeImovel;
        if (filtros.tipo) where.imovel_tipo = filtros.tipo; // Ex: 'Casa' ou 'Apartamento'
        if (filtros.quartos) where.imovel_quartos = { gte: Number(filtros.quartos) };
        if (filtros.banheiros) where.imovel_banheiros = { gte: Number(filtros.banheiros) };
        if (filtros.garagens) where.imovel_garagens = { gte: Number(filtros.garagens) };
        if (filtros.precoMin || filtros.precoMax) {
            where.imovel_valor = {};
            if (filtros.precoMin) where.imovel_valor.gte = Number(filtros.precoMin);
            if (filtros.precoMax) where.imovel_valor.lte = Number(filtros.precoMax);
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
        // Garante que o campo de imagem seja salvo corretamente
        if (dados.imovel_imagem && !dados.imovel_imagem.startsWith('/uploads')) {
            dados.imovel_imagem = `/uploads/imoveis/${dados.imovel_imagem}`;
        }
        // Se não vier imagem, usa uma imagem fake padrão
        if (!dados.imovel_imagem) {
            dados.imovel_imagem = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80';
        }
        const imovelCriado = await prisma.imoveis.create({
            data: dados
        });
        console.log('Imóvel criado:', imovelCriado);
        return imovelCriado;
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

module.exports = {
    buscarImoveis,
    buscarUmImovel,
    criarImovel,
    editarImovel,
    deletarImovel
};



