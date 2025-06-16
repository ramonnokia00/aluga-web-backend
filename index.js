<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./src/routes/UsuariosRoutes');

const app = express();
app.use(cors());
// NÃO coloque app.use(express.json()) antes do multer para rotas com upload!
app.use(usuarioRoutes);

app.listen(8000, () => {
    console.log('Servidor de pé: http://localhost:8000');
=======
const express = require("express");
const path = require('path');
const app = express()
const port = 8000;

const imoveisRoutes = require("./src/routes/ImoveisRoutes");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("imoveis");
});

app.use("/imoveis", imoveisRoutes);


// ...outros middlewares...

app.use('/files/imoveis', express.static(path.join(__dirname, 'src/uploads/imoveis')));

// ...suas rotas e exportação do app...
app.use((req, res) => {
    res.status(404).send("Rota nao encontrada")
});

app.listen(port, () => {
    console.log(`servidor de pe http://localhost:${port}`);
>>>>>>> 868f02da39f4da654efa1c27af3d05845d492c47
});