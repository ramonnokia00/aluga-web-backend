const express = require("express");
const app = express()
const port = 8000;

const imoveisRoutes = require("./src/routes/ImoveisRoutes");
const UsuariosRoutes = require("./src/routes/UsuarioRoutes");
const { login } = require("./src/controller/UsuariosControler");
const { rotaProtegida } = require("./src/utils");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("imoveis");
});

app.use("/imoveis", imoveisRoutes);

app.use("/usuarios", UsuariosRoutes);

app.post("/login", async (req, res) => {
    res.send(await login(req.body));
});



app.use((req, res) => {
    res.status(404).send("Rota nao encontrada")
});

app.listen(port, () => {
    console.log(`servidor de pe http://localhost:${port}`)
});
