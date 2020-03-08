const {
  selectCarts,
  selectCartByCartID,
  selectCartsByCustomerID
} = require('../repositories/cart-repository');

const mapToModel = (cart) => ({
  cartID: cart['cart_id'],
  customerID: cart['customer_id'],
  createdDate: cart['created_date'],
  purchasedDate: cart['purchased_date']
});

const getAllCarts = () => {
  const {rows} = selectCarts();
  return rows.map(mapToModel);
};

const getCartByCartID = (cartID) => {
  const cart = selectCartByCartID(cartID);
  return mapToModel(cart);
};

const getCartsByCustomerID = (customerID) => {
  const {rows} = selectCartsByCustomerID(customerID);
  return rows.map(mapToModel);
};

module.exports = {
  getAllCarts,
  getCartByCartID,
  getCartsByCustomerID
};
