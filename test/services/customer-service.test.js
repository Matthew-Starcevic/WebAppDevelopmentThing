const uuid = require('uuid');

const {
  getAllCustomers,
  getCustomerByCustomerID
} = require('../../services/customer-service');
const {
  selectCustomers,
  selectCustomerByCustomerID
} = require('../../repositories/customer-repository');

jest.mock('../../repositories/customer-repository');

describe('getAllCustomers', () => {
  let expectedCustomer,
      expectedCustomerID,
      expectedCustomerFirstName,
      expectedCustomerLastName,
      expectedCustomerEmail;

  beforeEach(() => {
    expectedCustomerID = uuid.v4();
    expectedCustomerFirstName = 'Dude';
    expectedCustomerLastName = 'Withaname';
    expectedCustomerEmail = 'Dude.Withaname@drake.edu';
    expectedCustomer = {
      customerID: expectedCustomerID,
      email: expectedCustomerEmail,
      firstName: expectedCustomerFirstName,
      lastName: expectedCustomerLastName
    };
    selectCustomers.mockReturnValue({
      rows: [{
        'customer_id': expectedCustomerID,
        'email': expectedCustomerEmail,
        'first_name': expectedCustomerFirstName,
        'last_name': expectedCustomerLastName
      }]
    });
    selectCustomerByCustomerID.mockReturnValue({
      'customer_id': expectedCustomerID,
      'email': expectedCustomerEmail,
      'first_name': expectedCustomerFirstName,
      'last_name': expectedCustomerLastName
    });
  });
  it('should get all the customers', () => {
    const actualCustomers = getAllCustomers();

    expect(selectCustomers).toHaveBeenCalledTimes(1);
    expect(actualCustomers).toEqual([
      expectedCustomer
    ]);
  });
  it('should get a customer by a specific customerID', () => {
    const actualCustomer = getCustomerByCustomerID(expectedCustomerID);

    expect(selectCustomerByCustomerID).toHaveBeenCalledTimes(1);
    expect(selectCustomerByCustomerID).toHaveBeenCalledWith(expectedCustomerID);
    expect(actualCustomer).toEqual(expectedCustomer);
  });
});
