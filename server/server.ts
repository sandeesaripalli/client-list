const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/clients.json');
const middlewares = jsonServer.defaults();
const client = require('./clients.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running');
});

function readClients() {
    const dbRaw = fs.readFileSync('./server/clients.json');  
    return  JSON.parse(dbRaw).clients;
    
  }