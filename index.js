const inquirer = require('inquirer');
const i = require('./root/js/inquirer');
const db = require('./root/js/connection');
const cTable = require('console.table');

async function actionHandler () {
const actionSelect = await inquirer.prompt(i.mainPrompt);
actionSwitch(actionSelect);
}

async function actionSwitch (a) {
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
      const addEl = await addToTable(`${a['table-select']}`);
      // db.query(`INSERT INTO ${a['table-select']} (name) VALUES ("${addEl}")`, function (err) {
      //   if (err) throw err;
      //   console.log("1 record inserted");
      //});
      break;
    default:
      console.log('oops!');
      break;
  }
}

async function addToTable (tableName) {
  let result;
  switch (tableName) {
    case 'department':
      result = await inquirer.prompt(i.add_department)
      return result.departmentName
    case 'employee':
      result = await inquirer.prompt(i.add_employee)
      console.log(result);
      break
    default:
      console.log('oops');
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


