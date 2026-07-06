const products = require('./products');

function findProduct(productName) {
  const product = products.find(p => p.name === productName);
  
  if (product) {
    console.log(product);
  } else {
    console.log("Product not found");
  }
}

// Test
findProduct("Laptop");
findProduct("Shoes");
findProduct("Tablet");
