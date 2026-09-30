const http = require('http');
const server = require('./server');
server.listen(3100, () => {
  http.get('http://localhost:3100/', res => {
    console.log(res.statusCode === 200 ? 'TEST PASSED: SayERP home page loads' : 'TEST FAILED');
    server.close();
    process.exit(res.statusCode === 200 ? 0 : 1);
  });
});
