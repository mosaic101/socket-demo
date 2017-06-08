
const net = require('net')

let server = net.createServer(function (socket) { //'connection' listener
    console.log('server connected')

    socket.on('end', function () {
        console.log('server disconnected')
    })

    socket.on('data', function (data) {
        console.log("[Client]:" + data)  //输出返回的信息
        setTimeout(() => { 
            socket.write("Hi, I'm your Server") 
        }, 1000)
    })
})

server.listen(3133, function () { //'listening' listener
    console.log('server bound')
})