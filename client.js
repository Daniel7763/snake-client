//connect function originally from play.js
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    //conn.write("Name: DAS");
  });

  conn.on("connect", () => {
    conn.write("Name: DAS");
  });

  conn.on("data", (data) => {
    console.log(data.toString());
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};