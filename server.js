// ===========================
// Imports and Globals
// ===========================
require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cTable = require("console.table");
const grizzlyDB = require("./lib/grizzlyEmployee.js");
const prompts = require("./lib/prompts.js");
const inquirer = require("inquirer");

// Variables needed by MySQL are stored here. They are either retrieved
// from the environment variables or set to generic defaults

app.use(express.urlencoded({ extended: false }));

// Creates a new GrizzlyDB object that represents the MySQL connection
// and contains all necessary query functions
const grizzly = new grizzlyDB();

// ===========================
// Inquirer Prompt Functions
// ===========================
function main() {
  inquirer.prompt(prompts).then((answer) => {
    switch (answer.main) {
      case "View and Compare Employees, Roles, or Departments":
        viewPrompt();
        break;
      case "Add or Update Employees, Roles, or Departments":
        addPrompt();
        break;
      case "Delete Employees, Roles, or Departments":
        deletePrompt();
        break;
    }
  });
}

function init() {
  main();
}

// ===========================
// Goooooo!
// ===========================
init();
