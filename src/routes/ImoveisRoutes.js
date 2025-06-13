const express = require('express');
const router = express.Router();
const imoveisController = require('../controller/ImoveisControler');

router.get('/imoveis', async (req, res) => {
    const resultado = await imoveisController.buscarImoveis(req.query);
    res.json(resultado);
});

router.get('/imoveis/:id', async (req, res) => {
    const resultado = await imoveisController.buscarUmImovel(req.params.id);
    res.json(resultado);
});

router.post('/imoveis', async (req, res) => {
    const resultado = await imoveisController.criarImovel(req.body);
    res.json(resultado);
});

router.put('/imoveis/:id', async (req, res) => {
    const resultado = await imoveisController.editarImovel(req.params.id, req.body);
    res.json(resultado);
});

router.delete('/imoveis/:id', async (req, res) => {
    const resultado = await imoveisController.deletarImovel(req.params.id);
    res.json(resultado);
});

module.exports = router;