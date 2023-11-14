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

const validarBody = (req, res, next) => {
    const body = Object.entries(req.body).map(x => x[1]).flat();

    body.map(x => {
        if (x == "" || x == undefined) {
            res.status(400).json({
                log: "Some of the fields are incomplete"
            })
        }
    });
    next();
}

module.exports = { validarName, validarBody };