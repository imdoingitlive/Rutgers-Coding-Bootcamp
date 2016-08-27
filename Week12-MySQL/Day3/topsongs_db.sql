CREATE DATABASE topsongs_db;

USE topsongs_db;

CREATE TABLE topsongs(
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  total DECIMAL(10,4) NULL,
  PRIMARY KEY(position)
);