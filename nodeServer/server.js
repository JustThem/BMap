var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:5050});
var sum = 0
var index = 0
var EnList = [
    {e:120.21937542, n: 30.25924446},
    {e:120.21937542, n: 39.25924446},
    {e:120.21937542, n: 35.55924446},
    {e:120.21937542, n: 33.75924446},
    {e:120.21937542, n: 31.39924446},
]
var beiJing = {e:120.20,n:36.56}

wss.on('connection', function(ws){
    console.log("服务端：客户端已连接ws")
    ws.on("message", function(res) {
        console.log(res)
    })
    var sendOption = function(ws){
        ws.send(JSON.stringify(beiJing))
        console.log('服务端已发送' + sum  + '次：' + JSON.stringify(beiJing))
    }
    setTimeout(() =>{
        sendOption(ws)
    }, 10000)
})



