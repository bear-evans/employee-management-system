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

module.exports = {
  main: main,
  view: view,
};
