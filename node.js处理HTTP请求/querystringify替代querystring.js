// npm i querystringify 该模块功能和querystring一样
const http = require('http');
const queryString = require('querystringify');
const serve = http.createServer((req, res) => {
  const url = req.url; //获取url
  const path = url.split('?')[0];
  const queryStr = url.split('?')[1];
  const method = req.method;
  let query = {};
  query = queryString.parse(queryStr || '');
  console.log(query);
  // 拿到url和method来进行路由匹配
  // 获取留言列表
  if (path === '/api/list' && method === 'GET') {
    if (query.a === '1') res.end('all');
  }
  if (path === '/api/list' && method === 'GET') {
    if (query.a === '2') res.end('part');
  }

  // 获取留言
  // if (path === '/api/list' && method === 'GET') {
  //   res.end('this is GET');
  // }
  // // 创建留言
  // else if (path === '/api/create' && method === 'POST') {
  //   res.end('this is POST');
  // }
  // else res.end('404 111'); // 返回信息给前端
});
serve.listen(3000);  // 监听HTTP请求
console.log('start serve localhost:3000');