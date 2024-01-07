import reddress from './redg.JPG';
import greendress from './grdres.JPG';
import floraldress from '.floralg.JPG';
import bluedress  from './blueg.JPG';

const girlsProducts = [
    {
      id: 1,
      name: 'RED DRESS',
      price: 1200,
      salePrice: 600,
      pic1: reddress,
      pic2: 'images/women/casual/wc1.jpg',
      color:'red',
      sizes:['S', 'M', 'L', 'XL'],
      description: 'This is a beautiful red dress.',
      reviews: [
        {
          user :'Lisa',
          text: 'Great dress!',
          rating: 5
        },
        {
          user :'Rose',
          text: 'I love the color.',
          rating: 4
        }
      ]
    },
    {
      id: 2,
      name: 'GREEN DRESS',
      price: 1300,
      salePrice: 650,
      pic1: greendress,
      pic2: 'images/women/casual/wc3.jpg',
      color:'green',
      sizes:['S', 'M', 'L', 'XL'],
      description: 'This is a beautiful green dress.',
      reviews: [
        {
          user :'Lisa',
          text: 'Great dress!',
          rating: 5
        },
        {
          user :'Rose',
          text: 'I love the color.',
          rating: 4
        }
      ]
    },
    {
      id: 3,
      name: 'BLUE DRESS',
      price: 1400,
      salePrice: 700,
      pic1: bluedress,
      pic2: 'images/women/casual/wc2.jpg',
      color:'green',
      sizes:['S', 'M', 'L', 'XL'],
      description: 'This is a beautiful green dress.',
      reviews: [
        {
          user :'Lisa',
          text: 'Great dress!',
          rating: 5
        },
        {
          user :'Rose',
          text: 'I love the color.',
          rating: 4
        }
      ]
    },
    
    {
      id: 4,
      name: 'FLORAL DRESS',
      price: 1500,
      salePrice: 750,
      pic1: floraldress,
      pic2: 'images/women/casual/wc10.jpg',
      color:'green',
      sizes:['S', 'M', 'L', 'XL'],
      description: 'This is a beautiful green dress.',
      reviews: [
        {
          user :'Lisa',
          text: 'Great dress!',
          rating: 5
        },
        {
          user :'Rose',
          text: 'I love the color.',
          rating: 4
        }
      ]
    },
    {
      id: 5,
      name: 'BROWN DRESS',
      price: 1500,
      salePrice: 750,
      pic1: browndress,
      pic2: 'images/women/casual/wc10.jpg',
      color:'green',
      sizes:['S', 'M', 'L', 'XL'],
      description: 'This is a beautiful green dress.',
      reviews: [
        {
          user :'Lisa',
          text: 'Great dress!',
          rating: 5
        },
        {
          user :'Rose',
          text: 'I love the color.',
          rating: 4
        }
      ]
    },
  ];
  
  export default girlsProducts;

