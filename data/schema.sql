CREATE DATABASE 'hot_restaurant_DB';
USE 'hot_restaurant_DB';

DROP TABLE IF EXISTS 'customer';
CREATE TABLE 'customer' (
'customerEmail' VARCHAR(50) NOT NULL,
'customerName' VARCHAR(50) NOT NULL,
'phoneNumber' VARCHAR(10) NOT NULL,
'isEating' BOOLEAN NOT NULL DEFAULT 0,
PRIMARY KEY ('customerEmail')
);

insert  into 'customer' values
('jsmith@gmail.com','John Smith','5555555555'),
('jdoe@gmail.com','Jane Doe','5555555555');
