import { Database } from "../infra/Database.js"

class DatabaseMetodos{
    static forneceDicas(){
        let y = Math.random() * Database.Dicas.length
            y = Math.floor(y)
                console.log(y)
                    return Database.Dicas.length >= 1 ? Database.Dicas[y] : Database.Dicas
    }

    static poeDicas(dica){
        Database.Dicas = [...Database.Dicas, dica]
            return Database.Dicas
    }
}

export default DatabaseMetodos;