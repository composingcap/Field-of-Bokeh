const express = require("express");
const app = express();
var http = require('http').createServer(app);
const io = require("socket.io")(http);
const port = 8086;
const max = require("max-api");
let page = "=Title"

http.listen(port, () => {
  console.log('listening on *:' + port);
});

app.use(express.static("public"));

io.on('connection', (socket) => {
  max.post("new connection")
});

max.addHandler("turnTo", (data)=>{
  max.post(data)
  page = data;

});

max.addHandler("transition", (data)=>{
  io.emit("transition", data);

});


function setPage(){
  io.emit("turnTo", page);
}

setInterval(setPage, 10);

