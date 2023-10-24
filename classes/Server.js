const express = require('express');
const mongoose = require('mongoose');
const { tiempo } = require('../middlewares/validarCampos');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.port;
        this.cargarMiddleware();
        this.cargarRoutes();
        this.connectarDB();
    }

    cargarMiddleware() {
        this.app.use( express.urlencoded() );        
        this.app.use(tiempo);
    }

    cargarRoutes() {
        this.app.use("/api", require('../routes/civilizations'));
        this.app.use("/api", require('../routes/usuarios'));
        this.app.use("/api/auth", require('../routes/auth'));
    }

    async connectarDB() {
        try {
            await mongoose.connect(process.env.MONGODB_URL);
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