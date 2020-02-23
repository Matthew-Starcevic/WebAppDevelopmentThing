const item = {
    itemID: '02bbdbc7-e22e-4153-abd8-b5732a4ba6b5',
    name: 'One (1) Bonk to the Head',
    description: 'https://www.youtube.com/watch?v=gwxTZaa3NgI',
    price: 19.99,
    size: 'Big'
};

const firstName = 'Dude';
const lastName = 'Withaname';

const customer = {
    customerID: '5BA738D0-E31D-49A9-AB09-AE7CCD259CAD'
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
    phoneNumber: '+9999999999'
};

const cart = {
    cartID: 'B76A19B4-E5FD-4AB1-9B2E-47DC777F1655',
    cartOwnerID: '5BA738D0-E31D-49A9-AB09-AE7CCD259CAD',
    createdDate: '1-15-2020',
    purchasedDate: '2-1-2020'
};

const cartItems = [
    {
        inCart: 'B76A19B4-E5FD-4AB1-9B2E-47DC777F1655',
        cartItemId: '3cac179b-8da2-4618-b80d-0afa63e8fe7b',
        itemIs: '02bbdbc7-e22e-4153-abd8-b5732a4ba6b5',
        quantity: 1
    },
    {
        inCart: 'B76A19B4-E5FD-4AB1-9B2E-47DC777F1655',
        cartItemId: '8f28e62d-b2cd-452d-baa4-3e52a994715e',
        itemIs: '05dcd5c5-2453-426d-af1e-cb1cd3e33bad',
        quantity: 7
     }
];

console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartItem', cartItem);
