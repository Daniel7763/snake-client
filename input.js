let connection;
// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

//movement/voicelines
const handleUserInput = function(key) {

  //control + C cancel game
  if (key === "\u0003") {
    process.exit();
  }

  //wasd movement
  if (key === "w") {
    connection.write("Move: up");
  }

  if (key === "s") {
    connection.write("Move: down");
  }

  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "d") {
    connection.write("Move: right");
  }

  if (key === "1") {
    connection.write("Say: Munch");
  }

  if (key === "2") {
    connection.write("Say: Oops");
  }

  if (key === "3") {
    connection.write("Say: YaBoi");
  }
};


module.exports = {
  setupInput,
};