SELECT
    e.name
FROM
    employee e
    JOIN employee m ON e.id = m.managerId
GROUP BY
    e.id,
    e.name
HAVING
    count(e.id) >= 5;