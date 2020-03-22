const uuid = require('uuid');

const {
  selectCarts,
  selectCartByCartID,
  selectCartsByCustomerID
} = require('../../repositories/cart-repository');

describe('cart repository', () => {
  let firstCartID,
      secondCartID,
      expectedCustomerID,
      expectedFirstCart,
      expectedSecondCart;

  beforeEach(() => {
    firstCartID = '490215b7-ab53-450f-8ecf-b1c3e035c640';
    secondCartID = '6997ddba-abd6-4547-8398-205d4d8946e8';
    expectedCustomerID = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28';
    expectedFirstCart = {
      'cart_id': firstCartID,
      'customer_id': expectedCustomerID
    };
    expectedSecondCart = {
      'cart_id': secondCartID,
      'customer_id': expectedCustomerID
    };
  });
  describe('selectCarts', () => {
    it('should return all the carts', () => {
      const actualCarts = selectCarts();
      const [actualFirstCart, actualSecondCart] = actualCarts.rows;

      expect(actualFirstCart).toEqual(expectedFirstCart);
      expect(actualSecondCart).toEqual(expectedSecondCart);
    });
  });
  describe('selectCartByCartID', () => {
    it('should return a specific cart by cartID', () => {
      const actualFirstCart = selectCartByCartID(firstCartID);

      expect(actualFirstCart).toEqual({
        'cart_id': firstCartID,
        'customer_id': expectedCustomerID
      });
      const actualSecondCart = selectCartByCartID(secondCartID);

      expect(actualSecondCart).toEqual({
        'cart_id': secondCartID,
        'customer_id': expectedCustomerID
      });
    });
  });
  describe('selectCartsByCustomerID', () => {
    it('should return carts by a customerID', () => {
      const actualCarts = selectCartsByCustomerID(expectedCustomerID);

      expect(actualCarts.rows).toEqual([
        expectedFirstCart,
        expectedSecondCart
      ]);
    });
    it('should return no rows if there are no carts for a customerID', () => {
      const actualCarts = selectCartsByCustomerID(uuid.v4());

      expect(actualCarts.rows).toEqual([]);
    });
  });
});
