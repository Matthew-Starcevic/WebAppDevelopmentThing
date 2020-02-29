const Hapi = require('@hapi/hapi');
const uuid = require('uuid');

const init = async () => {
    
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    
    const customerDanTheman = {
        customerID: uuid.v4(),
        firstName: 'Dan',
        lastName: 'Theman',
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
        phoneNumber: '+9999999999'
    };
    
    const customerBobTemmie = {
        customerID: uuid.v4(),
        firstName: 'Bob',
        lastName: 'Temmie',
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
        phoneNumber: '+9999999998'
    };
    
    const customerJimbobDerpington = {
        customerID: uuid.v4(),
        firstName: 'Jimbob',
        lastName: 'Derpington',
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
        phoneNumber: '+9999999997'
    };
    
    let customers = [customerDanTheman, customerBobTemmie, customerJimbobDerpington];
    
    server.route({
        method: 'GET',
        path: '/customers',
        handler: (request, h) => {
            return customers;
        }
    });
    
    server.route({
        method: 'GET',
        path: '/customers/{customerID}',
        handler: (request, h) => {
            const {customerID} = request.params;
            const customer = customers.find((cust) => cust.customerID === customerID);
            
            if (!customer) {
                return h.response().code(404);
            }
            
            return customer;
        }
    });
    
    server.route({
        method: 'POST',
        path: '/customers',
        handler: (request, h) => {
            const customer = request.payload;
            const existingCustomer = customers.find((cust) => cust.customerID === customer.customerID);
            
            if (existingCustomer) {
                return h.response(existingCustomer).code(303);
            } else {
                customers.push(customer);
                return h.response(customer).code(201)
            }
        }
    });
    
    server.route({
        method: 'DELETE',
        path: '/customers/{customerID}',
        handler: (request, h) => {
            const {customerID} = request.params;
            const customer = customers.find((cust) => cust.customerID === customerID);
            
            if (!customer) {
                return h.response().code(404);
            }
            
            let newCustomers = [];
            
            customers.forEach((cust) => {
                if (cust.customerID !== customerID) {
                    newCustomers.push(cust);
                }
            });
            
            customers = newCustomers;
            
            return '';
            
        }
    });
    
    server.route({
        method: 'PUT',
        path: '/customers/{customerID}',
        handler: (request, h) => {
            const {customerID} = request.params;
            const updatedCustomer = request.payload;
        
            if (customerID !== updatedCustomer.customerID) {
                return h.response().code(409);
            }
            
            let newCustomers = [];
            
            customers.forEach((cust) => {
                if (cust.customerID === customerID) {
                    newCustomers.push(updatedCustomer);
                } else {
                    newCustomers.push(cust);
                }
            });
            
            customers = newCustomers;
            
            return '';
        }
    });
    
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

const item = {
    itemID: '02bbdbc7-e22e-4153-abd8-b5732a4ba6b5',
    name: 'One (1) Bonk to the Head',
    description: 'https://www.youtube.com/watch?v=gwxTZaa3NgI',
    price: 19.99,
    size: 'Big'
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

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
