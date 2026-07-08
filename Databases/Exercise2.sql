CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);
SELECT * FROM items;

INSERT INTO items (name, price) VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');


SELECT * FROM items
ORDER BY price ASC;

SELECT * FROM items
WHERE price >= 80
ORDER BY price DESC;


SELECT first_name, last_name FROM customers
ORDER BY first_name ASC
LIMIT 3;

SELECT last_name FROM customers
ORDER BY last_name DESC;