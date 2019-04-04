const express = require('express');

const es6Renderer = require('express-es6-template-engine');

const port = 1337;

const app = express();
app.engine('html',es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

const fictionRouter = require('./routes/fiction');

app.use("/books/fiction", fictionRouter);

app.listen(port,()=>{
    console.log(`now listening to port: ${port}`)
});

