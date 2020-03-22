const {
  selectCustomers,
  selectCustomerByCustomerID
} = require('../repositories/customer-repository');

const mapToModel = (customer) => ({
  customerID: customer['customer_id'],
  email: customer['email'],
  firstName: customer['first_name'],
  lastName: customer['last_name']
});

const getAllCustomers = () => {
  const {rows} = selectCustomers();

  return rows.map(mapToModel);
};

const getCustomerByCustomerID = (customerID) => {
  const customer = selectCustomerByCustomerID(customerID);

  if (!customer) {
    return null;
  }

  return mapToModel(customer);
};

module.exports = {
  getAllCustomers,
  getCustomerByCustomerID
};
