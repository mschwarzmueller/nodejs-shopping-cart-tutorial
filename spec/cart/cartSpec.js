const Cart = require('../../models/cart');
const Product = require('../../models/product');

let cart;
let product;

describe('Cart test suite', () => {

  beforeEach(() => {
    cart = new Cart({});
  });

  it('should return empty array', () => {
    expect(cart.generateArray()).toEqual([]);
  });
  
});