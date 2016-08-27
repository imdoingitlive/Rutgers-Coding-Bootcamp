CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages (
	id INTEGER (11) auto_increment NOT NULL,
    languages VARCHAR(255),
    rating integer(10),
    PRIMARY KEY (id)
);

INSERT INTO programming_languages (languages,rating)
VALUES ("JavaScript",9);

INSERT INTO programming_languages (languages,rating)
VALUES ("NodeJS",10);

INSERT INTO programming_languages (languages,rating)
VALUES ("HTML",7);

SELECT * FROM programming_languages;
-- this updates the data in the table --
UPDATE programming_languages SET languages="CSS", rating=6 WHERE id=3;