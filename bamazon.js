var mysql = require('mysql');
var inquirer = require('inquirer')
var Table = require('cli-table');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "bamazon"
});
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("******************************************************"); 
    console.log(""); 
    shop_continue();
    console.log("");
    console.log("");
    console.log("******************************************************"); 
    console.log(""); 
});

function showTable() {
    connection.query("SELECT * FROM Product", function(err, results) {
        if (err) throw err;
        var table = new Table({
            head: ['ID', 'Description', 'Price', 'Qty'],
            colWidths: [5, 20, 10, 5]
        });
        for (var i = 0; i < results.length; i++) {
            table.push(
            [results[i].item_id, results[i].product_name, results[i].price, results[i].stock_quantity] 
            ); 
        }
        console.log(table.toString()
        ) 
    }); 
    customerQuestions();
};

function customerQuestions() {
    inquirer
        .prompt([{
                type: "input",
                name: "choice",
                message: "What is the ID of the product you want?",
                

                validate: function (value) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || "Please enter a number";
                },
                filter: Number
            },
            
            {
                type: "input",
                name: "quantity",
                message: "How many would you like to order?",
                validate: function (value) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || "Please enter a number";
                },
                filter: Number
            },
        ])
        .then(function (answer) {
            console.log(`You chose ${answer.quantity} of the ID ${answer.choice}.`);
            connection.query(`SELECT item_id, stock_quantity FROM Product`, function (error, results, fields) {
                if (error) {
                    console.log("where answer.choice quantity is checked", error);
                };
                var validID;
                var stockOfProduct;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].item_id == answer.choice) {
                        validID = true;
                        stockOfProduct = results[i].stock_quantity;
                    }
                };
                if (validID == true) { 
                    if (stockOfProduct >= answer.quantity) {
                        console.log(`Stock quantity is ${stockOfProduct}. Your order can be fulfilled.`);
                        shop_continue();
                    }
                }
                if (validID == true) { 
                    if (stockOfProduct < answer.quantity) {
                        console.log(`Stock quantity is ${stockOfProduct}. Order **CanNot** be fulfilled at this time.`);
                        shop_continue();
                    }
                }
            })
        })
        console.log("");
};

function shop_continue() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Would you like to shop?",
            choices: [
                "Yes",
                "No",
            ]  
        })
        .then(function(answer) {
            switch (answer.action) {
            case "Yes":
                showTable(); 
            break;
            case "No":
                console.log("Thank you for Shopping with Bamazon!");
                connection.end();
                process.exit(0);
            break;
            }
        })
    };