const Koa = require('koa');
const koaBody = require('koa-body');
const koaValidate = require('koa-validate');
const router = require('./routers/index');
const middlewares = require('./middlewares/index');

const app = new Koa();

app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 50 * 1024 * 1024
    }
}));

koaValidate(app);

middlewares.forEach((middleware) => {
    app.use(middleware);
});

app.use(router.routes());

module.exports = app;
