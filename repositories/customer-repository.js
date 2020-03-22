const customers = [
  {
    'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
    'email': 'Dude.Withaname@drake.edu',
    'first_name': 'Dude',
    'last_name': 'Withaname'
  },
  {
    'customer_id': '7f2bf2dd-1d68-4ad4-8778-59099af82fb5',
    'email': 'Bob.Temmie@drake.edu',
    'first_name': 'Bob',
    'last_name': 'Temmie'
  }
];

const selectCustomers = () => ({
  rows: customers
});

const selectCustomerByCustomerID = (customerID) =>
  customers.find((customer) => customer['customer_id'] === customerID);

module.exports = {
  selectCustomerByCustomerID,
  selectCustomers
};
