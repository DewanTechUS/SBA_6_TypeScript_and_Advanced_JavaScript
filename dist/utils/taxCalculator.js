"use strict";
// https://ps-lms.vercel.app/curriculum/se/413/sba#:~:text=Implement%20Utilities%3A
// src/utils/taxCalculator.ts
// src/utils/taxCalculator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
// tax rate for most products
const DEFAULT_TAX_RATE = 0.0475; // 4.75% // lesson note changed from 0.05 to 0.0475
// low tax rate for groceries category
const GROCERY_TAX_RATE = 0.03; // 3%
// this function should calculate how many dollars of tax are added
// based on the price and category.
// - Most products 4.75% tax
// - groceries category 3% tax
function calculateTax(price, category) {
    const isGroceries = category.toLowerCase() === "groceries";
    const taxRate = isGroceries ? GROCERY_TAX_RATE : DEFAULT_TAX_RATE;
    const taxAmount = price * taxRate;
    // Round to 2 decimal places for money
    return Number(taxAmount.toFixed(2));
}
