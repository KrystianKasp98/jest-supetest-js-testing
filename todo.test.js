const todo = require('./todo');

describe('list', () => {
  it('works', () => {
    const req = {};
    const res = {
      send: jest.fn()//this function allows us check in some conditions
    };
    todo.listHandle(req, res);//run method listHandle
    expect(res.send).toHaveBeenCalledTimes(1);//test does that method work;
    // expect(res.send).toHaveBeenCalledWith('List')//test does method return value "List"
    expect(res.send).toHaveBeenCalledWith([
      { id: 1, name: "Dinner", done: false },
      { id: 2, name: "Dinner", done: false },
    ]);//test does method return value "List"
  });
});
describe('create', ()=>{

});
describe('change', ()=>{

});
describe('delete', ()=>{

});
describe('toggle', ()=>{

});

