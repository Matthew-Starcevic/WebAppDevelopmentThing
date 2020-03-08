const {
  getAllItems,
  getItemByItemID
} = require('../services/item-service')

const getItemsRoute = (server) => {
  server.route({
    path: '/items',
    method: 'GET',
    handler: (request, h) => {
      return getAllItems();
    }
  });
};

const getItemByItemIDRoute = (server) => {
  server.route({
    path: '/items/{itemID}',
    method: 'GET',
    handler: (request, h) => {
      const item = getItemByItemID(request.params.itemID);
      
      if (!item) {
        return h.response().code(404);
      }
      
      return item;
    }
  });
};

const initItemControllers = (server) => {
  getItemsRoute(server);
  getItemByItemIDRoute(server);
};

module.exports = {
  initItemControllers
};
