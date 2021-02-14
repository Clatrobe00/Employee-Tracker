const inquirer = require('inquirer');
const i = require('./root/js/inquirer');
const db = require('./root/js/connection');
const cTable = require('console.table');
const util = require('util');
const { resolve } = require('path');
const { type } = require('os');

// node native promisify
const query = util.promisify(db.query).bind(db);

async function actionHandler () {
const actionSelect = await inquirer.prompt(i.mainPrompt);
if (actionSelect['action-select'] === 'Exit') {
  console.log('Logging off');
  db.end();
  return
}
const tableSelect = await inquirer.prompt(i.secPrompt)
actionSwitch(actionSelect, tableSelect);
}



async function actionSwitch (a, b) {
  switch (a['action-select']) {
    case 'View':
      db.query(`SELECT * FROM ${b['table-select']}`, (err, result) => {if (err) throw err;
      console.table(result);
      });
      actionHandler();
      break;
    case 'Update':
      console.log("update");
      actionHandler();
      break;
    case 'Add':
      const addEl = await addToTable(`${b['table-select']}`);
      //console.log(addEl);
      db.query(`INSERT INTO ${b['table-select']} (${addEl[1]}) VALUES (${addEl[0]})`, function (err) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      actionHandler();
      break; 
    default:
      console.log('oops!');
      break;
  }
}

actionHandler();

async function addToTable (tableName) {
  let result;
  switch (tableName) {
    case 'department':
      result = await inquirer.prompt(i.add_department)
      return [`"${result.departmentName}"`, ('name')];
    case 'employee':
      result = await inquirer.prompt(i.add_employee)
      return[`"${result.first_name}", "${result.last_name}", ${parseInt(result.role_id)}, ${parseInt(result.manager_id)}`, 'first_name, last_name, role_id, manager_id'];
    case 'role':
      result = await inquirer.prompt(i.add_role)
      return[`"${result.title}", ${parseInt(result.salary)}, ${parseInt(result.department_id)}`, 'title, salary, department_id'];      
    default:
      console.log('oops');
      break;
  }
}



 async function res (table, identifier) {
  let results = await query(`SELECT ${identifier} FROM ${table}`);
  switch (identifier) {
    case 'first_name':
      results = results.map(e => e.first_name);
      break;
    case 'title':
      results = results.map(e => e.title);
      break;
    case 'name':
      results = results.map(e => e.name);
      break;        
    default:
      console.log('oops');
      break;
  }
  return(results);
  
};

// const findIdentifier = (tName) => {
//   switch (tName) {
//     case 'employee':
//       return ('first_name');
//     case 'role':
//       return ('title');
//     case 'department':
//       return ('name');     
//     default:
//       console.log('oops');
//       break;
//   }
// }

// async function testQuery(results) {
// console.log('tq results are ', results);  
// let answers = await inquirer.prompt([{
//        name: 'update',
//        type: 'list',
//        message: 'select item to update',
//        choices: results
// }]);
// return (answers.update);
// }