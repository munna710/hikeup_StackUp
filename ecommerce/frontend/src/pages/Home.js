//Landing page
import React, { useState , useEffect, useRef} from 'react';

const Home = () => {
  const [email, setEmail] = useState('');
  const emailInputRef = useRef(null);

  useEffect(() => {
    // Set focus on the email input field when the component mounts
    emailInputRef.current.focus();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

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
      <section class="featured-products">
  <h2>Featured Women's Fashion</h2>
  <div class="product-grid">
    <div class="product">
      <img src="path-to-image1.jpg" alt="Product 1"/>
      <h3>Product 1</h3>
      <p>$49.99</p>
    </div>
    <div class="product">
      <img src="path-to-image2.jpg" alt="Product 2"/>
      <h3>Product 2</h3>
      <p>$59.99</p>
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
      <img src="\images\nw.jpg" alt="Product 1" />
      
    </div>
    <div class="product">
      <img src="\images\kidooo.jpg" alt="Product 2" />
      
    </div>
   
  </div>
</section>
<section class="seasonal-picks">
  <h2>Seasonal Picks</h2>
  <div class="product-grid">
    <div class="product">
      <img src="\images\kidooo.jpg" alt="Product 1" />
      <h3>Product 1</h3>
      <p>$49.99</p>
    </div>
    <div class="product">
      <img src="\images\kidooo.jpg" alt="Product 2" />
      <h3>Product 2</h3>
      <p>$59.99</p>
    </div>
    
  </div>
</section>
<section class="best-sellers">
  <h2>Best Sellers</h2>
  <div class="product-grid">
    <div class="product">
      <img src="images\kidooo.jpg" alt="Product 1"/>
      <h3>Product 1</h3>
      <p>$49.99</p>
    </div>
    <div class="product">
      <img src="images\kidooo.jpg" alt="Product 2"/>
      <h3>Product 2</h3>
      <p>$59.99</p>
    </div>
   
  </div>
</section>
      <section class="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with our latest collections, sales, and exclusive offers.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" value={email}
          onChange={handleInputChange} ref={emailInputRef} required />
        <button type="submit">Subscribe</button>
      </form>
      </section>
      <section class="on-sale">
  <h2>On Sale</h2>
  <div class="product-grid">
    <div class="product">
      <img src="images\kidooo.jpg" alt="Product 1"/>
      <h3>Product 1</h3>
      <p class="original-price">$69.99</p>
      <p class="sale-price">$49.99</p>
    </div>
    <div class="product">
      <img src="images\kidooo.jpg" alt="Product 2"/>
      <h3>Product 2</h3>
      <p class="original-price">$79.99</p>
      <p class="sale-price">$59.99</p>
    </div>
   
  </div>
</section>
      <section class="testimonials">
  <h2 className='client'>OUR CLIENT SAYS</h2>
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
    <section class="trending-now">
  <h2>Trending Now</h2>
  <div class="product-grid">
    <div class="product">
      <img src="path-to-image1.jpg" alt="Product 1"/>
      <h3>Product 1</h3>
      <p>$49.99</p>
    </div>
    <div class="product">
      <img src="path-to-image2.jpg" alt="Product 2"/>
      <h3>Product 2</h3>
      <p>$59.99</p>
    </div>
  
  </div>
</section>
  

    </>
  );
};

export default Home;
