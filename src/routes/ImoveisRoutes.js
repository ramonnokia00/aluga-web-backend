const express = require("express");
const router = express.Router();
const imoveisController = require("../controller/ImoveisControler");

// Buscar imóveis com filtros (GET /imoveis?cidade=...&tipo=...&quartos=...)
router.get("/", async (req, res) => {
    const filtros = req.query;
    const resultado = await imoveisController.buscarImoveis(filtros);
    res.json(resultado);
});

// Buscar um imóvel pelo ID (GET /imoveis/:id)
router.get("/:id", async (req, res) => {
    const resultado = await imoveisController.buscarUmImovel(req.params.id);
    res.json(resultado);
});

// Criar imóvel (POST /imoveis)


const upload = require("../services/multerConfigimovel");
router.post("/", upload.array("imagens"), async (req, res) => {
    const resultado = await imoveisController.criarImovel(req.body, req.files);
    res.json(resultado);
});
// Editar imóvel (PUT /imoveis/:id)
router.put("/:id", async (req, res) => {
    const resultado = await imoveisController.editarImovel(req.params.id, req.body);
    res.json(resultado);
});

// Deletar imóvel (DELETE /imoveis/:id)
router.delete("/:id", async (req, res) => {
    const resultado = await imoveisController.deletarImovel(req.params.id);
    res.json(resultado);
});

module.exports = router;