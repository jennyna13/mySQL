var mysql = require("mysql");
var inquirer = require("inquirer");
require('dotenv').config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "products"
 });

 connection.connect(function(err){
     if (err) throw err;
     console.log("connected successfully!");
 });

var product_id = function() {

    connection.query("SELECT * FROM bamazon", function(err, res){
        if(err) throw err;

         for(var i=0; i<res.length; i++){
             console.log("Item ID: " + res[i].item_id + " || " + "Product: " + res[i].product_name + " || " + "Department: " + res[i].department_name + " || " + "Price: " + res[i].price + " || " + "Quantity: " + res[i].stock_quantity + " || " + "\n");
             console.log("-------------------------------------------------------------------------------------------------")
         }

    inquirer
        .prompt([
            {
            name:"ID",
            type:"input",
            message:"What is the ID of the product that you would like to purchase?",
            validate: function(value){
                if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
                    return true;
                  } else{
                    return false;
                    console.log("Please enter the number btween 1-10");
                }
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "How many units of the product they would like to purchase?",
            validate: function(value){
                if(isNaN(value)){
                    return false;
                }else{
                    return true;
                }
            }
        }]).then(function(answer){
            var whichItem = (answer.ID)-1;
            var numProduct = parseInt(answer.quantity);
            var Total = parseFloat(((res[whichItem].price)*numProduct).toFixed(2));

            if(res[whichItem].stock_quantity >= numProduct) {
                connection.query("UPDATE bamazon SET ? WHERE ?",[
                {stock_quantity: (res[whichItem].stock_quantity - numProduct)},
                {item_id: answer.ID}
                ], function(err, result) {
                    if(err) throw err;
                    console.log("Your total is: " + Total.toFixed(2));
                });
            }else {
                console.log("Unavailable!");
            };
})
})
}

  product_id()