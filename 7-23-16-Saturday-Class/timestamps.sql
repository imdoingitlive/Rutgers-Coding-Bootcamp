#How to use the TIMESTAMP column type
CREATE DATABASE DEMO;
USE DEMO;

CREATE TABLE timestamps (
    idx    int auto_increment,
    stamp TIMESTAMP,
    PRIMARY KEY(idx)
)

# This adds the current timestamp
INSERT INTO timestamps (idx) VALUES (null)
INSERT INTO timestamps (stamp) VALUES (NOW())

SELECT * FROM timestamps ORDER  BY stamp DESC

#TRUNCATE timestamps;
#DROP TABLE timestamps;