-- 1 
SELECT MAX(salary) FROM employees;
-- 2
SELECT (MAX(salary) - MIN(salary)) FROM hr.employees;
-- 3
SELECT AVG(salary) FROM employees
GROUP BY job_id
ORDER BY AVG(salary) DESC;
-- 4
SELECT SUM(salary) FROM employees;
-- 5
SELECT MAX(salary),
MIN(salary),
SUM(salary),
ROUND(AVG(salary), 2)
FROM employees;
-- 6
SELECT COUNT(*)
FROM employees
WHERE job_id = 'IT_PROG';
-- 7
SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id;
-- 8
SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id
HAVING job_id = "it_prog";
-- 9
SELECT job_id, AVG(salary) AS 'average_salary'
FROM employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY average_salary DESC;
-- 10










