import DicasModels from "../models/DicasModels.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";


class Controller{
    static rotas(app){
        app.get("/tips", (req,res)=>{
            const response = DatabaseMetodos.forneceDicas();
                res.status(200).json(response)
        })

        app.post("/create", (req,res)=>{
            const dica = new DicasModels(...Object.values(req.body))
                const response = DatabaseMetodos.poeDicas(dica);
                    res.status(200).json(response)
        })
    }
}

export default Controller;          