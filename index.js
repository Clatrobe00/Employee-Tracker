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
    case 'Update':
      console.log(`update ${a['table-select']}`);
      break;
    case 'Add':
      console.log(`add ${a['table-select']}`);
      db.query(`INSERT INTO ${a['table-select']} (name) VALUES ('marketing')`, function (err) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      break;
    default:
      console.log('oops!');
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


