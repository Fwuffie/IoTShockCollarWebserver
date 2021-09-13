const express = require('express')
const app = express()
const port = 3000

const WebSocket = require('ws');
const wss = new WebSocket.WebSocketServer({ port: 8080 });

let collar;

wss.on('connection', function connection(ws) {
	collar = ws;
  ws.send("Heya");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
  if (collar) {
  	collar.send('hai');
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 