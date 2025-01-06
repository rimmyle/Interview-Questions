SELECT
    s.user_id,
    ROUND(
        COUNT(
            CASE
                WHEN c.action = 'confirmed' THEN c.action
            END
        ) / CAST(COUNT(*) AS DECIMAL(2)),
        2
    ) AS confirmation_rate
FROM
    Signups s
    LEFT JOIN Confirmations c USING (user_id)
GROUP BY
    s.user_id;