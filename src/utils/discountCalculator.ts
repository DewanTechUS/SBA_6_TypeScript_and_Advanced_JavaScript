// https://ps-lms.vercel.app/curriculum/se/413/sba#:~:text=Discount%20Calculator%20Module%20(discountCalculator.ts)%3A
// src/utils/discountCalculator.ts
// based on the price and discount percentage.
// 100, discountPercentage = 10 → returns 10
export function calculateDiscount(
    price: number, 
    discountPercentage: number): 
    number {

  if (discountPercentage <= 0) {
return 0;
  }
  const discountAmount = (price * discountPercentage) / 100; // Calculate discount amount // gave me a error here need to hound this down later
  return Number(discountAmount.toFixed(2));
}

