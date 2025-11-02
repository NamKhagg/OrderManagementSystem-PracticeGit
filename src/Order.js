export class Order {

 constructor(customerName, shippingFee = 0) {
  this.customerName = customerName;
  this.products = [];
  this.shippingFee = shippingFee;
}


  addProduct(product) {
    this.products.push(product);
  }

 getTotal() {
  const subtotal = this.products.reduce((sum, p) => sum + p.price, 0);
  return subtotal + this.shippingFee;
}

 applyDiscount(percent) {
    this.products = this.products.map(p => {
      p.price = p.price * (1 - percent / 100);
      return p;
    });
  }


}
