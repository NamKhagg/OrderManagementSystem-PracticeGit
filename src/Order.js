export class Order {
  constructor(customerName) {
    this.customerName = customerName;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotal() {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}
