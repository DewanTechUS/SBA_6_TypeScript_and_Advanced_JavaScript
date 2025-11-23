// src/services/apiService.ts

// https://ps-lms.vercel.app/curriculum/se/413/sba#:~:text=Handle%20Asynchronous%20Operations%3A

import { Product } from "../models/Product";


import { ApiError } from "../utils/errorHandler";
//url for the DummyJSON products API 
const API_URL = "https://dummyjson.com/products";

//const API_URL = "https://dummyjson.com/products";

interface DummyJsonProduct {
  id: number;
  title: string;
  description: string;

  category: string;
  price: number;
  discountPercentage: number;
}

interface ProductsResponse {
  products: DummyJsonProduct[];
}


export async function fetchProducts(): Promise<Product[]> {
  try {
  
    const response = await fetch(API_URL);

  
    if (!response.ok) {
      throw new ApiError(`Failed to fetch products`, response.status);
    }

 
    const data = (await response.json()) as ProductsResponse;

    const products = data.products.map((item) => {
      return new Product({
        id: item.id,
title: item.title,
    description: item.description,
        category: item.category,
        price: item.price,
        discountPercentage: item.discountPercentage,
      });
    });

    return products;

  } catch (error) {
    // Re-throw ApiError instances
    if (error instanceof ApiError) {
      throw error;
    }

    // rethrow other errors as ApiError
    throw new ApiError("Network error occurred while fetching products");
  }
}
