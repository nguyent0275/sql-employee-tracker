// function to capture input data
// async function captureInput() {
//   // looking at the schema file
//   // i can see that i need to capture the name
//   // id is automatically incrementing
//   // since we only have 1 column to fill in, we need to only ask one question
//   console.log("need to finish");
//   const answers = await inquirer.prompt([
//     {
//       type: "input",
//       // name matches the column you're trying to populate or fill
//       name: "name",
//       message: "Who do you want to put on the island?",
//     },
//   ]);
//   // user answer from the prompt
//   console.log(answers);

//   // once you have the answers, send the answers to the insertSql() function
//   return await insertSql(answers);
// }
// // function to do the sql insert
// // inputs = answers
// async function insertSql(inputs) {
//   console.log(inputs);
//   // use prepared statement
//   const inputData = await db.query("INSERT INTO island SET ?", inputs);
//   console.log(inputData);

//   console.log("Insert Sucessful\n\n\n\n");
//   // brings us back to the menu
//   return await menu();
// }

// async function askWhoToBringToUsa() {
//   // looking at the schema file
//   // i can see that i need to capture the name
//   // id is automatically incrementing
//   // since we only have 1 column to fill in, we need to only ask one question
//   console.log("need to finish");
//   // data is the list of rows / onjects
//   // metaData contains data like column names etc.
//   // destructuring simplies the return code
//   const [data, metaData] = await db.query("SELECT * FROM island");
//   console.log(data);
//   const choices = data.map((row) => ({
//     name: row.name,
//     value: row.id,
//   }));
//   console.log(choices);
//   const answers = await inquirer.prompt([
//     {
//       type: "list",
//       // name matches the column you're trying to populate or fill
//       name: "island_id",
//       message: "Who do you want to bring back to the USA?",
//       choices: choices,
//     },
//   ]);
//   // user answer from the prompt
//   console.log(answers);

//   // once you have the answers, send the answers to the insertSql() function
//   return await sendSqlUsa(answers);
// }
// async function sendSqlUsa(inputs) {
//   console.log(inputs);
//   // use prepared statement
//   const inputData = await db.query("INSERT INTO usa SET ?", inputs);
//   console.log(inputData);

//   console.log("Insert Sucessful\n\n\n\n");
//   // brings us back to the menu
//   return await menu();
// }
