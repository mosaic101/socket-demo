
const net = require('net')

console.log('let`s start')

let timeDistance = 1000 // five minutes 5 * 60 * 1000

let count = 0
while (count < 10000) {
    count++
    createConnection(count)
}

function createConnection(count) {
    let client = new net.Socket()
    client.connect(3133, function () {

        console.log('Connect to Server', ', id:' + count)
        // 建立连接后立即向服务器发送数据，服务器将收到这些数据
        client.write('Hi Server' +  'id' + count)

    })

    // 为客户端添加“data”事件处理函数
    // data是服务器发回的数据
    client.on('data', function (data) {

        console.log('[Server] ' + data, 'id' + count)
        setTimeout(() => {
            client.write("Hi Server")
        }, timeDistance)
        //我们暂时不关闭:client.destroy()

    })

    // handler error event
    client.on('error', function () {
        count--
        console.log('Connection closed')
    })

    // 为客户端添加“close”事件处理函数
    client.on('close', function () {
        console.log('Connection closed')
    })
}