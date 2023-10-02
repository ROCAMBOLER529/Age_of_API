const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.cargarRoutes();
    }

    cargarRoutes() {
        this.app.use("/api", () => {});
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}...`);
        })
    }
}

module.exports = Server;