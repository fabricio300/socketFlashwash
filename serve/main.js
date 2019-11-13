const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);



//sockets
io.on('connection',(socket)=>{

    console.log("nueva coneccion2",socket.id);
    

    socket.on('message',(data)=>{
        console.log("mensaje",data);

        //io.sockets.emit('mensajeServidor',data)
        socket.broadcast.emit('mensajeServidor',data)
    })


    
    socket.on('pedido',(data)=>{
        console.log("mensaje",data);
        socket.broadcast.emit('lavanderia'+data,data)
    })


})

http.listen(3000);



