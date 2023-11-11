// const { ExpressValidator } = require("express-validator");



const validarName = (req, res, next) => {
    const nombre = req.params.name;
    
    if (nombre != "") {
        next();
    } else {
        res.status(400).json({
            err: "Name can't be empty"
        });
    }
}

module.exports = { validarName};