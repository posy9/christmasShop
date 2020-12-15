var shemaReviews = {
    "type": "array",
    "minItems": 1,
    "maxItems": 6,
    "items": {
 type: 'object',
        properties: {
            nameAndSurname: {
                type: 'faker',
                faker: 'name.findName'
            },
            reviews: {
                type: 'chance',
                faker: 'paragraph' 
            },
            shop: {
                type: 'chance',
                chance: 'company'
            },
            rating: {
                type: 'integer',
                minimum: 0,
                maximum: 10,
            }
            daysPassed: {
                type: 'integer',
                minimum: 0,
                maximum: 160,
            }
        },
        required: ['nameAndSurname', 'reviews', 'shop','rating','daysPassed']
    }
};