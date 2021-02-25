"use strict";

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
app.post("/sum", function (req, res) {
    console.log('this is SUM');
  console.log("req.body ---->", req.body);
  console.log("req.body.num1 ", req.body.num1);

  let firstInput = Number(req.body.num1);
  console.log('typof firstinput', typeof(firstInput));
  let secondInput = Number(req.body.num2);

  let result = firstInput + secondInput;

  res.send(`The substruction result = ${result}`);
});

//Subtract
app.post("/sub", function (req, res) {
  console.log('this is Subtract');
    
  console.log("reg.body ---->", req.body);
  console.log("req.body.num1 from Sum ", req.body.num1);
  console.log("req.body.num2 from Sum ", req.body.num2);

  let firstInput2 = Number(req.body.num3);
  let secondInput2 = Number(req.body.num4);

  let result2 = firstInput2 - secondInput2;
  console.log("result", result2);

  res.send(`The substruction result = ${result2}`);
});

// BMI Calculator
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator/result", function (req, res) {
  let height = parseFloat(req.body.h);
  let weight = parseFloat(req.body.w);

  let result = weight / (height * height);

  res.send(`Your BMI is ${result}`);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
