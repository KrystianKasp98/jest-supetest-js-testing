const todos = [
  { id: 1, name: "Dinner", done: false },
  { id: 2, name: "Dinner", done: false },
];

exports.listHandle = (req, res) => {
  res.send(todos);
};

exports.createHandle = (req, res) => {
  res.send("Create");
};
exports.changeHandle = (req, res) => {
  res.send(`Change: ${req.params.id}`);
};
exports.deleteHandle = (req, res) => {
  res.send(`Delete: ${req.params.id}`);
};
exports.toggleHandle = (req, res) => {
  res.send(`Toggle: ${req.params.id}`);
};
exports.errorHandle = (req, res) => {
  res.status(404).send("Not found");
};
