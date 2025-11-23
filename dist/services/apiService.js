"use strict";
// src/services/apiService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProducts = fetchProducts;
// https://ps-lms.vercel.app/curriculum/se/413/sba#:~:text=Handle%20Asynchronous%20Operations%3A
const Product_1 = require("../models/Product");
const errorHandler_1 = require("../utils/errorHandler");
//url for the DummyJSON products API 
const PRODUCTS_URL = "https://dummyjson.com/products";
async function fetchProducts() {
    try {
        const response = await fetch(PRODUCTS_URL);
        if (!response.ok) {
            throw new errorHandler_1.ApiError(`Failed to fetch products`, response.status);
        }
        const data = (await response.json());
        const products = data.products.map((item) => {
            return new Product_1.Product({
                id: item.id,
                title: item.title,
                description: item.description,
                category: item.category,
                price: item.price,
                discountPercentage: item.discountPercentage,
            });
        });
        return products;
    }
    catch (error) {
        // Re-throw ApiError instances
        if (error instanceof errorHandler_1.ApiError) {
            throw error;
        }
        // rethrow other errors as ApiError
        throw new errorHandler_1.ApiError("Network error occurred while fetching products");
    }
}
