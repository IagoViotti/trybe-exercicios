SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';

SELECT first_name, last_name FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'hanry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT email FROM sakila.customer
WHERE address_id BETWEEN(172) AND (176);

SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN(3) AND(6)
ORDER BY rental_duration, title;

SELECT title, rating FROM sakila.film
WHERE rating in ('G', 'PG', 'PG-13')
ORDER BY title
limit 500;

SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) BETWEEN('2005-07-01') AND ('2005-08-22');

SELECT DATE(rental_date),
CONCAT(HOUR(rental_date), ':', MINUTE(rental_date), ':', SECOND(rental_date))
FROM sakila.rental
WHERE rental_id = 10330;

SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano ,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM sakila.rental
WHERE rental_id = 10330;

SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN('2005-07-28 22:00:00') AND('2005-07-29 00:00:00');
