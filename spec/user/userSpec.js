const Cart = require('../../models/cart');

describe('Cart Suite', function() {
  var cart = new Cart({});

  it('should return empty array', function() {
    expect(cart.generateArray()).toEqual([]);
  });

  
});