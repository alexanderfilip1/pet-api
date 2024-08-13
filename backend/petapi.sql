CREATE DATABASE petapi;

USE petapi;

CREATE TABLE users (
	id int PRIMARY KEY AUTO_INCREMENT,
    username varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL
);

CREATE TABLE animals (
	id int PRIMARY KEY AUTO_INCREMENT,
    type varchar(255) NOT NULL,
    breed varchar(255) NOT NULL UNIQUE,
    image varchar(255) NOT NULL
);

