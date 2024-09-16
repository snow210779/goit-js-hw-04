function isEnoughCapacity(products, containerSize) {
  const productValue = Object.values(products);
  let totalProducts = 0;
  for (const product of productValue) {
    totalProducts += product;
  }
  return totalProducts <= containerSize;
}
isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8);
isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12);
isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14);
isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7);
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
