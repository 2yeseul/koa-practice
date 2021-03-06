const Router = require('koa-router');
const api = new Router();

const books = require('./books');

api.use('/books', books.routes());

api.get('/', (ctx, next) => {
    ctx.body = "ð  HOME"
});

api.get('/about', (ctx, next) => {
    ctx.body = "ìê°"
});

api.get('/about/:name', (ctx, next) => {
    const { name } = ctx.params;
    ctx.body = name + "ì ìê°";
});

api.get('/post', (ctx, next) => {
    const { id } = ctx.request.query; // ì¿¼ë¦¬ì¤í¸ë§
    if (id) {
        ctx.body = "í¬ì¤í¸ #" + id;
    } else {
        ctx.body = "í¬ì¤í¸ idê° ììµëë¤.";
    }
});

module.exports = api;