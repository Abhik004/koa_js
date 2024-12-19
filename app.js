// const Koa=require('koa');
// const json=require('koa-json');
// const KoaRouter=require('koa-router');

import Koa from 'koa';
import KoaRouter from 'koa-router';
import '@babel/polyfill';

const port=3670;
const app=new Koa();
const router=new KoaRouter();

app.use(json())

//Simple Middleware
// app.use(async ctx=>(ctx.body={Text:"Welcome to Koa"}));

router.get('/home',ctx=>(ctx.body={Text:"Home Page"}));

app.use(router.routes()).use(router.allowedMethods());

app.listen(port,()=>console.log('Server Running'));