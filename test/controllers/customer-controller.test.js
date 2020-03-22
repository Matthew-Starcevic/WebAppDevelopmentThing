const Hapi = require('@hapi/hapi');
const uuid = require('uuid');
const {when} = require('jest-when');

const {initCustomerControllers} = require('../../controllers/customer-controller');
const {getAllCustomers, getCustomerByCustomerID} = require('../../services/customer-service');
const {getCartsByCustomerID} = require('../../services/cart-service');

jest.mock('../../services/customer-service');
jest.mock('../../services/cart-service');

describe('customer controller', () => {
    let fakeServer,
        expectedCustomer,
        expectedCustomerID,
        expectedCustomers,
        expectedCarts;

    beforeAll(() => {
        fakeServer = Hapi.server({
            host: 'localhost',
            port: 3000
        });

        expectedCustomerID = uuid.v4();
        expectedCustomer = {
            customerID: expectedCustomerID
        };
        expectedCustomers = [expectedCustomerID, uuid.v4()];
        expectedCarts = [uuid.v4()];

        getAllCustomers.mockReturnValue(expectedCustomers);

        when(getCustomerByCustomerID)
            .calledWith(expectedCustomerID)
            .mockReturnValue(expectedCustomer);

        when(getCartsByCustomerID)
            .calledWith(expectedCustomerID)
            .mockReturnValue(expectedCarts);

        initCustomerControllers(fakeServer);
    });

    it('should return all customers', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: '/customers'
        });

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCustomers);
    });

    it('should return a customer by customerID', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: `/customers/${expectedCustomerID}`
        });

        expect(getCustomerByCustomerID).toHaveBeenCalledWith(expectedCustomerID);

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCustomer);
    });

    it('should return NOT_FOUND if a customer does not exist', async () => {
        const randomCustomerID = uuid.v4();

        const response = await fakeServer.inject({
            method: 'GET',
            url: `/customers/${randomCustomerID}`
        });

        expect(getCustomerByCustomerID).toHaveBeenCalledWith(randomCustomerID);
        expect(response.statusCode).toEqual(404);
    });

    it('should return all the carts for a customer', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: `/customers/${expectedCustomerID}/carts`
        });

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCarts);
    });

    it('should return NOT_FOUND if a customer does not exist when looking for their carts', async () => {
        const randomCustomerID = uuid.v4();

        const response = await fakeServer.inject({
            method: 'GET',
            url: `/customers/${randomCustomerID}/carts`
        });

        expect(response.statusCode).toEqual(404);
    });
});