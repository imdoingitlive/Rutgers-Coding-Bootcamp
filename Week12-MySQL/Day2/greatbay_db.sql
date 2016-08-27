CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (name,description,price) VALUES ('','',);