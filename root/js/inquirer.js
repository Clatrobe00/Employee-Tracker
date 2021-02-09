const mainPrompt = [{
    name: "action-select",
    type: "list",
    message: "Select the action you would like to take",
    choices: ["Add", "View", "Update"]
},
{
    name: "table-select",
    type: "list",
    message: `Select the table you would like to use`,
    choices: ["department", "role", "employee"]
}];

const add_department = [{
    name: 'departmentName',
    type: 'input',
    message: 'Enter department name'
}]

const add_employee = [{
    name: 'firstName',
    type: 'input',
    message: "Enter employee's first name:"
},
{
    name: 'lastName',
    type: 'input',
    message: "Enter employee's last name:"
},
{
    name: 'roleID',
    type: 'input',
    message: "Enter employee's role ID:"
},
{
    name: 'managerID',
    type: 'input',
    message: "Enter employee's manager ID (if applicable)"
}
]



module.exports = {mainPrompt, add_department, add_employee}