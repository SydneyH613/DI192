SELECT COUNT(*) FROM customer;

SELECT first_name || ' ' || last_name AS full_name
FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer
ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

SELECT c.first_name, c.last_name, a.address, a.phone
FROM customer c
JOIN address a ON c.address_id = a.address_id
WHERE a.district = 'Texas';


SELECT * FROM film
WHERE film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Lion';

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'Li%';

SELECT * FROM film
ORDER BY rental_rate ASC
LIMIT 10;

SELECT * FROM film
ORDER BY rental_rate ASC
LIMIT 10 OFFSET 10;

SELECT * FROM (
    SELECT *, ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS rn
    FROM film
) ranked
WHERE rn BETWEEN 11 AND 20;

SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id ASC;

SELECT f.film_id, f.title
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL;


SELECT ci.city, co.country
FROM city ci
JOIN country co ON ci.country_id = co.country_id;


SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id ASC;

