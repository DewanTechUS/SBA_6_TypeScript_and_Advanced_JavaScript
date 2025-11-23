// src/index.ts
// Main Entry File for the SBA project
// i am planing to add html ui later
// so for now this will be console based app
// we can check lesson link above for 
// also check lesson and zoom video for reference in per scholas portal
import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";
import { calculateTax } from "./utils/taxCalculator";
import { handleError } from "./utils/errorHandler";


async function main() {
  console.log("Testing limited API request...\n");
  // testing 1 the limited API request
  // we can comment this out later
// fetching limited products with specific fields
//----------------------------------------
  fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price")
    .then((res) => res.json())
    .then((data) => console.log("Limited Products:", data));

// testing 2 the full product details
//----------------------------------------
// async function main(): Promise<void> {
//   console.log("Starting E-Commerce SBA App...\n");

  try {
    // fetch product data from the API (async/await)
    const products: Product[] = await fetchProducts();

    console.log(`Fetched ${products.length} products from the API.\n`);

    // just use the first 5 products to keep output shorter
    const sampleProducts = products.slice(0, 5);

    for (const product of sampleProducts) {
      // use OOP method to display details
      product.displayDetails();

      // use OOP method to calculate final price
      const pricing = product.getPriceWithDiscount();

      console.log("Pricing Breakdown:");

      console.log(`  Original Price:   $${pricing.originalPrice.toFixed(2)}`);

      console.log(`  Discount Amount:  -$${pricing.discountAmount.toFixed(2)}`);

      console.log(`  Discounted Price: $${pricing.discountedPrice.toFixed(2)}`);

      console.log(`  Tax Amount:       +$${pricing.taxAmount.toFixed(2)}`);

      console.log(`  Final Price:      $${pricing.finalPrice.toFixed(2)}`);

      console.log();
    }

    // extra example using the tax calculator directly
    const exampleTax = calculateTax(100, "Rocky's electronics");

    console.log(`Tax on $100 Rocky's electronics item: $${exampleTax.toFixed(2)}\n`);

    console.log("Final displaying products and pricing.\n");
  } catch (error) {
  
    handleError(error);
  }
}


main();
