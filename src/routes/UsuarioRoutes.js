const { criarUsuario, buscarUsuarios, buscarUmUsuario, apagarUsuario, editarUsuario } = require("../controller/UsuariosControler");
const { executarSQL } = require("../services");
const upload = require("../services/multerConfigusuario");

const router = require("express").Router();
router.get("/", async (req, res) => {
    res.send(await buscarUsuarios());
})
router.get("/:id", async (req, res) => {
    res.send(await buscarUmUsuario(req.params.id));
});
router.post("/", upload.single("usuario_imagem"), async (req, res) => {
    if (req.file) {
        req.body.usuario_imagem = `/uploads/usuarios/${req.file.filename}`;
    }
    res.send(await criarUsuario(req.body));
});
router.put("/:id", async (req, res) => {
    res.send(await editarUsuario(req.params.id, req.body))
})
router.delete("/:id", async (req, res) => {
    res.send(await apagarUsuario(req.params.id));
});
// router.post("/:id", (req, res) => {
//     res.send(`Busca todos os usuarios id ${req.params.id}`);
// });

module.exports = router