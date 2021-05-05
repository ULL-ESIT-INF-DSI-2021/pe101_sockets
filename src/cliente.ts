import * as net from 'net';

const client = net.connect({port: 60300});

const comando: string = process.argv[2]
client.write(JSON.stringify({'type': 'comando', 'comando': comando}) + '\n')

