// Bai 1:

const products = [];

const product1 = {
  name: "product A",
  cost: 200,
  quanlity: 120,
};
const product2 = {
  name: "product B",
  cost: 230,
  quanlity: 500,
};
const product3 = {
  name: "product C",
  cost: 100,
  quanlity: 200,
};

products.splice(0, 0, product1, product2, product3);
console.log(products);

console.log(products[2].quanlity);
console.log(products[1]);
