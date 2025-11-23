// https://ps-lms.vercel.app/curriculum/se/413/sba#:~:text=begin%20planning%20it.-,Part%203%3A%20Implementation,-Develop%20Product%20Class
// Product Class
 //// src/models/Product.ts
// Define the Product class with its properties
// we can check lesson link above for 
// also check lesson and zoom video for reference in per scholas portal 
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
