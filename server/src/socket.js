const socket = (io) => {
  io.on("connection", (socket) => {
    console.log("New connection");
    socket.on("disconnect", () => console.log("Connection closed"));
  });

  // Socket event for client subcription
  client.on("subscribeToDateEvent", (interval) => {
    console.log("Client is subscribing to event with interval: ", interval);
    // emit message to the client
    setInterval(() => {
      client.emit("date", new Date());
    }, interval);
  });
};

module.exports = socket;
