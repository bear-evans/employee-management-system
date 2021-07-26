const main = {
  name: "main",
  type: "list",
  message: "What would you like to do?",
  choices: [
    "View and Compare Employees, Roles, or Departments",
    "Add or Update Employees, Roles, or Departments",
    "Delete Employees, Roles, or Departments",
  ],
};

const view = {
  name: "view",
  type: "list",
  message: "What would you like to view?",
  choices: ["View Employees", "View Roles", "View Departments", "Go Back"],
};

const add = {
  name: "add",
  type: "list",
  message: "What would you like to add?",
  choices: [
    "Add Employee",
    "Update Employee Role",
    "Add Role",
    "Add Department",
    "Go Back",
  ],
};

const addEmp = [
  {
    name: "first",
    type: "input",
    message: "Employee's First Name: ",
  },
  {
    name: "last",
    type: "input",
    message: "Employee's Last Name: ",
  },
  {
    name: "role",
    type: "input",
    message: "Employee's Role ID: ",
  },
  {
    name: "manager",
    type: "input",
    message: "Employee's Manager's ID: ",
  },
];

const addRole = [
  {
    name: "title",
    type: "input",
    message: "Role Title: ",
  },
  {
    name: "salary",
    type: "input",
    message: "Role's Salary: ",
  },
];

const addDep = {
  name: "name",
  type: "input",
  message: "Department Name: ",
};

const upEmp = [
  {
    name: "first",
    type: "input",
    message: "Employee's First Name: ",
  },
  {
    name: "last",
    type: "input",
    message: "Employee's Last Name: ",
  },
  {
    name: "role",
    type: "input",
    message: "Employee's New Role ID: ",
  },
];

const upMan = [
  {
    name: "first",
    type: "input",
    message: "Employee's First Name: ",
  },
  {
    name: "last",
    type: "input",
    message: "Employee's Last Name: ",
  },
  {
    name: "manager",
    type: "input",
    message: "Employee's New Manager's ID: ",
  },
];

module.exports = {
  add: add,
  main: main,
  view: view,
  addEmp: addEmp,
  addRole: addRole,
  addDep: addDep,
  upEmp: upEmp,
  upMan: upMan,
};
