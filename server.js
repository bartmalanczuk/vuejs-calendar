require('dotenv').config({ silent: true });

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const http = require('http');
const serialize = require('serialize-javascript');

app.use(require('body-parser').json());

app.use('/public', express.static(path.join(__dirname, 'public')));

const events = [];

app.get('/', (req, res) => {
  const template = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
  const contentMarker = '<!--App-->';
  res.send(template.replace(contentMarker, `<script>__INITIAL_STATE__ = { events: ${ serialize(events) } }</script>`));

});

app.post('/event', (req, res) => {
  events.push(req.body);
  res.sendStatus(200);
});

const server = http.createServer(app);

if (process.env.NODE_ENV === 'development') {
  const reload = require('reload');
  const reloadServer = reload(server, app);
  require('./webpack-dev-middleware').init(app);
}

server.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
  if (process.env.NODE_ENV === 'development') {
    require("open")(`http://localhost:${process.env.PORT}`);
  }
});
