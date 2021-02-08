const inquirer = require('inquirer');
const i = require('./root/js/inquirer');
const db = require('./root/js/connection');
async function iHandler() {
  const primePrompt = await inquirer.prompt(i.mainPrompt);
  console.log(primePrompt);
}

iHandler();
// db.connection;

db.connect(function(err) {
  if (err) throw err;
  console.log(`connected on ${db.threadId}`);
});


