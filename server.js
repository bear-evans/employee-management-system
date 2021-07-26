// ===========================
// Imports and Globals
// ===========================
require("dotenv").config();
const express = require("express");
const app = express();
const chalk = require("chalk");
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

// Creates a new database object that represents the MySQL connection
// and contains all necessary query functions
const grizzly = new grizzlyDB(HOSTNAME, USERNAME, PW, PORT);

// ===========================
// Helper Functions
// ===========================

// ===========================
// Inquirer Prompt Functions
// ===========================

// Main Menu
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

// Displays Various view options
async function viewPrompt() {
  let results;
  answer = await inquirer.prompt(prompts.view);
  switch (answer.view) {
    case "Full View":
      results = await grizzly.viewFull();
      console.table(results[0]);
      viewPrompt();
      break;
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

// Displays options to add or update entries
async function addPrompt() {
  answer = await inquirer.prompt(prompts.add);
  switch (answer.add) {
    case "Add Employee":
      data = await inquirer.prompt(prompts.addEmp);
      await grizzly.addEmployee(data.first, data.last, data.role, data.manager);
      console.log("Employee " + data.first + " " + data.last + " added!");
      addPrompt();
      break;
    case "Update Employee Role":
      data = await inquirer.prompt(prompts.upEmp);
      await grizzly.upRole(data.first, data.last, data.role);
      console.log("Employee " + data.first + " " + data.last + " updated!");
      addPrompt();
      break;
    case "Update Employee Manager":
      data = await inquirer.prompt(prompts.upMan);
      await grizzly.upManager(data.first, data.last, data.manager);
      console.log("Employee " + data.first + " " + data.last + " updated!");
      addPrompt();
      break;
    case "Add Role":
      data = await inquirer.prompt(prompts.addRole);
      await grizzly.addRole(data.title, data.salary, data.department);
      console.log("Role " + data.title + " added!");
      addPrompt();
      break;
    case "Add Department":
      data = await inquirer.prompt(prompts.addDep);
      await grizzly.addDepartment(data.name);
      console.log("Department " + data.name + " added!");
      addPrompt();
      break;
    case "Go Back":
      mainPrompt();
      break;
  }
}

// Handles all deletion
async function deletePrompt() {
  answer = await inquirer.prompt(prompts.del);
  switch (answer.delete) {
    case "Delete Employee":
      data = await inquirer.prompt(prompts.delEmp);
      await grizzly.delEmployee(data.id);
      console.log("Employee " + data.id + " removed!");
      deletePrompt();
      break;
    case "Delete Role":
      data = await inquirer.prompt(prompts.delRole);
      await grizzly.delRole(data.id);
      console.log("Role " + data.id + " removed!");
      deletePrompt();
      break;
    case "Delete Department":
      data = await inquirer.prompt(prompts.delDep);
      await grizzly.delDepartment(data.id);
      console.log("Department " + data.id + " removed!");
      deletePrompt();
      break;
    case "Go Back":
      mainPrompt();
      break;
  }
}

// Handles header and startup
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
