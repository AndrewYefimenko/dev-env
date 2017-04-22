import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const server = express();

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});