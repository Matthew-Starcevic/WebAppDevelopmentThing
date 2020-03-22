const {
  getAllCustomers,
  getCustomerByCustomerID
} = require('../services/customer-service');

const {getCartsByCustomerID} = require('../services/cart-service');

const getCustomersCartsRoute = (server) => {
  server.route({
    handler: (request, h) => {
      const customerID = request.params.customerID;
      const customer = getCustomerByCustomerID(customerID);
      
      if (!customer) {
        return h.response().code(404);
      }
      
      return getCartsByCustomerID(customerID);
    },
    path: '/customers/{customerID}/carts',
    method: 'GET'
  });
};

const getCustomersRoute = (server) => {
  server.route({
    handler: () => getAllCustomers(),
    method: 'GET',
    path: '/customers'
  });
};

const getCustomerByCustomerIDRoute = (server) => {
  server.route({
    handler: (request, h) => {
      const customer = getCustomerByCustomerID(request.params.customerID);
      
      if (!customer) {
        return h.response().code(404);
      }
    
      return customer;
    },
    path: '/customers/{customerID}',
    method: 'GET'
  });
};

const initCustomerControllers = (server) => {
  getCustomersRoute(server);
  getCustomerByCustomerIDRoute(server);
  getCustomersCartsRoute(server);
};

module.exports = {
  initCustomerControllers
};
