import bcrypt from 'bcryptjs';
const data={
  users: [
    {
      name: 'Crystal',
      email: 'crystal@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Kishore',
      email: 'kishore@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

  products:[
      {

        name:'Maltipoo DOGGGYY',
        image:'/images/dog.jpg',
        price: 7000,
        countInStock: 10,
        brand: 'DOG',
        rating:4.5,
        numreviews:10,
        description:'HI! I AM SHEEROO',
      },

      {

        name:'Maltipoo DOGG',
        image:'/images/dog.jpg',
        price: 7000,
        countInStock: 10,
        brand: 'DOG',
        rating:4.5,
        numreviews:10,
        description:'HI! I AM SHEEROO',
      },

      {

        name:'Maltipoo DOGGG',
        image:'/images/p3.jpg',
        price: 7000,
        countInStock: 10,
        brand: 'DOG',
        rating:1.5,
        numreviews:10,
        description:'HI! I AM SHEEROO',
      },

      {

        name:'Maltipoo DOG3',
        image:'/images/dog.jpg',
        price: 7000,
        countInStock: 10,
        brand: 'DOG',
        rating:4.5,
        numreviews:10,
        description:'HI! I AM SHEEROO',
      },

      {

        name:'Maltipoo DOG2',
        image:'/images/dog.jpg',
        price: 7000,
        countInStock: 10,
        brand: 'DOG',
        rating:4.5,
        numreviews:10,
        description:'HI! I AM SHEEROO',
      },

      {

        name:'I AM NOT MALTIPOO',
        image:'/images/dog.jpg',
        price: 7000,
        countInStock: 10,
        brand: 'DOG',
        rating:4.5,
        numreviews:10,
        description:'HI! I AM NOT SHEEROO',
      },

  ]
};

export default data;
