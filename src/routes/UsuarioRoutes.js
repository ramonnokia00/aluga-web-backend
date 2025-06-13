const { buscarUsuarios, CriarUsuario } = require("../controller/UsuariosControler");


const router = require("express").Router();
router.get("/", async (req, res) => {
    res.send(await buscarUsuarios());
})
router.post("/", async(req, res) => {
    res.send(await CriarUsuario(req.body));
})

module.exports = router;