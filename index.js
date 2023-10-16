/*
+----------+
|          |
| index.js |
|          |
+----------+
*/

// npm init
// npm i express
// npm i nodemon -g
// npm i dotenv
// npm i express-validator
// npm i jsonwebtoken
// npm run devstart

const Server = require('./classes/Server');
const dotenv = require('dotenv');

dotenv.config();

const server = new Server();

server.listen();