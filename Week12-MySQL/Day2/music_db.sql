CREATE DATABASE music_db;

USE music_db;

CREATE TABLE music (
  id INTEGER (11) auto_increment NOT NULL,
  title VARCHAR(255),
  artist VARCHAR(255),
  genre VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO music (title,artist,genre)
VALUES ("Harper Lewis","Russian Circles", "Post-Rock");

INSERT INTO music (title,artist,genre)
VALUES ("One More Time","Daft Punk", "Electronic");