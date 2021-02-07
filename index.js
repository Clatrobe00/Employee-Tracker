const inquirer = require('inquirer');
const mainPrompt = require('./root/js/inquirer');
const secondPrompt = require('./root/js/inquirer');

async function iHandler() {
  const action = await inquirer.prompt(mainPrompt);
  console.log(action);
}

iHandler();


