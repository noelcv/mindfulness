'use strict';
console.log(process.env)

const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
// const router = require('./router');
const { PORT } = require('./config');

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

// https://socket.io/docs/v3/handling-cors/
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
// app.use(router);

io.on('connection', (socket) => {
  socket.emit('me', socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit('leftCall');
  });

  socket.on('callUser', (data) => {
    console.log(data.signal, 'daaaaaattaa   signal on serverr');
    io.to(data.userToCall).emit('callOffer', {
      signal: data.signal,
      from: data.from,
      name: data.name,
    });
  });

  socket.on('joinCall', (data) => {
    io.to(data.to).emit('callTaken', data.signal);
  });
});

server.listen(PORT, () => {
  try {
    console.log(`Express Server up and running at http://localhost:${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
