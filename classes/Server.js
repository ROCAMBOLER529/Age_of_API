const express = require('express');
const { tiempo } = require('../middlewares/validarCampos');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.cargarMiddleware();
        this.cargarRoutes();
    }

    cargarMiddleware() {
        this.app.use( express.urlencoded() );        
        this.app.use(tiempo);
    }

    cargarRoutes() {
        this.app.use("/api", require('../routes/civilizations'));
        this.app.use("/api/auth", require('../routes/auth'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}...`);
        })
    }
}

module.exports = Server;