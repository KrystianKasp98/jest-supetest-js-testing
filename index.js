const {app} = require("./app");
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`); //supertest doesn't cooperate well with listening
});
