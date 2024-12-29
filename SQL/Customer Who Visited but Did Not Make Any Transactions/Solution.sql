SELECT
    customer_id,
    count(*) AS count_no_trans
FROM
    visits
    LEFT JOIN transactions USING (visit_id)
WHERE
    transaction_id IS NULL
GROUP BY
    customer_id
ORDER BY
    count_no_trans ASC;