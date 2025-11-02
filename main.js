import { Order } from "./src/Order.js";
import { Product } from "./src/product.js";

const order = new Order("Alice");
order.addProduct(new Product("Book", 10));
order.addProduct(new Product("Pen", 5));

console.log("Total:", order.getTotal());
console.log("Say hello");