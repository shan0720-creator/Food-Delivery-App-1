export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/burger2.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/Italian2.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/chinesefood2.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/noodles.webp'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/sweets.png'),
    },

]


export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Dominoz Pizza',
            image: require('../assets/images/dominoz.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -87.5324269,
            lat: 39.2145602,
            address: '534B third street',
            stars: 4,
            reviews: '5k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'Veg Pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaIcon.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        },
        {
            id: 3,
            name: 'KFC',
            image: require('../assets/images/KFC.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'grilled chicken burger',
                   description: 'grilled chicken burger',
                   price: 10,
                   image:  require('../assets/images/burger2.png')
                },
                {
                   id: 3,
                   name: 'schezwan noodles',
                   description: 'schezwan noodles',
                   price: 10,
                   image:  require('../assets/images/Italian2.png')
                },
            ]
    
        }
    ]
}