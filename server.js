const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png' };

const server = http.createServer((req, res) => {
  let file = req.url.split('?')[0];
  if (file === '/') file = '/index.html';
  const full = path.join(__dirname, 'public', path.normalize(file));
  if (!full.startsWith(path.join(__dirname, 'public'))) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(full, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(full)] || 'text/plain' });
    res.end(data);
  });
});

if (require.main === module) {
  server.on("error", e => { if (e.code === "EADDRINUSE") console.log("Port " + PORT + " is already in use. Stop the other project, or run: set PORT=3001 && npm start"); });
  server.listen(PORT, () => console.log(`SayERP running at http://localhost:${PORT}`));
}
module.exports = server;
