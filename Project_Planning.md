# Part 2: API Research

## For this project, I am using the DummyJSON Products API. It is a free test API that gives sample product data in JSON format. This lets me build e-commerce features without needing a real backend.

## The main endpoint I use is:
- https://dummyjson.com/products
- When I open this URL, it returns a list of products. Each product has many fields, but for this SBA I only need these:
- id
- title
- description
- category
- price
- discountPercentage

## These fields are enough for displaying product information and calculating discounts, tax, and the final price.

## I reviewed the official API documentation from DummyJSON and the SBA page to understand how the products endpoint works, how the data is structured, and how to request items using fetch.

## To understand how the API works, I looked at:
- How the /products endpoint returns data
- How the JSON structure is organized
- How to request products using fetch
- How to work with selected fields
- How to use limit/skip if needed

## Documentation Links I Used
- https://ps-lms.vercel.app/curriculum/se/413/sba#:~:text=%E2%94%94%E2%94%80%E2%94%80%20tsconfig.json-,Part%202%3A%20API%20Research,-API%20Research%3A
- https://dummyjson.com/docs/products#products-limit_skip:~:text=e%2Dcommerce%20applications.-,Get%20all%20products,-By%20default%20you
- https://dummyjson.com/docs/products#products-limit_skip:~:text=Limit%20and%20skip%20products -
- https://dummyjson.com/docs/products
- https://dummyjson.com/products

# This is my second planning file. I had to think deeply and create a clear plan in Microsoft Word, and I carefully read through the entire lesson to finalize and organize everything like this.