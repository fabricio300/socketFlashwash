const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);



//sockets
io.on('connection',(socket)=>{

    console.log("nueva coneccion2",socket.id);
    

    socket.on('message',(data)=>{
        console.log("mensaje",data)
        //io.sockets.emit('mensajeServidor',data)
        socket.broadcast.emit('mensajeServidor',data)
    })


    
    socket.on('pedido',(data)=>{
        console.log("mensaje",data);
        socket.broadcast.emit('lavanderia'+data,data)
    })


    socket.on('asignarReaptidor',(data)=>{
        socket.broadcast.emit('repartidor_nuevo_pedido'+data,data)

    })


    socket.on('resgirtro_de_lavanderia',(data)=>{
        socket.broadcast.emit('nueva_lavanderia',data)
    })


    socket.on('rechaso_de_pedido',(data)=>{
        socket.broadcast.emit('lavanderia_rechada'+data,data)
    })

    socket.on('lavanderia_actualizada',(data)=>{
        socket.broadcast.emit('se_actulizo_una_lavanderia'+data,data)
    })

    socket.on('cliente_actualizado',(data)=>{
        socket.broadcast.emit('se_actulizo_el_cliente'+data,data)
    })

    socket.on('nuevo_status',(data)=>{
        socket.broadcast.emit('se_actualiso_el_pedido'+data,data)
    })
})

http.listen(3000);



