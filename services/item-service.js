const {
  selectItems,
  selectItemByItemID
} = require('../repositories/item-repository');

const mapToModel = (item) => ({
  itemID: item['item_id'],
  name: item['name'],
  description: item['description'],
  price: item['price'],
  size: item['size']
});

const getAllItems = () => {
  const {rows} = selectItems();
  return rows.map(mapToModel);
};

const getItemByItemID = (itemID) => {
  const item = selectItemByItemID(itemID);
  return mapToModel(item);
};

module.exports = {
  getAllItems,
  getItemByItemID
};
