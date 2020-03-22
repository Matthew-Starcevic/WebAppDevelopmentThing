const {
  selectCustomers,
  selectCustomerByCustomerID
} = require('../../repositories/customer-repository');

describe('customer repository', () => {
  let firstCustomerID,
      secondCustomerID,
      expectedFirstCustomerFirstName,
      expectedFirstCustomerLastName,
      expectedSecondCustomerFirstName,
      expectedSecondCustomerLastName,
      expectedFirstCustomerEmail,
      expectedSecondCustomerEmail,
      expectedFirstCustomer,
      expectedSecondCustomer;

  beforeEach(() => {
    firstCustomerID = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28';
    secondCustomerID = '7f2bf2dd-1d68-4ad4-8778-59099af82fb5';
    expectedFirstCustomerFirstName = 'Dude';
    expectedFirstCustomerLastName = 'Withaname';
    expectedSecondCustomerFirstName = 'Bob';
    expectedSecondCustomerLastName = 'Temmie';
    expectedFirstCustomerEmail = 'Dude.Withaname@drake.edu';
    expectedSecondCustomerEmail = 'Bob.Temmie@drake.edu';
    expectedFirstCustomer = {
      'customer_id': firstCustomerID,
      'email': expectedFirstCustomerEmail,
      'first_name': expectedFirstCustomerFirstName,
      'last_name': expectedFirstCustomerLastName
    };
    expectedSecondCustomer = {
      'customer_id': secondCustomerID,
      'email': expectedSecondCustomerEmail,
      'first_name': expectedSecondCustomerFirstName,
      'last_name': expectedSecondCustomerLastName
    };
  });
  describe('selectCustomers', () => {
    it('should return all the customers', () => {
      const actualCustomers = selectCustomers();
      const [actualFirstCustomer, actualSecondCustomer] = actualCustomers.rows;

      expect(actualFirstCustomer).toEqual(expectedFirstCustomer);
      expect(actualSecondCustomer).toEqual(expectedSecondCustomer);
    });
  });
  describe('selectCustomerByCustomerID', () => {
    it('should return a specific customer by customerID', () => {
      const actualFirstCustomer = selectCustomerByCustomerID(firstCustomerID);

      expect(actualFirstCustomer).toEqual({
        'customer_id': firstCustomerID,
        'email': expectedFirstCustomerEmail,
        'first_name': expectedFirstCustomerFirstName,
        'last_name': expectedFirstCustomerLastName
      });
      const actualSecondCustomer = selectCustomerByCustomerID(secondCustomerID);

      expect(actualSecondCustomer).toEqual({
        'customer_id': secondCustomerID,
        'email': expectedSecondCustomerEmail,
        'first_name': expectedSecondCustomerFirstName,
        'last_name': expectedSecondCustomerLastName
      });
    });
  });
});
