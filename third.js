const products = [
  { name: "Milk", quantity: 10, isExpired: true },
  { name: "Bread", quantity: 2, isExpired: false },
  { name: "Eggs", quantity: 12, isExpired: false },
  { name: "Butter", quantity: 3, isExpired: true },
  { name: "Juice", quantity: 15, isExpired: false },
];

const list = [];

for (let product of products) {
  if (product.quantity < 5 || product.isExpired) {
    list.push(`Action needed ${product.name}`);
  }
}

console.log(list);
