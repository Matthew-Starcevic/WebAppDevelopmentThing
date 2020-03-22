const uuid = require('uuid');

const {
  getAllCarts,
  getCartByCartID,
  getCartsByCustomerID
} = require('../../services/cart-service');

const {
  selectCarts,
  selectCartByCartID,
  selectCartsByCustomerID
} = require('../../repositories/cart-repository');

jest.mock('../../repositories/cart-repository');

describe('getAllCarts', () => {
  let expectedFirstCart,
      expectedFirstCartID,
      expectedCustomerID;
  
  beforeEach(() => {
    expectedFirstCartID = uuid.v4();
    expectedCustomerID = uuid.v4();
    
    expectedFirstCart = {
      cartID: expectedFirstCartID,
      customerID: expectedCustomerID
    };
    
    selectCarts.mockReturnValue({
      rows: [{
        'cart_id': expectedFirstCartID,
        'customer_id': expectedCustomerID
      }]
    });
    
    selectCartsByCustomerID.mockReturnValue({
      rows: [{
        'cart_id': expectedFirstCartID,
        'customer_id': expectedCustomerID
      }]
    });
    
    selectCartByCartID.mockReturnValue({
      'cart_id': expectedFirstCartID,
      'customer_id': expectedCustomerID
    })
  });

  it('should get all the carts', () => {
    const actualCarts = getAllCarts();
    expect(selectCarts).toHaveBeenCalledTimes(1);
    expect(actualCarts).toEqual([
      expectedFirstCart
    ]);
  });
  
  it('should get a cart by a specific cartID', () => {
    const actualCart = getCartByCartID(expectedFirstCartID);
    expect(selectCartByCartID).toHaveBeenCalledTimes(1);
    expect(selectCartByCartID).toHaveBeenCalledWith(expectedFirstCartID);
    expect(actualCart).toEqual(expectedFirstCart);
  });
  
  it('should get all the carts by customerID', () => {
    const actualCarts = getCartsByCustomerID(expectedCustomerID);
    expect(selectCartsByCustomerID).toHaveBeenCalledTimes(1);
    expect(selectCartsByCustomerID).toHaveBeenCalledWith(expectedCustomerID);
    expect(actualCarts).toEqual([
      expectedFirstCart
    ]);
  });
});
