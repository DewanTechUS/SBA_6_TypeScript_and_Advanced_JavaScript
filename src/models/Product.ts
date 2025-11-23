// https://ps-lms.vercel.app/curriculum/se/413/sba#:~:text=begin%20planning%20it.-,Part%203%3A%20Implementation,-Develop%20Product%20Class
// Product Class
 //// src/models/Product.ts
// Define the Product class with its properties
// we can check lesson link above for 
// also check lesson and zoom video for reference in per scholas portal 
import { calculateDiscount } from "../utils/discountCalculator";

import { calculateTax } from "../utils/taxCalculator";

export class Product {
  id: number;
  title: string;
description: string;
  category: string;

  price: number;
  discountPercentage: number;

// constructor to initialize a Product instance
  constructor(data: {
id: number;
title: string;
 description: string;
category: string;
 price: number;

 discountPercentage: number;
  }) 
  
  {
    // initialize the Product 
    // properties with the provided data //
    // https://www.w3schools.com/js/js_this.asp
// use 'this' keyword to refer to the current instance// i have added note in case we forget 
// also check lesson and zoom video for reference in per scholas portal 
this.id = data.id;
this.title = data.title;
this.description = data.description;
this.category = data.category;

    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
  }
}
// https://ps-lms.vercel.app/curriculum/se/413/sba#:~:text=Include%20methods%20displayDetails()%20and%20getPriceWithDiscount()%2C%20and%20implement%20them%20appropriately%20based%20on%20the%20provided%20data.
// Method to display product details
// note taken from previous code/lesson
  displayDetails(): void { 
   
    console.log(`ID:        ${this.id}`);

    console.log(`Title:     ${this.title}`);
    console.log(`Category:  ${this.category}`);
    console.log(`Price:     $${this.price.toFixed(2)}`);
   console.log(`Discount:  ${this.discountPercentage}%`);
    
console.log("Description:");
    console.log(this.description);
    
    }
    // https://ps-lms.vercel.app/curriculum/se/413/sba#:~:text=Include%20methods%20displayDetails()%20and%20getPriceWithDiscount()%2C%20and%20implement%20them%20appropriately%20based%20on%20the%20provided%20data.
// Method to calculate price after 
    // discount

  getPriceWithDiscount(): {
    originalPrice: number;
    discountAmount: number;
    discountedPrice: number;
    taxAmount: number;
    finalPrice: number;
  } {
    const originalPrice = this.price;
    const discountAmount = calculateDiscount(this.price, this.discountPercentage);
    const discountedPrice = originalPrice - discountAmount;
    const taxAmount = calculateTax(discountedPrice, this.category);
    const finalPrice = discountedPrice + taxAmount;

    return {
      originalPrice: Number(originalPrice.toFixed(2)),
      discountAmount,
      discountedPrice: Number(discountedPrice.toFixed(2)),
      taxAmount,
      finalPrice: Number(finalPrice.toFixed(2)),
    };
  }
}

