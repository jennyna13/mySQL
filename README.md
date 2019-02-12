# mySQL
- Create a MySQL Database called bamazon.
- Then create a Table inside of that database called products.
- The products table should have each of the following columns:
<br><br>
- item_id (unique id for each product)
- product_name (Name of product)
- department_name
- price (cost to customer)
- stock_quantity (how much of the product is available in stores)


Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items        available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages.



The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.



Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.



If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.



However, if your store does have enough of the product, you should fulfill the customer's order.


This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.

<img width="745" alt="screen shot 2019-02-11 at 10 56 24 pm" src="https://user-images.githubusercontent.com/36944215/52610756-76636e80-2e50-11e9-9a15-710dd114a39a.png">

<img width="729" alt="screen shot 2019-02-11 at 10 56 52 pm" src="https://user-images.githubusercontent.com/36944215/52610757-77949b80-2e50-11e9-9ea1-69e35ed1048d.png">

<img width="734" alt="screen shot 2019-02-11 at 10 57 29 pm" src="https://user-images.githubusercontent.com/36944215/52610758-78c5c880-2e50-11e9-872d-491eea005caa.png">
