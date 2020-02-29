const {
  getAllCustomers,
  getCustomerByCustomerID
} = require('../services/customer-service');

const {getCartsByCustomerID} = require('../services/cart-service');

const getCustomersCartsRoute = (server) => {
  server.route({
    path: '/customers/{customerID}/carts',
    method: 'GET',
    handler: (request, h) => {
      const customerID = request.params.customerID;
      const customer = getCustomerByCustomerID(customerID);
      
      if (!customer) {
        return h.response().code(404);
      }
      
      return getCartsByCustomerID(customerID);
    }
  });
};

const getCustomersRoute = (server) => {
  server.route({
    path: '/customers',
    method: 'GET',
    handler: (request, h) => {
       return getAllCustomers();
    }
  });
};

const getCustomerByCustomerIDRoute = (server) => {
  server.route({
    path: '/customers/{customerID}',
    method: 'GET',
    handler: (request, h) => {
      const customer = getCustomerByCustomerID(request.params.customerID);
      
      if (!customer) {
        return h.response().code(404);
      }
    
      return customer;
    }
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
