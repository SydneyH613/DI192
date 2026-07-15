SELECT * FROM language;

SELECT f.title, f.description, l.name AS language_name
FROM film AS f
JOIN language AS l ON f.language_id = l.language_id;

SELECT f.title, f.description, l.name AS language_name
FROM language AS l
LEFT JOIN film AS f ON f.language_id = l.language_id;

CREATE TABLE new_film (
    id integer PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO new_film (id, name) VALUES
(1, 'The Great Escape'),
(2, 'Ocean Adventure'),
(3, 'Mystery of the Lost City');

SELECT * FROM new_film;

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id integer REFERENCES new_film(id) ON DELETE CASCADE,
    language_id integer REFERENCES language(language_id),
    title VARCHAR(100),
    score integer CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update timestamp DEFAULT now()
);





INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'A Thrilling Watch', 9, 'The Great Escape kept me on the edge of my seat the whole time. Great pacing and a satisfying ending.'),
(2, 1, 'Solid but Predictable', 6, 'Ocean Adventure had beautiful visuals but the plot was a little too easy to guess halfway through.');


SELECT * FROM customer_review;

DELETE FROM new_film WHERE id = 1;

SELECT * FROM new_film;

SELECT * FROM customer_review;

UPDATE film
SET language_id = 4
WHERE title IN ('Academy Dinosaur', 'Ace Goldfinger');

SELECT title, language_id FROM film WHERE title IN ('Academy Dinosaur', 'Ace Goldfinger');

SELECT
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS foreign_table,
    ccu.column_name AS foreign_column
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
    ON tc.constraint_name = ccu.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_name = 'customer';

	DROP TABLE customer_review;

	SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

	SELECT f.title, f.replacement_cost, r.rental_date
FROM rental AS r
JOIN inventory AS i ON r.inventory_id = i.inventory_id
JOIN film AS f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;


SELECT f.title, f.description
FROM film AS f
JOIN film_actor AS fa ON f.film_id = fa.film_id
JOIN actor AS a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope'
  AND a.last_name = 'Monroe'
  AND f.description ILIKE '%sumo wrestler%';


SELECT title, length, rating, description
FROM film
WHERE rating = 'R'
  AND length < 60
  AND description ILIKE '%documentary%';

  SELECT f.title, p.amount, r.return_date
FROM customer AS c
JOIN rental AS r ON c.customer_id = r.customer_id
JOIN payment AS p ON r.rental_id = p.rental_id
JOIN inventory AS i ON r.inventory_id = i.inventory_id
JOIN film AS f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND p.amount > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';


  SELECT DISTINCT f.title, f.description, f.replacement_cost
FROM customer AS c
JOIN rental AS r ON c.customer_id = r.customer_id
JOIN inventory AS i ON r.inventory_id = i.inventory_id
JOIN film AS f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC;



  