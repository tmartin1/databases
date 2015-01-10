DROP DATABASE IF EXISTS chatDB;
CREATE DATABASE chatDB;

USE chatDB;

CREATE TABLE users  (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  username VARCHAR(25),
  PRIMARY KEY(id)
);

CREATE TABLE friends (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT REFERENCES users(id),
  friend_id INT REFERENCES users(id),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT REFERENCES users(id),
  tweet VARCHAR(140),
  time DATETIME,
  room VARCHAR(25),
  PRIMARY KEY(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

