CREATE DATABASE 'hot_restaurant_DB';
USE 'hot_restaurant_DB';

DROP TABLE IF EXISTS 'customer';
CREATE TABLE 'customer' (
'customerEmail' VARCHAR(50) NOT NULL,
'customerName' VARCHAR(50) NOT NULL,
'phoneNumber' TINYINT(10) NOT NULL,
'isEating' BOOLEAN NOT NULL,
PRIMARY KEY (`customerEmail`),
);
