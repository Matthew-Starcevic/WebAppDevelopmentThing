const {
  selectCartItemByCartItemID,
  selectCartItemsByCartID
} = require('../repositories/cartItem-repository');

const mapToModel = (cartItem) => ({
  cartItemID: cartItem['cart_item_id'],
  inCart: cartItem['in_cart'],
  itemIs: cartItem['item_is'],
  quantity: cartItem['quantity']
});

const getCartItemByCartItemID = (cartItemID) => {
  const cartItem = selectCartItemByCartItemID(cartItemID);

  return mapToModel(cartItem);
};

const getCartItemsByCartID = (cartID) => {
  const {rows} = selectCartItemsByCartID(cartID);

  return rows.map(mapToModel);
};

module.exports = {
  getCartItemByCartItemID,
  getCartItemsByCartID
};
