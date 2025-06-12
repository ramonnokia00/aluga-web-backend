const express = require("express");
const app = express()
const port = 8000;

const imoveisRoutes = require("./src/routes/ImoveisRoutes");


app.use(express.json());

app.get("/", (req, res) => {
    res.send("imoveis");
});

app.use("/imoveis", imoveisRoutes);

app.use((req, res) => {
    res.status(404).send("Rota nao encontrada")
});

app.listen(port, () => {
    console.log(`servidor de pe http://localhost:${port}`)
});