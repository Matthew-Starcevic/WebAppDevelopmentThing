const uuid = require('uuid');

let cartItems = [
  {
    'in_cart': '490215b7-ab53-450f-8ecf-b1c3e035c640',
    'cart_item_id': '10f68c87-fff6-44ff-87e5-aad5c53fa644',
    'item_is': '0150d26f-a0db-4e5a-b8d3-c5617d185147',
    'quantity': '1'
  },
  {
    'in_cart': '6997ddba-abd6-4547-8398-205d4d8946e8',
    'cart_item_id': '31fcb0f8-9703-4401-b32d-eed7995682d7',
    'item_is': '155ab336-d283-4f5a-999c-d948e6ca6143',
    'quantity': '1'
  }
];

const selectCartItemByCartItemID = (cartItemID) =>
  cartItems.find((cartItem) => cartItem['cart_item_id'] === cartItemID);

module.exports = {
  selectCartItemByCartItemID
};
