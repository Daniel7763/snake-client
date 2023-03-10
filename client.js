//connect function originally from play.js
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  //connect
  conn.on("connect", () => {

    //log to confirm your connected
    console.log("Successfully connected to game server");

    //log intials over your snake
    conn.write("Name: DAS");


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