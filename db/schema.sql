### Schema

CREATE DATABASE ingredients_db;
USE ingredients_db;

CREATE TABLE foods
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	added BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
