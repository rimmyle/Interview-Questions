SELECT
    *
FROM
    Cinema
WHERE
    description NOT LIKE 'boring'
    and MOD(id, 2) = 1
ORDER BY
    rating DESC;