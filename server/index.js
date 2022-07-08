'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const router = require('./router');
const { PORT } = require('./config');

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

// https://socket.io/docs/v3/handling-cors/
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
app.use(router);

const participants = {};
const socketToClassroom = {};


io.on('connection', (socket) => {
  socket.emit('me', socket.id);
  
  socket.on('joiningRoom', (roomId) => {
    if (participants[roomId]) {
      // const numberOfParticipants = participants[roomId].length;
      // if (numberOfParticipants === 4) {
      //   socket.emit('classroomIsComplete');
      //   console.log('complete classroom');
      //   return;
      // }
      participants[roomId].push(socket.id);
    } else {
      participants[roomId] = [socket.id];
    }
    socketToClassroom[socket.id] = roomId;
    
    const participantsInClassroom = participants[roomId].filter(
      (id) => id !== socket.id
    );

    socket.emit('everybodyInTheHouse', participantsInClassroom);
  });
  
  socket.on('sendingSignalToBackEnd', (data) => {
    io.to(data.userToSignal).emit('userJoinedClassroom', {
      signal: data.signal,
      callerId: data.callerId,
    });
  });
  
  socket.on('disconnect', () => {
    socket.broadcast.emit('leftCall');
  });

  socket.on('returningSignalToTheBackEnd', (data) => {
    io.to(data.callerId).emit('theBackEndReceivedTheReturnedSignal', {
      signal: data.signal,
      id: socket.id,
    });
  });
  
  socket.on('disconnect', (id) => {
    console.log('disconnecting.....', id);
    const roomId = socketToClassroom[socket.id];
    let room = participants[roomId];

    if (room) {
      room = room.filter((id) => id !== socket.id);
      participants[roomId] = room;
    }

    //the server-side is listening for leavers
    socket.broadcast.emit('leftCall', socket.id);
  });
});

server.listen(PORT, () => {
  try {
    console.log(`Express Server up and running`);
  } catch (err) {
    console.log(err);
  }
});
