let initHttpServer = () => {
  let app = express();
  app.use(bodyParser.json());
// List all blocks when hit the api at /blocks
  app.get('/blocks', (req, res) => res.send(JSON.stringify(blockchain)));
 // Create a new block with the input from user
  app.post('/mineBlock', (req, res) => {
    let newBlock = generateNextBlock(req.body.data);
    addBlock(newBlock);
    broadcast(responseLatestMsg());
    console.log('block added:' + JSON.stringify(newBlock));
    res.send();
  });
  //List Peers
  app.get('/peers', (req, res) => {
    res.send(sockets.map( s => s._socket.remoteAddress + ':' + s._socket.remotePort));
  });
  //Add Peers
  app.post('/addPeer', (req, res) => {
    connectToPeers([req.body.peer]);
    res.send();
  });
  app.listen(http_port, () => console.log ('listening http on port:' + http_port));
};

// Most straightforward way to control the node:
// curl http://localhost:3001/blocks

// Architechture: node is connected to 2 web servers, one for user control (HTTP)
// other is for P2P com (Websocket HTTP server)
