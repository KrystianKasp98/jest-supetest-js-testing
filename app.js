const express = require("express");
const { listHandle, createHandle, changeHandle, deleteHandle,toggleHandle, errorHandle } = require("./todo");

const app = express();

app.set("x-powered-by", false);//disable display property X-powered-by, that informs us about how lib we use for backend

app.get('/', listHandle);

app.post('/', createHandle);

app.put('/:id', changeHandle);

app.delete("/:id", deleteHandle);

app.post('/:id/toogle', toggleHandle);

//handle other pathes
app.get("*", errorHandle);


//if we will handle errors, function should be placed at the end of code, it's something like middleware for erros for a little, fun fact that error argument is the first argument that we pass to the function
app.use((error, req, res, next) => {
  // res.status(500).send(error.stack);//don't use it for users, because someone can be scared xd
  res.status(500).send(`
  We have encoutered an error and we were notified about it.
  We'll try to fix it as soon as possible!`);
});

exports.app = app;
