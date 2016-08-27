-- tells it to use the table animals_db --
USE animals_db;
-- creates a table called people --
CREATE TABLE people (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    has_pet BOOLEAN NOT NULL,
    pet_name VARCHAR(30),
    pet_age INTEGER(10),
    PRIMARY KEY (id)
);
-- inserts data into table people --
INSERT INTO people (name,has_pet,pet_name,pet_age) VALUES ("Ahmed",TRUE,"Rockington",100);
-- selects the table people --
SELECT * FROM people;
-- deletes data from the table people --
TRUNCATE TABLE people;