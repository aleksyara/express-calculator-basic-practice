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
  console.log("result", reuslt);

  res.send(`The substruction result = ${result}`);
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
