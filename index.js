const express = require("express");
const app = express();
const port = 8000;

const imoveisRoutes = require("./src/routes/ImoveisRoutes");

app.use(express.json());
app.use("/", imoveisRoutes);

app.listen(port, () => {
    console.log(`servidor de pe http://localhost:${port}`);
});