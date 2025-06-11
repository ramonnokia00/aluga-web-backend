const express = require("express");
const app = express()
const port = 8000;


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ola mundo");
})



app.use((res, req) => {
    res.status(404).send("Rota nao encontrada")
})

app.listen(port, () =>{
    console.log (`servidor de pe http://localhost:${port}`)
})