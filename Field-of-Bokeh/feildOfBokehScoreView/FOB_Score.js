const express = require("express");
const app = express();
const https = require('http').createServer(app);
const io = require("socket.io")(https);
const port = 8086;
const max = require("max-api");
let page = "Title"

https.listen(port, () => {
  console.log('listening on *:' + port);
  max.outlet(getIPAddress()+":"+port);
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

max.addHandler("progress", (data)=>{
  io.emit("sceneProgress", data);

});

function setPage(){
  io.emit("turnTo", page);
}

setInterval(setPage, 10);


max.addHandler("gethost", (data)=>{
	
	max.outlet(getIPAddress()+":"+port);
	});

function getIPAddress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
        return alias.address;
    }
  }
  return '0.0.0.0';
}
