const item = {
    itemID: '02bbdbc7-e22e-4153-abd8-b5732a4ba6b5',
    name: 'Ball cap',
    description: 'Drake stuff',
    price: 19.99,
    size: 'Large'
};

const firstName = 'Dude';
const lastName = 'Withaname';

const customer = {
    customerID: '5BA738D0-E31D-49A9-AB09-AE7CCD259CAD'
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
    phoneNumber: '+15155555555',
    customerCarts: '[B76A19B4-E5FD-4AB1-9B2E-47DC777F1655]'
};

const cart = {
    cartID: 'B76A19B4-E5FD-4AB1-9B2E-47DC777F1655',
    cartOwnerID: '5BA738D0-E31D-49A9-AB09-AE7CCD259CAD',
    createdDate: '1-15-2020',
    purchasedDate: '2-1-2020',
    CartItems: '[02bbdbc7-e22e-4153-abd8-b5732a4ba6b5]'
};

const cartItem = {
    inCart: 'B76A19B4-E5FD-4AB1-9B2E-47DC777F1655',
    cartItemIndex: 1,
    itemIs: '02bbdbc7-e22e-4153-abd8-b5732a4ba6b5',
    quantity: 1,
};

const itemNotFound = {
    statusCode: '404',
    error: 'Not Found',
    message: 'Item not found.'
};

const customerNotFound = {
    statusCode: '404',
    error: 'Not Found',
    message: 'Customer not found.'
};

const cartNotFound = {
    statusCode: '404',
    error: 'Not Found',
    message: 'Cart not found.'
};

const cartItemNotFound = {
    statusCode: '404',
    error: 'Not Found',
    message: 'Item not found in cart.'
};

console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartItem', cartItem);
console.log('itemNotFound', itemNotFound);
console.log('customerNotFound', customerNotFound);
console.log('cartNotFound', cartNotFound);
console.log('cartItemNotFound', cartItemNotFound);
