const inquirer = require('inquirer');
const i = require('./root/js/inquirer');
const db = require('./root/js/connection');
const cTable = require('console.table');

async function actionHandler () {
const actionSelect = await inquirer.prompt(i.mainPrompt);
actionSwitch(actionSelect);
}

const actionSwitch = (a) => {
  switch (a['action-select']) {
    case 'View':
      db.query(`SELECT * FROM ${a['table-select']}`, (err, result) => {if (err) throw err;
      console.table(result)
    });
      break;
  
    default:
      break;
  }
}

actionHandler();


//actionHandler();
// db.connection;

db.connect(function(err) {
  if (err) throw err;
  // db.query("SELECT * FROM department", (err, result)=>{
  //   if (err) throw err;
  //   console.table(result);
  console.log(`connected on ${db.threadId}`);
});
//});


