CREATE TABLE ExCustomer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE ExCustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INTEGER UNIQUE REFERENCES ExCustomer(id)
);

SELECT * FROM ExCustomer;

INSERT INTO ExCustomer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

INSERT INTO ExCustomerProfile (isLoggedIn, customer_id)
VALUES (true, (SELECT id FROM ExCustomer WHERE first_name = 'John' AND last_name = 'Doe'));

INSERT INTO ExCustomerProfile (isLoggedIn, customer_id)
VALUES (false, (SELECT id FROM ExCustomer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));

SELECT c.first_name
FROM ExCustomer AS c
JOIN ExCustomerProfile AS cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

SELECT c.first_name, cp.isLoggedIn
FROM ExCustomer AS c
LEFT JOIN ExCustomerProfile AS cp ON c.id = cp.customer_id;

SELECT COUNT(*)
FROM ExCustomer AS c
LEFT JOIN ExCustomerProfile AS cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;