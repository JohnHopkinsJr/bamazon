DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE Product(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(5, 2) default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO Product (product_name, department_name, price, stock_quantity)
VALUES ("GoPro", "Electronic", 349.89, 3);

INSERT INTO Product (product_name, department_name, price, stock_quantity)
VALUES ("CamCorder", "Electronic", 149.97, 2);

INSERT INTO Product (product_name, department_name, price, stock_quantity)
VALUES ("Baseball", "Sports", 6.89, 33);

INSERT INTO Product (product_name, department_name, price, stock_quantity)
VALUES ("Baseball Bat", "Sports", 27.57, 7);

INSERT INTO Product (product_name, department_name, price, stock_quantity)
VALUES ("Baseball Glove", "Sports", 259.99, 21);

INSERT INTO Product (product_name, department_name, price, stock_quantity)
VALUES ("Toaster", "Appliance", 76.89, 2);

INSERT INTO Product (product_name, department_name, price, stock_quantity)
VALUES ("Coffee Pot", "Appliance", 89.99, 3);

INSERT INTO Product (product_name, department_name, price, stock_quantity)
VALUES ("Air Head, Cherry", "Candy", 1.49, 64);

INSERT INTO Product (product_name, department_name, price, stock_quantity)
VALUES ("Snickers", "Candy", 1.69, 103);

INSERT INTO Product (product_name, department_name, price, stock_quantity)
VALUES ("Mounds", "Candy", 1.59, 88);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'rootroot';