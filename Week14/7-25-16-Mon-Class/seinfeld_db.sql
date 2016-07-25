CREATE DATABASE  seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NULL,
  coolness_points INT(2) NULL,
  attitude VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

INSERT INTO actors (name,coolness_points,attitude)
VALUES ("Jerry", 8,"Calm");

INSERT INTO actors (name,coolness_points,attitude)
VALUES ("George", 7,"Pessimistic");

INSERT INTO actors (name,coolness_points,attitude)
VALUES ("Elaine", 8,"Extroverted");

INSERT INTO actors (name,coolness_points,attitude)
VALUES ("Kramer", 10,"Eccentric");