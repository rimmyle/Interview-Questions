select product_name, year, price from product left join sales using(product_id) where year is not null and price is not null;