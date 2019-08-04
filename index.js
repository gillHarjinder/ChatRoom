let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);


const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
        socket.emit('new-message', message);
    });
});

http.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});