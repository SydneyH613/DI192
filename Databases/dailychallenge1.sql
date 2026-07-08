CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    birthdate DATE NOT NULL,
    number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, birthdate, number_oscars)
VALUES ('Matt', 'Damon', '1970-10-08', 5);

INSERT INTO actors (first_name, last_name, birthdate, number_oscars)
VALUES ('George', 'Clooney', '1961-05-06', 2);

SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name, last_name) VALUES ('Jane', 'Doe');


ERROR:  null value in column "birthdate" of relation "actors" violates not-null constraint
Failing row contains (3, Jane, Doe, null, null). 