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



module.exports = {mainPrompt, add_department}