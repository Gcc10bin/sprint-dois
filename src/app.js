import express from "express";
import Controller from "./controller/Dicas.js";
import { Database } from "./infra/Database.js";

const app = express()
const port = 3000

app.use(express.json())

Controller.rotas(app, Database)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

