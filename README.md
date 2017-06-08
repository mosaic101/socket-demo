# socket-demo

- 10,000 tcp
- 间隔1分钟 
- client 发送二进制，14k

## refrence
- [1](https://blog.gaoqixhb.com/p/53e8d66de383771542976d8c)
- [2](http://www.genshuixue.com/i-cxy/p/7664159)
- [segmentfault](https://segmentfault.com/a/1190000004598004)
- [cnode1](https://cnodejs.org/topic/4fb1c1fd1975fe1e1310490b)
- [cnode2](https://cnodejs.org/topic/50e5900da7e6c6171a0159d7)

## issues

- 与app须要保持http长连接，实时显示数据
- 连接超时机制
- 重发超时机制
- cpu压力较高，内存 14k * 10000 = 137M
