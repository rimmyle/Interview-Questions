SELECT
    name,
    bonus
FROM
    employee
    LEFT JOIN bonus USING (empId)
WHERE
    bonus < 1000
    OR bonus IS NULL;