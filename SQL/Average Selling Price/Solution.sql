SELECT
    p.product_id,
    COALESCE(
        ROUND(
            SUM(u.units * p.price) / CAST(SUM(u.units) AS DECIMAL),
            2
        ),
        0
    ) AS average_price
FROM
    prices p
    LEFT JOIN unitssold u ON p.product_id = u.product_id
    AND DATE(u.purchase_date) between DATE(start_date) AND DATE(end_date)
group by
    p.product_id;