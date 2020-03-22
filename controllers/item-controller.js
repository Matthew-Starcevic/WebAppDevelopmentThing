const {
  getAllItems,
  getItemByItemID
} = require('../services/item-service');

const getItemsRoute = (server) => {
  server.route({
    handler: () => getAllItems(),
    method: 'GET',
    path: '/items'
  });
};

const getItemByItemIDRoute = (server) => {
  server.route({
    handler: (request, h) => {
      const item = getItemByItemID(request.params.itemID);

      if (!item) {
        return h.response().code(404);
      }

      return item;
    },
    method: 'GET',
    path: '/items/{itemID}'
  });
};

const initItemControllers = (server) => {
  getItemsRoute(server);
  getItemByItemIDRoute(server);
};

module.exports = {
  initItemControllers
};
