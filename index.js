const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./src/routes/UsuariosRoutes');

const app = express();
app.use(cors());
// NÃO coloque app.use(express.json()) antes do multer para rotas com upload!
app.use(usuarioRoutes);

app.listen(8000, () => {
    console.log('Servidor de pé: http://localhost:8000');
});