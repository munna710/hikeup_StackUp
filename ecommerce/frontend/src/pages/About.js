//about us page
import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 my-auto">
                <h4>About Us</h4>
            </div>
          </div>
        </div>
      </section>

      <section className='section bg-light border-bottom'>
        <div className="container">
          <h1>CUT & NEEDLE</h1>
          <div className="underline"></div>
          <h2>Discover Your Style at Cut and Needle</h2>
      <p>Welcome to Cut and Needle, your one-stop destination for women and girls' fashion. At Cut and Needle, we're passionate about empowering individuals through trendy and affordable clothing.</p>
      <h2>Why Choose Cut and Needle?</h2>
      <ul>
        <li>Trendy Selection: Explore the latest fashion trends curated just for you.</li>
        <li>Quality Assurance: Enjoy high-quality, stylish clothing designed for comfort and confidence.</li>
        <li>Affordable Fashion: Access chic and elegant pieces without breaking the bank.</li>
        <li>Exceptional Service: Our dedicated team ensures a seamless shopping experience and excellent customer service.</li>
      </ul>
      <p>Join us at Cut and Needle, where fashion meets affordability. Let your style shine!</p>
      <p>Happy Shopping!</p>
      <p>Warm regards,</p>
      <p>The Cut and Needle Team</p>
        </div>
      </section>
    </div>
  )
    
}

export default About;
