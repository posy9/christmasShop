 var schema = {
    "type": "array",
    "minItems": 1,
    "maxItems": 6,
    "items": {
 type: 'object',
        properties: {
            toyName: {
                type: 'faker',
                faker: 'name.firstName'
            },
            price: {
                type: 'faker',
                faker: 'name.price' 
            },
            shop: {
                type: 'chance',
                chance: 'company'
            },
            quantity: {
                type: 'integer',
                minimum: 0,
                maximum: 100,
            }
        },
        required: ['toyname', 'price', 'shop','quantity']
    }
};

