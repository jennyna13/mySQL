CREATE DATABASE products;

USE products; 

CREATE TABLE bamazon (
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL (10, 2) NOT NULL DEFAULT 1.00, 
    stock_quantity INTEGER(100) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM bamazon;

INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("Kindle", "Electronic", 99.99, 100),
		("FurHaven", "Pets", 35.99, 450),
		("Echo", "Electronics", 69.99, 200),
		("Cuisinart DCC-3200", "Household", 74.99, 100),
		("Hemp Oil", "Supplements", 24.97, 340),
		("Hisweet", "Clothing", 19.99, 500),
		("Nulaxy", "Electroics", 16.99, 200),
		("574v2 Sneaker", "Shoes", 218.65, 500),
		("Play-Doh", "Toys", 7.99, 400),
		("Carter's", "Clothing", 24.99, 600);

