import React from 'react';
import './Newsletter.css';

const NewsLetter = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="image-row">
            <div className="image-container">
              <a href="https://example.com">
                <img className="image img-fluid" src="https://images.pexels.com/photos/2818226/pexels-photo-2818226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product Image" />
              </a>
            </div>
            <div className="image-container">
              <a href="https://example.com">
                <img className="image img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg" alt="Product Image" />
                <div className="text-over-image text-center">EXPLORE THE FASHION WORLD</div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="modal-dialog modal-newsletter">
            <div className="modal-content">

              <div className="modal-header">
                <h4>Join Our Newsletter</h4>
              </div>
              <div className="modal-body text-center">

                <p>Subscribe our newsletter to receive the latest news and exclusive offers every week.</p>
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter your email" required />
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-primary btn-block" value="Subscribe" />
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
