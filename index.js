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
// npm run devstart
// npm i express-validator

const Server = require('./classes/Server');
const server = new Server();

server.listen();