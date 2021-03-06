const WebSocketServer = require ('ws').WebSocketServer;

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    wss.clients.forEach(client => {
        if(ws != client){
            client.send(message);
        }
    });
  });
});