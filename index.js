const Koa = require("koa");
const app = new Koa();

const router = require("./lib/routes/main-router");

const port = 3000;

app.use(router.routes());

app.listen(port, () => {
    console.log(`Service is running on http://localhost:${port}`)
});