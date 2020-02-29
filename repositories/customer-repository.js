const uuid = require('uuid');

let customers = [
  {
    'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
    'first_name': 'Dude',
    'last_name': 'Withaname',
    'email': 'Dude.Withaname@drake.edu'
  }
];

const selectCustomers = () => ({
  rows: customers,
  error: new Error(),
  driver: 'postgres'
});

const selectCustomerByCustomerID = (customerID) => ({
  customers.find((customer) => customer['customer_id'] === customerID);
});

module.exports = {
  selectCustomers,
  selectCustomerByCustomerID
};
