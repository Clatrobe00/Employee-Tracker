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
    name: 'first_name',
    type: 'input',
    message: "Enter employee's first name:"
},
{
    name: 'last_name',
    type: 'input',
    message: "Enter employee's last name:"
},
{
    name: 'role_id',
    type: 'input',
    message: "Enter employee's role ID:"
},
{
    name: 'manager_id',
    type: 'input',
    message: "Enter employee's manager ID (if applicable)"
}
]

const add_role = [{
    name: 'title',
    type: 'input',
    message: 'Enter role title:'
},
{
    name: 'salary',
    type: 'input',
    message: 'Enter role salary:'
},
{
    name: 'department_id',
    type: 'input',
    message: 'Enter department ID for role:'
}]



module.exports = {mainPrompt, add_department, add_employee, add_role}