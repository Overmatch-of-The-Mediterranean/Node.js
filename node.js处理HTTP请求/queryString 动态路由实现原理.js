// 1.nodejs启动服务
// 2.拿到req和res
// 3.使用req和res

// queryString 动态路由实现原理 使用node.js将其结构化
const http = require('http');

const serve = http.createServer((req, res) => {
  const url = req.url; //获取url
  const path = url.split('?')[0];
  console.log(path);
  const queryStr = url.split('?')[1];
  const method = req.method;
  const query = {};
  // 因为还会发一个favicon的请求，其没有queryString, 所以为空，不判断则会报错
  queryStr && queryStr.split('&').forEach(item => {
    let key = item.split('=')[0];
    let value = item.split('=')[1];
    query[key] = value;
  })
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