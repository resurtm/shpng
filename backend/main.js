require('babel-core/register');
require('babel-polyfill');

import http from 'http';
import koa from 'koa';
import render from 'koa-ejs';
import serve from 'koa-static';
import path from 'path';

const app = koa();

render(app, {
    root: path.join(__dirname, 'views'),
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: true
});

app.use(serve(path.join(__dirname, '..', 'dist', 'frontend')));

app.use(function *() {
    yield this.render('index');
});

http.createServer(app.callback()).listen(3000);
