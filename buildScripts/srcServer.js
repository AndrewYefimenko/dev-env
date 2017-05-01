import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackMiddleware from 'webpack-dev-middleware';
/* eslint-disable no-console */
const port = 3000;
const server = express();
const compiler = webpack(webpackConfig);

server.use(webpackMiddleware(compiler, {
  noInfo: false,
  publicPath: webpackConfig.output.publicPath
}));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

server.get('/users-static', (req, res) => {
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