require('dotenv').config({ silent: true });

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const http = require('http');
const serialize = require('serialize-javascript');
let renderer;

app.use(require('body-parser').json());

app.use('/public', express.static(path.join(__dirname, 'public')));

const events = [];

app.get('/', (req, res) => {
  const template = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
  const contentMarker = '<!--App-->';
  if (renderer) {
    renderer.renderToString({ events }, (err, html) => {
      if (err) {
        console.log(err);
      }
      else {
        res.send(template.replace(contentMarker, `${html}\n<script>__INITIAL_STATE__ = { events: ${ serialize(events) } }</script>`));
      }
    });
  } else {
    res.send('<p>Awaiting compilation</p>')
  }
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
  require('./webpack-server-compiler.js').init((bundle) => {
    renderer = require('vue-server-renderer').createBundleRenderer(bundle);
  });
}

server.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
  if (process.env.NODE_ENV === 'development') {
    require("open")(`http://localhost:${process.env.PORT}`);
  }
});
