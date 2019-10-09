var express = require('express');
var app = express();



app.set('port',process.env.PORT||3000);


//iniciar server
var server=app.listen(app.get('port'),()=>{

    console.log("puerto ", app.get('port'))

})







var websocket = require('socket.io');
var io=websocket.listen(server)


//sockets
io.on('connection',(socket)=>{

    console.log("nueva coneccion2",socket.id);
    

    socket.on('message',(data)=>{
        console.log("mensaje",data);

        //io.sockets.emit('mensajeServidor',data)
        socket.broadcast.emit('mensajeServidor',data)
    })

})





