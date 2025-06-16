const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { criarUsuario } = require('../controller/UsuariosController');

// O nome aqui deve ser igual ao do frontend!
router.post('/usuarios', upload.single('usuario_imagem'), criarUsuario);

module.exports = router;