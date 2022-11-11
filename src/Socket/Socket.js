const { io } = require('socket.io-client');

const socket = io('https://server-skull-king.herokuapp.com/');

module.exports = socket;
