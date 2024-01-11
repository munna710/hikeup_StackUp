import React from "react";


function Contactus() {
  return (
    <div>
    <section className="py-4 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-auto">
            <h4>Contact Us</h4>
          </div>

        </div>
      </div>
    </section>
    <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="rows">
                <div className="col-md-6 border-right">
                  <h6>Contact Form</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter phone number"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email Address</label>
                    <input type="text" className="form-control" placeholder="Enter email number"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Message</label>
                    <textarea rows="3" className="form-control" placeholder="type your Message...."></textarea>
                  </div>
                  <div className="form-group py-3">
                    <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                  </div>
              </div>

              
              <div className="col-md-6 border-start">

                  <h5 className="main-heading">Address Information</h5>
                  <div className="underline"></div>
                  <p>
                    XXXXX,Byrathi ,Bangalore Karnataka - 56XXXX, INDIA
                  </p>
                  <p>
                    Phone: +91 88XXXXXXXX
                  </p>
                  <p>
                    Email: email@doamin.com
                  </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    
  );
}

export default Contactus;