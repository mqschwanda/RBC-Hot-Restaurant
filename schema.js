CREATE DATABASE hotrestaurantdb;

USE hotrestaurantdb;

CREATE TABLE customer(
customerEmail VARCHAR(50) NOT NULL, 
customerName VARCHAR(50) NOT NULL,
phoneNumber TINYINT(10) NOT NULL,
isEating BOOLEAN NOT NULL);

SELECT * FROM customer;