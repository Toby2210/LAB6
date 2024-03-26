import Koa from "koa";
import Router, { RouterContext } from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import { router as articles } from "./routes/articles";
import specialRouter from "./routes/special";
// Other code statements go here

const app: Koa = new Koa();
const router: Router = new Router();
const welcomeAPI = async (ctx: RouterContext, next: any) => {
  ctx.body = {
    message: "Welcome to the blog API!"
  };
  await next();
}
router.get('/api/v1', welcomeAPI);
app.use(logger());
app.use(json());
app.use(articles.routes());
app.use(specialRouter.router.routes());
app.listen(10888);
app.use(router.routes());