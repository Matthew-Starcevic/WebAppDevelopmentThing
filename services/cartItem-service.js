const {
  selectCartItemByCartItemID
} = require('../repositories/cartItem-repository');

const mapToModel = (cartItem) => ({
  inCart: cartItem['in_cart'],
  cartItemID: cartItem['cart_item_id'],
  itemIs: cartItem['item_is'],
  quantity: cartItem['quantity']
});

const getCartItemByCartItemID = (cartItemID) => {
  const cartItem = selectCartItemByCartItemID(cartItemID);
  return mapToModel(cartItem);
};

module.exports = {
  getCartItemByCartItemID
};
