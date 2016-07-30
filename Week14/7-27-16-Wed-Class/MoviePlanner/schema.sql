CREATE DATABASE moviePlanner_db;

USE moviePlanner_db;

CREATE TABLE movies (
  id INT AUTO_INCREMENT NOT NULL,
  movie VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO movies (movie)
VALUES ("The Matrix");