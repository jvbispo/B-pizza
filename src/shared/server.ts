import 'reflect-metadata';
import express from 'express';
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
import './infra/typeorm/database/index';

const app = express();


app.use(express.json());


const http = createServer(app);
const io = new Server(http);

io.on('connection', (socket: Socket) => {
  console.log("Nova conexão", socket.id);
});

app.listen('3000', () => {
  console.log('server started on port: 3000')
});


export {io};
