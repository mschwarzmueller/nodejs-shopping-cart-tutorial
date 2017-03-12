const Cart = require('../../models/cart');
const Product = require('../../models/product');

let cart;
let product;

describe('Cart Suite', () => {

  beforeEach(() => {
    cart = new Cart({});
  });

  it('should return empty array', () => {
    expect(cart.generateArray()).toEqual([]);
  });
  
});