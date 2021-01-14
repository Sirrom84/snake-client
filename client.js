const { Server } = require('http');
const net = require('net');
const { IP, PORT } = require('./constants')

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
conn.on('data',(data) => {
  console.log(data);
})

conn.on('connect', (Name) => {
  console.log("Successfully connected to game server" );
  console.log('Name: 78o');
});


  return conn;
}

module.exports = {
  connect
}

