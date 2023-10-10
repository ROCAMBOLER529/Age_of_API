/*
+-------------------+
|                   |
| classes/Server.js |
|                   |
+-------------------+
*/

const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.cargarMiddlewares();
        this.cargarRoutes();
    }

    cargarMiddlewares() {
        this.app.use( express.urlencoded() );
    }

    cargarRoutes() {
        this.app.use("/api", require('../routes/civilizations'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}...`);
        })
    }
}

module.exports = Server;