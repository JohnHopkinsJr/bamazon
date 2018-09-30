DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE Product(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(5, 2) default 0,
  stock_quanity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO Product (product_name, department_name, price, stock_quanity)
VALUES ("GoPro", "Electronic", 349.89, 3);

INSERT INTO Product (product_name, department_name, price, stock_quanity)
VALUES ("CamCorder", "Electronic", 149.97, 2);

INSERT INTO Product (product_name, department_name, price, stock_quanity)
VALUES ("Baseball", "Sports", 6.89, 33);

INSERT INTO Product (product_name, department_name, price, stock_quanity)
VALUES ("Baseball Bat", "Sports", 27.57, 7);

INSERT INTO Product (product_name, department_name, price, stock_quanity)
VALUES ("Baseball Glove", "Sports", 259.99, 21);

INSERT INTO Product (product_name, department_name, price, stock_quanity)
VALUES ("Toaster", "Appliance", 76.89, 2);

INSERT INTO Product (product_name, department_name, price, stock_quanity)
VALUES ("Coffee Pot", "Appliance", 89.99, 3);

INSERT INTO Product (product_name, department_name, price, stock_quanity)
VALUES ("Air Head, Cherry", "Candy", 1.49, 64);

INSERT INTO Product (product_name, department_name, price, stock_quanity)
VALUES ("Snickers", "Candy", 1.69, 103);

INSERT INTO Product (product_name, department_name, price, stock_quanity)
VALUES ("Mounds", "Candy", 1.59, 88);

-- select * from Product;

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
