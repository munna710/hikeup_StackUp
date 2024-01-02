
import greendress from './geenw.jpeg';
import whitedress from './whitew.jpeg';
import bluedress from './bluew.jpeg';
import browndress from './brownW.jpeg';

const womenProducts = [
  {
    id: 1,
    name: 'GREEN DRESS',
    price: 1200,
    salePrice: 600,
    pic1: greendress,
    pic2: 'images/women/casual/wc1.jpg',
    description: 'This is a beautiful green dress.',
    reviews: [
      {
        text: 'Great dress!',
        rating: 5
      },
      {
        text: 'I love the color.',
        rating: 4
      }
    ]
  },
  {
    id: 2,
    name: 'WHITE DRESS',
    price: 1300,
    salePrice: 650,
    pic1: whitedress,
    pic2: 'images/women/casual/wc3.jpg',
  },
  {
    id: 3,
    name: 'BLUE DRESS',
    price: 1400,
    salePrice: 700,
    pic1: bluedress,
    pic2: 'images/women/casual/wc2.jpg',
  },
  
  {
    id: 4,
    name: 'BROWN DRESS',
    price: 1500,
    salePrice: 750,
    pic1: browndress,
    pic2: 'images/women/casual/wc10.jpg',
  },
  {
    id: 5,
    name: 'BROWN DRESS',
    price: 1500,
    salePrice: 750,
    pic1: browndress,
    pic2: 'images/women/casual/wc10.jpg',
  },
];

export default womenProducts;