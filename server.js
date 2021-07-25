// ===========================
// Imports and Globals
// ===========================
require("dotenv").config();
const cTable = require("console.table");
const express = require("express");
const app = express();
const chalk = require("chalk");
const mysql = require("mysql2");
const grizzlyDB = require("./lib/grizzlyEmployee.js");
const prompts = require("./lib/prompts.js");
const inquirer = require("inquirer");

// Variables needed by MySQL are stored here. They are either retrieved
// from the environment variables or set to generic defaults
const PORT = process.env.PORT || 3306;
const HOSTNAME = process.env.PORT || "localhost";
const USERNAME = process.env.USER || "root";
const PW = process.env.PW || "password";

app.use(express.urlencoded({ extended: false }));

// Creates a new GrizzlyDB object that represents the MySQL connection
// and contains all necessary query functions
const grizzly = new grizzlyDB(HOSTNAME, USERNAME, PW, PORT);

// ===========================
// Helper Functions
// ===========================

// ===========================
// Inquirer Prompt Functions
// ===========================
function mainPrompt() {
  inquirer.prompt(prompts.main).then((answer) => {
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

async function viewPrompt() {
  let results;
  answer = await inquirer.prompt(prompts.view);
  switch (answer.view) {
    case "View Employees":
      results = await grizzly.viewEmployee();
      console.table(results[0]);
      viewPrompt();
      break;
    case "View Roles":
      results = await grizzly.viewRole();
      console.table(results[0]);
      viewPrompt();
      break;
    case "View Departments":
      results = await grizzly.viewDepartment();
      console.table(results[0]);
      viewPrompt();
      break;
    case "Go Back":
      mainPrompt();
      break;
  }
}

function init() {
  // It prints a really cool header, I promise.
  const header = `${chalk.red(
    "========================================================"
  )}
 ${chalk.yellow("__         __")}
${chalk.yellow('/  \\.-"""-./  \\')}
${chalk.yellow("\\    -   -    /")}                  ${chalk.yellowBright(
    "Grizzly"
  )}
 ${chalk.yellow("|")}   ${chalk.green("o   o")}   ${chalk.yellow(
    "|"
  )}                   ${chalk.yellowBright("Employee")}
 ${chalk.yellow("\\")}  .-'''-.  ${chalk.yellow(
    "/"
  )}                  ${chalk.yellowBright("Management")}
  ${chalk.yellow("'-")}\\__${chalk.gray("Y")}__/${chalk.yellow("-'")}
     '---'
${chalk.red("========================================================")}`;

  console.log(header);
  mainPrompt();
}

// ===========================
// Goooooo!
// ===========================
init();
