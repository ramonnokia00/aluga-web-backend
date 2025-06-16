const formidable = require('formidable');
const path = require('path');
const { copyFile, unlink } = require('fs/promises');
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

        if (
            filtros.imovel_banheiros !== undefined &&
            filtros.imovel_banheiros !== "" &&
            !isNaN(Number(filtros.imovel_banheiros))
        ) {
            where.imovel_banheiros = Number(filtros.imovel_banheiros);
        }

        if (
            filtros.imovel_garagens !== undefined &&
            filtros.imovel_garagens !== "" &&
            !isNaN(Number(filtros.imovel_garagens))
        ) {
            where.imovel_garagens = Number(filtros.imovel_garagens);
        }

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

// Função de teste para evitar erro na rota
async function teste(req, res) {
    res.json({ mensagem: "Função teste funcionando!" });
}

async function criarImovelComImagem(req) {
    try {
        const form = formidable({});
        return await new Promise((resolve, reject) => {
            form.parse(req, async (error, fields, files) => {
                if (error) {
                    return resolve({
                        tipo: "error",
                        mensagem: error.message
                    });
                }

                if (!files.imovel_imagem) {
                    return resolve({
                        tipo: "warning",
                        mensagem: 'O arquivo de imagem é obrigatório'
                    });
                }

                const filenameOriginal = files.imovel_imagem[0].originalFilename;

                if (!filenameOriginal.includes("png") && !filenameOriginal.includes("jpg")) {
                    return resolve({
                        tipo: "warning",
                        mensagem: 'O arquivo precisa ser do tipo PNG ou JPG'
                    });
                }

                const oldpath = files.imovel_imagem[0].filepath;
                const filename = filenameOriginal.split('.');
                const newFilename = `${filename[0]}-${Date.now()}.${filename[1]}`;
                const newpath = path.join(__dirname, '../uploads/imoveis', newFilename);

                await copyFile(oldpath, newpath);
                await unlink(oldpath);

                // Criação do imóvel no banco
                await prisma.imoveis.create({
                    data: {
                        imovel_estado: fields.imovel_estado[0],
                        imovel_cidade: fields.imovel_cidade[0],
                        imovel_bairro: fields.imovel_bairro[0],
                        imovel_logradouro: fields.imovel_logradouro[0],
                        imovel_numero: fields.imovel_numero[0],
                        imovel_complemento: fields.imovel_complemento ? fields.imovel_complemento[0] : null,
                        imovel_cep: fields.imovel_cep[0],
                        imovel_tipo: fields.imovel_tipo[0],
                        imovel_modalidade: fields.imovel_modalidade[0],
                        imovel_valor: Number(fields.imovel_valor[0]),
                        imovel_valor_condominio: fields.imovel_valor_condominio ? Number(fields.imovel_valor_condominio[0]) : null,
                        imovel_descricao: fields.imovel_descricao[0],
                        imovel_quartos: Number(fields.imovel_quartos[0]),
                        imovel_garagens: Number(fields.imovel_garagens[0]),
                        imovel_banheiros: Number(fields.imovel_banheiros[0]),
                        imovel_imagem: 'http://localhost:8000/files/imoveis/' + newFilename,
                        imovel_area: Number(fields.imovel_area[0]),
                        imovel_contato1: fields.imovel_contato1[0],
                        imovel_contato2: fields.imovel_contato2 ? fields.imovel_contato2[0] : null
                    }
                });
                resolve({ tipo: "success", mensagem: "Imóvel criado com sucesso!" });
            });
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
    deletarImovel,
    teste,
    criarImovelComImagem
};



