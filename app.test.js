// // writting in jest, we use function it() or test, test is recommended by jest
// it("adds 2 + 2 to equal 4", () => {
//   expect(2+2).toEqual(4);//toBe or toEqual, toBe is recommended
// });
// it("wrong test 1 + 2 to equal 4", () => {
//   expect(1 + 2).toEqual(4);
// });
const request = require('supertest');//convention for supertest package, supertest allows test us express application
const { app } = require('./app');

//it - it's testing function, inside we can test more than one condition, but finally, it would be treated as one test
it('handle get', async() => {
  const response = await request(app).get('/');
  expect(response.status).toEqual(200);// i dont know why it doesny work, i didn't add await so it was checking before request was done
  expect(response.header["content-type"]).toEqual(
    "application/json; charset=utf-8"
  );
  // expect(response).toEqual("hello world");

  // console.log(response);
})

// it('handle-get', async(/*done argument that allows  check in asynchronous function, but if our function is asynchronous, done isn't needed*/) => {
//   const response = await request(app).get('/');
//   expect(response.status).toEqual(200);
//   expect(response.text).toEqual("List")//.toMatchSnapshot();//create snapshot from response in that case from server and show what server returned and generally response would be ok, but good to check other properties test or status
//   // expect(res => {
//   //   console.log(res);
//   // }).end((err, res) => {
//   //   if (err) {
//   //     return done(err);
//   //   }
//   //   done();//allows for receiving asynchronous functions and then it will run, after all async function will end
//   // });

// })
it('handle pages that are not found', async () => {
  const response = await request(app).get('/whatever');

  expect(response.status).toEqual(404);
  expect(response.text).toEqual("Not found");

})

// it('handle pages with errors', async () => {
//   const response = await request(app).get("/error");

//   expect(response.status).toEqual(500);
//   expect(response.test).toMatchSnapshot();
//   // expect(response.text).toEqual("Error!");
// });
