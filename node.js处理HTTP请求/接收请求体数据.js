const http = require('http');

const serve = http.createServer((req, res) => {
  const url = req.url;
  const path = url.split('?')[0];
  const method = req.method;
  const type = req.headers['content-type'];
  if (path === '/api/create' && method === 'POST') {
    console.log(type);
    let bodyStr = '';
    // 服务端去识别流，并接收数据，chunk，即流的每一段数据
    req.on('data', chunk => {
      bodyStr += chunk;
    })
    // 服务器知道流完了
    req.on('end', () => {
      if (type === 'application/json') {
        console.log('bodyStr is', bodyStr);
        const body = JSON.parse(bodyStr);
        console.log('body is', body);
      }
    })
    res.end('接收成功');
  }
})
serve.listen(3000);
console.log('启动成功');