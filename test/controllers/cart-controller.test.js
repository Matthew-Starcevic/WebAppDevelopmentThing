const Hapi = require('@hapi/hapi');
const uuid = require('uuid');
const {when} = require('jest-when');

const {initCartControllers} = require('../../controllers/cart-controller');
const {getAllCarts, getCartByCartID} = require('../../services/cart-service');
const {getCartItemsByCartID} = require('../../services/cartItem-service');

jest.mock('../../services/cart-service');
jest.mock('../../services/cartItem-service');

describe('cart controller', () => {
    let fakeServer,
        expectedCart,
        expectedCartID,
        expectedCarts,
        expectedCartItems;

    beforeAll(() => {
        fakeServer = Hapi.server({
            host: 'localhost',
            port: 3000
        });

        expectedCartID = uuid.v4();
        expectedCart = {
            cartID: expectedCartID
        };
        expectedCarts = [expectedCartID, uuid.v4()];
        expectedCartItems = [uuid.v4()];

        getAllCarts.mockReturnValue(expectedCarts);

        when(getCartByCartID)
            .calledWith(expectedCartID)
            .mockReturnValue(expectedCart);

        when(getCartItemsByCartID)
            .calledWith(expectedCartID)
            .mockReturnValue(expectedCartItems);

        initCartControllers(fakeServer);
    });

    it('should return all carts', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: '/carts'
        });

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCarts);
    });

    it('should return a cart by cartID', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: `/carts/${expectedCartID}`
        });

        expect(getCartByCartID).toHaveBeenCalledWith(expectedCartID);

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCart);
    });

    it('should return NOT_FOUND if a cart does not exist', async () => {
        const randomCartID = uuid.v4();

        const response = await fakeServer.inject({
            method: 'GET',
            url: `/carts/${randomCartID}`
        });

        expect(getCartByCartID).toHaveBeenCalledWith(randomCartID);
        expect(response.statusCode).toEqual(404);
    });

    it('should return all the cart items for a cart', async () => {
        const response = await fakeServer.inject({
            method: 'GET',
            url: `/carts/${expectedCartID}/cartItems`
        });

        expect(response.statusCode).toEqual(200);
        expect(response.result).toEqual(expectedCartItems);
    });

    it('should return NOT_FOUND if a cart does not exist when looking for its cart items', async () => {
        const randomCartID = uuid.v4();

        const response = await fakeServer.inject({
            method: 'GET',
            url: `/carts/${randomCartID}/cartItems`
        });

        expect(response.statusCode).toEqual(404);
    });
});
