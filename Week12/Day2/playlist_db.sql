-- Using the connection and song data you put together earlier into the class, we are going to print playlists to the Git Bash console based upon the genre or artist.

-- First create code that prints all songs within your database to Git Bash.

-- Now create code that prints songs of a specific genre/artist to the Git Bash console.

-- If you don't have many songs in your database at this point in time, take this moment to add some more to it. Try to give yourself a variety of songs to work with.

-- HINT: Remember that you can call specific data using SQL commands we went over last class. If you are having trouble, make sure to look into SQL commands once more.

-- BONUS: See if you can create more stylized tables within the Git Bash console

-- This will require utilizing some JavaScript to pull off smoothly, but will be a huge boon to your tackling the homework if you can figure out how to accomplish this task now.
-- *BONUS: See if you can make a MySQL query which, instead of taking in a complete string, can contain variables which switch up the search parameters.

-- There are a couple different ways to accomplish this task, but the most common one can be found within the documentation for the MySQL NPM package.

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO songs (title,artist,genre) VALUES ('Human','Krewella','Dance');
INSERT INTO songs (title,artist,genre) VALUES ('TRNDSTTR','Black Coast','Dance');
INSERT INTO songs (title,artist,genre) VALUES ('Whos Next','The Who','Classic Rock');
INSERT INTO songs (title,artist,genre) VALUES ('Yellow Submarine','The Beatles','Classic Rock');

SELECT * FROM songs;

UPDATE songs SET title='Imagine' WHERE id=3 AND genre="Classic Rock";
SELECT * FROM songs;

DELETE FROM songs WHERE id=3;