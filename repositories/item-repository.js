const uuid = require('uuid');

let items = [
  {
    'item_id': '0150d26f-a0db-4e5a-b8d3-c5617d185147',
    'name': 'Drake Battle Armor',
    'description': 'Get your medieval on with this hand-forged Drake-colored combination plate/chainmail.',
    'price': '499.99',
    'size': 'Medium, Large'
  },
  {
    'item_id': '155ab336-d283-4f5a-999c-d948e6ca6143',
    'name': 'Stone of the Ancients',
    'description': 'A stone full of ancient, untold power. Why do we have it? Who knows!',
    'price': '999.99',
    'size': 'Small'
  }
];

const selectItems = () => ({
  rows: items,
  error: new Error(),
  driver: 'postgres'
});

const selectItemByItemID = (itemID) =>
  items.find((item) => item['item_id'] === itemID);

module.exports = {
  selectItems,
  selectItemByItemID
};
