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

   applyDiscount(percent) {
  this.products = this.products.map(p => {
    p.price = p.price * (1 - percent / 100);
    return p;
  });
}
}
