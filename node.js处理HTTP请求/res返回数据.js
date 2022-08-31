const http = require('http');

const serve = http.createServer((req, res) => {
  const url = req.url;
  const path = url.split('?')[0];
  const method = req.method;
  if (path === '/api/list' && method === 'GET') {
    const result = {
      errno: 0,
      data: [
        { user: 'zs', age: 18 },
        { user: 'li', age: 20 }
      ]
    };
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(result));
  }
  else if (path === '/api/create' && method === 'POST') {
    const result = {
      errno: 0,
      message: '创建成功'
    };
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(result));
  }
  else {
    res.writeHead(400, { 'Content-type': 'text/html' });
    res.end(`
        <html>
            <head>
                <title>404</title>
                <style>
                    h1 {
                      color: red;
                    }
                </style>
            </head>
            <body>
                <h1>404 Not Found</h1>
            </body>        
        </html>
    `)
  }
})
serve.listen(3000);
console.log('listen is start localhost:3000/api/list');