SELECT * FROM sakila.actor;

SELECT address, district, city_id FROM sakila.address;

SELECT DISTINCT first_name FROM sakila.actor; 

SELECT DISTINCT store_id FROM sakila.customer;

SELECT DISTINCT first_name, last_name FROM sakila.actor;

SELECT * FROM sakila.country LIMIT 7 OFFSET 10;

SELECT * FROM sakila.address;

SELECT COUNT(*) FROM sakila.address;
SELECT COUNT(address) FROM sakila.address;
SELECT COUNT(address2) FROM sakila.address; -- Nao conta campos nulos

SELECT * FROM sakila.address;

SELECT COUNT(DISTINCT district), COUNT(DISTINCT city_id) FROM sakila.address;

SELECT COUNT(*) FROM sakila.address WHERE district = 'California';

SELECT district AS Distrito, COUNT(*) AS quantidade FROM sakila.address WHERE district = 'California';

SELECT rating, COUNT(*) AS 	quantidade FROM sakila.film GROUP BY rating;

SELECT * FROM sakila.actor ORDER BY first_name ASC, last_name DESC;

-- CONCAT

SELECT * FROM sakila.city;

SELECT first_name, last_name FROM sakila.customer;

SELECT * FROM sakila.rental;

SELECT title, description, release_year FROM sakila.film;

SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;

SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;

SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM sakila.film;

SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM sakila.address;





