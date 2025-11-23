"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiService_1 = require("./services/apiService");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
async function main() {
    console.log("Starting E-Commerce SBA App...\n");
    try {
        // fetch product data from the API (async/await)
        const products = await (0, apiService_1.fetchProducts)();
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
        const exampleTax = (0, taxCalculator_1.calculateTax)(100, "Rocky's electronics");
        console.log(`Tax on $100 Rocky's electronics item: $${exampleTax.toFixed(2)}\n`);
        console.log("Final displaying products and pricing.\n");
    }
    catch (error) {
        (0, errorHandler_1.handleError)(error);
    }
}
main();
