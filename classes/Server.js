const express = require('express');
const mongoose = require('mongoose');
const { tiempo } = require('../middlewares/validarCampos');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.cargarMiddleware();
        this.cargarRoutes();
        this.connectarDB();
    }

    cargarMiddleware() {
        this.app.use( express.urlencoded() ); 
    }

    cargarRoutes() {
        this.app.use("/api/civilizations", require('../routes/civilizations'));
        this.app.use("/api/buildings", require('../routes/buildings'));
        this.app.use("/api/tech", require('../routes/tech'));
        this.app.use("/api/units", require('../routes/units'));
        this.app.use("/api/usuarios", require('../routes/usuarios'));
        this.app.use("/api/auth", require('../routes/auth'));
    }

    async connectarDB() {
        try {
            await mongoose.connect(process.env.MONGO_DB);
            console.log("Se conecto!");
        } catch (e) {
            console.log(e);
            throw new Error("oops!")
        }
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}...`);
        })
    }
}

module.exports = Server;