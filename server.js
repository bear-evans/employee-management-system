// ===========================
// Imports and Globals
// ===========================
require("dotenv").config();
const express = require("express");
const app = express();
const cTable = require("console.table");
const grizzlyDB = require("./lib/grizzlyEmployee.js");

// Variables needed by MySQL are stored here. They are either retrieved
// from the environment variables or set to generic defaults
const PORT = process.env.PORT || 3001;
const HOSTNAME = process.env.HOSTNAME || "localhost";
const USERNAME = process.env.USERNAME || "root";
const PW = process.env.PW || "root";

app.use(express.urlencoded({ extended: false }));

// Creates a new GrizzlyDB object that represents the MySQL connection
// and contains all necessary query functions
const grizzly = new grizzlyDB(HOSTNAME, PORT, USERNAME, PW);

// ===========================
// Inquirer Prompt Functions
// ===========================
