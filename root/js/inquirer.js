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



module.exports = {mainPrompt}