//codaisseur template parts
const express = require('express');
const corsMiddleWare = require('cors');
const PORT = 4000;
const app = express();
app.use(corsMiddleWare());

app.use(express.json());

//Socket setup
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

let userList = [];

io.on('connect', (socket) => {
    console.log(socket.id);
    socket.on('joinChat', (name) => {
        newUser = { name };
        userList = [...userList, newUser];
        io.emit('updateUsers', userList);
    });
    socket.on('postMessage', (message) => {
        console.log(message);
        io.emit('addMessage', message);
    });
});

//start listening
server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
