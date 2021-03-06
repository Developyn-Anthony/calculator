const express = require('express')
const app = express()
const port = 3000
const cors = require("cors");

app.use(cors());

app.get('/', (req, res) => {
  res.send('Calculator Test app')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/:operator/:num1/:num2", function (req, res) {
  let operation;

  switch (req.params.operator) {
    case "add":
      operation = (
        parseInt(req.params.num1) + parseInt(req.params.num2)
      ).toString();
      res.send(operation);
      break;
    case "subtract":
      operation = (
        parseInt(req.params.num1) - parseInt(req.params.num2)
      ).toString();
      res.send(operation);
      break;
    case "times":
      operation = (
        parseInt(req.params.num1) * parseInt(req.params.num2)
      ).toString();
      res.send(operation);
      break;
    case "divide":
      operation = (
        parseInt(req.params.num1) / parseInt(req.params.num2)
      ).toString();
      res.send(operation);
      break;
    default:
      res.send("Error");
  }
});