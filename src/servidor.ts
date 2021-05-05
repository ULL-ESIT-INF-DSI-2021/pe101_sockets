import * as net from 'net';
// const {exec} = require('child_process');

const server = net.createServer((connection) => {
  console.log('A client has connected.');

  let wholeData = '';
  connection.on('data', (dataChunk) => {
    wholeData += dataChunk;
    const messageLimit = wholeData.indexOf('\n');
    if (messageLimit !== -1) {
      connection.emit('request', JSON.parse(wholeData));
    }
  });
  connection.on('request', (req) => {
    console.log(req.comando);
    /*
    exec(message.comando, (err, stdout, stderr) => {
      if (err) {
        console.log(`error: ${err.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      connection.write(JSON.stringify({'type': 'respuesta', 'resultado': stdout} + '\n'));
    });*/
  });
  connection.on('close', () => {
    console.log('A client has disconnected');
  });
});

server.listen(60300, () => {
  console.log('Waiting for clients to connect.');
});

