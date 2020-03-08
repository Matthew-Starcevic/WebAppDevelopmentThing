const uuid = require('uuid');

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
    firstCustomerID = '363e3a4e-e184-47e9-b89b-f22d9433bdf2';
    secondCustomerID = '7f2bf2dd-1d68-4ad4-8778-59099af82fb5';
    expectedFirstCustomerFirstName = 'Dude';
    expectedFirstCustomerLastName = 'Withaname';
    expectedSecondCustomerFirstName = 'Bob';
    expectedSecondCustomerLastName = 'Temmie';
    expectedFirstCustomerEmail = 'Dude.Withaname@drake.edu';
    expectedSecondCustomerEmail = 'Bob.Temmie@drake.edu';
    
    expectedFirstCustomer = {
      'customer_id': firstCustomerID,
      'first_name': expectedFirstCustomerFirstName,
      'last_name': expectedFirstCustomerLastName,
      'email': expectedFirstCustomerEmail
    };
    expectedSecondCustomer = {
      'customer_id': secondCustomerID,
      'first_name': expectedSecondCustomerFirstName,
      'last_name': expectedSecondCustomerLastName,
      'email': expectedSecondCustomerEmail
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
        'first_name': expectedFirstCustomerFirstName,
        'last_name': expectedFirstCustomerLastName,
        'email': expectedFirstCustomerEmail
      });
      
      const actualSecondCustomer = selectCustomerByCustomerID(secondCustomerID);
      expect(actualSecondCustomer).toEqual({
        'customer_id': secondCustomerID,
        'first_name': expectedSecondCustomerFirstName,
        'last_name': expectedSecondCustomerLastName,
        'email': expectedSecondCustomerEmail
      });
    });
  });
});
