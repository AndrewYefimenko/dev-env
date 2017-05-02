import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 3000;
const server = express();

server.use(compression());
server.use(express.static('dist'));


server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

server.get('/users', (req, res) => {
  res.json([
    { "id": 1, "firstName": "Alan", "lastName": "Smith", "email": "AlanSmith@test.com" },
    { "id": 2, "firstName": "Victoria", "lastName": "Hanna", "email": "VictoriaHanna@test.com" },
    { "id": 3, "firstName": "Dasha", "lastName": "Kitty", "email": "DashaKitty@test.com" }
  ]);
});

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});