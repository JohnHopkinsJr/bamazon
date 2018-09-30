var mysql = require('mysql');
var inquirer = require('inquirer')
var Table = require('cli-table');
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "rootroot",
    database: "bamazon"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    db_conn();
  });

  function db_conn() {
    showTable();
    // query the database for all products
    connection.query("SELECT product_name FROM Product", function(err, results) {
      if (err) throw err;
      inquirer
      .prompt([
        {
          name: "item",
          type: "rawlist",
          choices: function() {
            var productArray = [];
            for (var i = 0; i < results.length; i++) {
              productArray.push(results[i].product_name);
            }
            return productArray;
          },
          message: "Choose an Item ID#"
        }
      ])
      .then(function(answer) {
       // var chosenItem;
        //for (var i = 0; i < results.length; i++) {
         // if (results[i].item_id === answer.choice) {
         //   chosenItem = results[i];
         console.log("answer");
       //   }
       // }
      shop_continue();
      });
  })
};
  
function showTable() {
    connection.query("SELECT * FROM Product", function(err, results) {
        if (err) throw err;

        var table = new Table({
            head: ['Item ID', 'Product Name', 'Price'],
            colWidths: [10, 20, 10]
        });
        for (var i = 0; i < results.length; i++) {
            table.push(
            [results[i].item_id, results[i].product_name, results[i].price] 
            ); 
        }
        console.log(table.toString()
        ) 
    }); 
};
  function shop_continue() {
        inquirer
          .prompt({
            name: "action",
            type: "list",
            message: "Would you like to continue shopping?",
            choices: [
              "Yes",
              "No",
            ]
          })
          .then(function(answer) {
            switch (answer.action) {
            case "Yes":
                db_conn();
                break;
      
            case "No":
                connection.end();
                process.exit(0);
                break;
            }
        })
    };