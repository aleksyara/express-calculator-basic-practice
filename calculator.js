const exppress = require("express");
const bodyParser = require("body-parser");

const app = exppress();
app.use(bodyParser.urlencoded({ extended: true }));
//^^^ we use bodyParser to grab info that get posted to the server from html form
//    meaning to be able use req.body

app.get("/", function (req, res) {
  //   console.log("this is ___dirname", __dirname);
  res.sendFile(__dirname + "/index.html");
});

//Sum up!
app.post("/", function (req, res) {
  console.log("rea.body ---->", req.body);
  console.log("rea.body.num1 ", req.body.num1);

  let firstInput = JSON.parse(req.body.num1);
  let secondInput = Number(req.body.num2);

  let result = firstInput + secondInput;

  res.send(`The substruction result = ${result}`);
});

//Substract
app.post("/", function (req, res) {
  console.log("rea.body ---->", req.body);
  console.log("req.body.num1 ", req.body.num1);

  let firstInput = JSON.parse(req.body.num1);
  let secondInput = Number(req.body.num2);

  let result = firstInput - secondInput;
    console.log('result', reuslt);
    
  res.send(`The substruction result = ${result}`);
});

//Just for test puropose to see how routing works
app.get("/todo", function (req, res) {
  res.sendFile(__dirname + "/todo.html");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
