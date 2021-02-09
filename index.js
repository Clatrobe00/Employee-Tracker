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
      db.connect(function(err) {
        if (err) throw err;
        var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
      });
      break;
    case 'Add':
      const addEl = await addToTable(`${a['table-select']}`);
      console.log(addEl);
      // db.query(`INSERT INTO ${a['table-select']} (${addEl[1]}) VALUES ("${addEl[0]}")`, function (err) {
      //   if (err) throw err;
      //   console.log("1 record inserted");
      // });
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
      return [result.departmentName, ('name')];
    case 'employee':
      result = await inquirer.prompt(i.add_employee)
      return[result.first_name, result.last_name, parseInt(result.role_id), parseInt(result.manager_id), 'first_name, last_name, role_id, manager_id'];
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


