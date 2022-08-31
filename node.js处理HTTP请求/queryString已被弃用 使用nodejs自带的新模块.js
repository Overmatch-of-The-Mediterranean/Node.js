// queryString已被弃用 使用nodejs自带的新模块
const http = require('http');

const serve = http.createServer((req, res) => {
  const url = new URL('http://localhost:3000/api/list/?a=2'); //获取url
  console.log(url);
  const params = url.searchParams;
  console.log(url.pathname);
  console.log(params, '111');
  const method = req.method;
  console.log(params.get('a'), 'hhh');

  // 获取留言列表
  if (url.pathname === '/api/list/' && method === 'GET') {
    if (params.get('a') === '1') res.end('all');
  }
  if (url.pathname === '/api/list/' && method === 'GET') {
    if (params.get('a') === '2') res.end('part');
  }

});
serve.listen(3000);  // 监听HTTP请求
console.log('start serve localhost:3000');