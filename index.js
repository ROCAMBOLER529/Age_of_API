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
// npm i express-validator
// npm run devstart

const Server = require('./classes/Server');
const server = new Server();

server.listen();