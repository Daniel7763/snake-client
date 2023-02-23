//connect function originally from play.js
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  //connect
  conn.on("connect", () => {

    //log to confirm your connected
    console.log("Successfully connected to game server");

    //log intials over your snake
    conn.write("Name: DAS");

    // //move up
    // conn.write("Move: up");

    // //move down
    // conn.write("Move: down");

    // //move left
    // conn.write("Move: left");

    // //move right
    // conn.write("Move: right");

  });


  //data
  conn.on("data", (data) => {
    console.log(data.toString());
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


//export
module.exports = {
  connect,
};