const { io } = require('socket.io-client');

const socket = io('http://server-skull-king.herokuapp.com/');

module.exports = socket;
