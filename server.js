// Required packages and init variables
require('dotenv').config();
const port = process.env.PORT || 3003;
// Import express library
const express = require('express');
const app = express();

// Import budget data
const budgets = require("./models/budget.js")

//include the method-override package
const methodOverride = require('method-override');
//query param
app.use(methodOverride('_method'));

//////////////////////////////////////////////
// MIDDLEWARE
//////////////////////////////////////////////
// app.use((req, res, next) => {
//     console.log("middleware was used")
//     next()
// })
// Parse Request Bodies if Content-Type Header is: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
//register the method-override middleware
app.use(methodOverride('_method'));
// serve files statically from the public folder
app.use(express.static(__dirname + "/public"));

//////////////////////////////////////////////
// Routes
//////////////////////////////////////////////

//Index
app.get("/budgets/", (req, res) => {
    res.render("index.ejs", {
      allBudgets: budgets});
  });

// New
app.get("/budgets/new", (req,res) => {
    res.render("new.ejs")
})

// Create
app.post("/budgets", (req,res) => {
    budgets.push(req.body)
    res.redirect("/budgets")
})

// SHOW ROUTES - GETS ONE FRUIT
app.get("/budgets/:indexOfBudgetsArray", (req, res) => {
    res.render("show.ejs", { budget: budgets[req.params.indexOfBudgetsArray] });
  });

//Listen to Port
app.listen(port, () => {
    console.log("Express is listening on port", port)
})