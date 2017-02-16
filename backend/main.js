import http from 'http';
import koa from 'koa';
import render from 'koa-ejs';
import serve from 'koa-static';
import path from 'path';
import test from './test';

console.log(test.test1);
console.log(test.test2);

const app = koa();

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'ejs',
    cache: false,
    debug: true
});

app.use(serve(path.join(__dirname, '..', 'public')));

app.use(function *(next) {
    let start = new Date();
    yield next;
    let ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});

app.use(function *(next) {
    let start = new Date;
    yield next;
    let ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function *() {
    yield this.render('index');
});

http.createServer(app.callback()).listen(3000);
