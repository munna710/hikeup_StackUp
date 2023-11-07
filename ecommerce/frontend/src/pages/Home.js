//Landing page
import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
const Home = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    console.log('Email input: ', event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    // Handle form submission logic here
    setEmail('');
  };

  return (
    <>
      <div>
        <section className="background-section">
        <div className="animated-text">
          <h2 className="discoverTimelessEleganceContainer">
            <p className="cutAndNeedleIsA">
              <span className="span">{` `}</span>
              <span className="discover1">Discover</span>
              <span>
                <span>{` `}</span>
              </span>
            </p>
            <p className="cutAndNeedleIsA">
              <span>
                <span className="t">T</span>
                <span className="imeless">{`imeless `}</span>
                <span className="t">E</span>
                <span className="imeless">{`legance, `}</span>
                <span className="t">M</span>
                <span className="imeless">{`odern `}</span>
                <span className="t">T</span>
                <span>rends,</span>
              </span>
            </p>
            <p className="cutAndNeedleIsA">
              <span>
                <span>{`and `}</span>
                <span className="t">C</span>
                <span>{`onfident silhouettes `}</span>
              </span>
            </p>
            <p className="cutAndNeedleIsA">
              <span>
                <span>that empower every woman</span>
              </span>
            </p>
          </h2>
        </div>
        
        <div class="background-section">
          <img className="model" src="\images\model.png" alt="cutandneedle" />
        </div>
        </section>
      </div>
      <section class="trending-now">
  <h2 className='htd'>Trending Now</h2>
  <div class="product-grid">
    <div class="product">
      <NavLink to="/product1">
        <img className='g1' src="\images\girls\g1.png" alt="Product"/>
      </NavLink>
      <h3 className='p1h3'>Product</h3>
      <p className='p1p1'> ₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product2">
        <img className='g2' src="\images\girls\g2.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p2h3'>Product </h3>
      <p className='p1p2'>₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product3">
        <img className='g3' src="\images\girls\g3.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p3h3'>Product</h3>
      <p className='p1p3'>₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product4">
        <img className='g4' src="\images\girls\g7.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p4h3'>Product</h3>
      <p className='p1p4'>₹600</p>
    </div>
    

  
  </div>
</section>
      <section class="featured-products">
  <h2  className='htd'>Featured Women's Fashion</h2>
  <div class="product-grid">
    <div class="product">
      <NavLink to="/product1">
        <img className='g1' src="/images/women/casual/wc1.jpg" alt="Product 1"/>
      </NavLink>
      <h3 className='p1h3'>Product</h3>
      <p className='p1p1'> ₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product2">
        <img className='g2' src="/images/women/casual/wc2.jpg" alt="Product 2"/>
      </NavLink>
      <h3 className='p2h3'>Product </h3>
      <p className='p1p2'>₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product3">
        <img className='g3' src="/images/women/casual/wc5.jpg" alt="Product 2"/>
      </NavLink>
      <h3 className='p3h3'>Product</h3>
      <p className='p1p3'>₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product5">
        <img className='g4' src="/images/women/casual/wc9.jpg" alt="Product 2"/>
      </NavLink>
      <h3 className='p4h3'>Product</h3>
      <p className='p1p4'>₹600</p>
    </div>
    
  </div>
</section>
      <section class="new-arrivals">
        <div className='hnew'>
  <h2>FRESH FINDS UNVEILING </h2>
  <h2>NEW ARRIVALS</h2>
  </div>
  <div class="product-grid">
    <div class="product">
      <NavLink to="/product6">
        <img className="n1" src="\images\nw.jpg" alt="Product 1" />
      </NavLink>
      
    </div>
    <div class="product">
      <NavLink to="/product7">
        <img className="n1" src="\images\kidooo.jpg" alt="Product 2" />
      </NavLink>
      
    </div>
   
  </div>
</section>
<section class="newsletter">
      <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
      <p>Stay updated with our latest collections, sales, and exclusive offers.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" value={email}
          onChange={handleInputChange}  required />
        <button type="submit">SUBSCRIBE</button>
      </form>
      </section>
      
      <section class="on-sale">
  <h2 className='htd' >ON SALE</h2>
  <div class="product-grid">
    <div class="product">
      <NavLink to="/product1">
        <img className="g1" src="/images/girls/g1.png" alt="Product 1"/>
      </NavLink>
      <h3 className='p1h3'>Product</h3>
      <p class="original-price">₹1600</p>
      <p className='p1p1'>₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product2">
        <img className= "g2" src="/images/girls/g2.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p2h3'>Product</h3>
      <p class="original-price2">₹1600</p>
      <p className='p1p2'> ₹600</p>
      
      
    </div>
    <div class="product">
      <NavLink to="/product2">
        <img className= "g3" src="/images/girls/g3.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p3h3'>Product</h3>
      <p class="original-price3">₹1600</p>
      <p className='p1p3'> ₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product8">
        <img className= "g4" src="/images/girls/g7.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p4h3'>Product</h3>
      <p class="original-price4">₹1600</p>
      <p className='p1p4'> ₹600</p>
    </div>
   
  </div>
</section>
<section class="best-sellers">
  <h2 className='htd'>BEST SELLER</h2>
  <div class="product-grid">
    <div class="product">
      <NavLink to="/product1">
        <img className='g1' src="/images/women/casual/wc1.jpg" alt="Product 1"/>
      </NavLink>
      <h3 className='p1h3'>Product</h3>
      <p className='p1p1'> ₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product2">
        <img className='g2' src="/images/women/casual/wc2.jpg" alt="Product 2"/>
      </NavLink>
      <h3 className='p2h3'>Product </h3>
      <p className='p1p2'>₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product3">
        <img className='g3' src="/images/women/casual/wc5.jpg" alt="Product 2"/>
      </NavLink>
      <h3 className='p3h3'>Product</h3>
      <p className='p1p3'>₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product5">
        <img className='g4' src="/images/women/casual/wc9.jpg" alt="Product 2"/>
      </NavLink>
      <h3 className='p4h3'>Product</h3>
      <p className='p1p4'>₹600</p>
    </div>
   
  </div>
</section>

<section class="seasonal-picks">
  <h2 className='htd'>SEASONAL PICKS</h2>
  <div class="product-grid">
    <div class="product">
      <NavLink to="/product1">
        <img className='g1' src="\images\girls\g1.png" alt="Product"/>
      </NavLink>
      <h3 className='p1h3'>Product</h3>
      <p className='p1p1'> ₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product2">
        <img className='g2' src="\images\girls\g2.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p2h3'>Product </h3>
      <p className='p1p2'>₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product3">
        <img className='g3' src="\images\girls\g3.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p3h3'>Product</h3>
      <p className='p1p3'>₹600</p>
    </div>
    <div class="product">
      <NavLink to="/product4">
        <img className='g4' src="\images\girls\g7.png" alt="Product 2"/>
      </NavLink>
      <h3 className='p4h3'>Product</h3>
      <p className='p1p4'>₹600</p>
    </div>
    
  </div>
</section>

      
     
      <section class="testimonials">
  <h2 className='htss'>OUR CLIENT SAYS</h2>
  <div class="testimonial-grid">
    <div class="testimonial">
      <p>"I absolutely love the clothes from this collection! They're stylish and comfortable."</p>
      <h3>- Customer 1</h3>
    </div>
    <div class="testimonial">
      <p>"Great quality and fast shipping. Highly recommend!"</p>
      <h3>- Customer 2</h3>
    </div>
    
      </div>
    </section>
    
  

    </>
  );
};

export default Home;
