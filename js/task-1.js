"use strict";

function isEnoughCapacity(products, containerSize) {
  let totalNumberOfProducts = 0;

  for (let product in products) {
    totalNumberOfProducts += products[product];
  }
  return totalNumberOfProducts < containerSize ? "true" : "false";

  // ==============  another method  =============== //
  //   let productValues = Object.values(products);
  //   for (let value of productValues) {
  //     totalNumberOfProducts += value;
  //   }

  // ==============  another method  =============== //

  //   let totalNumberOfProducts = Object.values(products).reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     0
  //   );

  // if (totalNumberOfProducts < containerSize) {
  //   return `true`;
  // } else {
  //   return `false`;
  // }
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
