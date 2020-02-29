const uuid = require('uuid');

let carts = [
  {
    'cart_id': uuid.v4(),
    'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
    'created_date': new Date(),
    'purchased_date': new Date()
  },
  {
    'cart_id': uuid.v4(),
    'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
    'created_date': new Date(),
    'purchased_date': new Date()
  }
];

const selectCarts = () => ({
  rows: carts,
  error: new Error(),
  driver: 'postgres'
});

const selectCartByCartID = (cartID) =>
  carts.find((cart) => cart['cart_id'] === cartID);

const selectCartsByCustomerID = (customerID) => ({
  rows: carts.filter((cart) => cart['customer_id'] === customerID)
});

module.exports = {
  selectCarts,
  selectCartByCartID,
  selectCartsByCustomerID
};
