// const { ExpressValidator } = require("express-validator");

const tiempo = (req, res, next) => {
    console.log("Probando middleware...");
    next();
}

const validarName = (req, res, next) => {
    const nombre = req.params.name;
    
    if (nombre != "") {
        next();
    } else {
        res.status(400).json({
            err: "Name inválido"
        });
    }
}

module.exports = { tiempo, validarName};