import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
        return (
                <>
                <div className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                        <div className="row">
                        <div className="col-6">
                            <div className="checkout-left-data">
                            <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><Link to="/Cart" className="text-dark">Cart</Link></li>
                                                <li class="breadcrumb-item active" aria-current="page">Information</li>
                                                <li class="breadcrumb-item active"><Link to="#" className="text-dark">Shipping</Link></li>
                                                <li class="breadcrumb-item active"><Link to="#" className="text-dark">Payment</Link></li>
                                            </ol>
                                            </nav>
                                            <div className=''>
                                            <h4 className="title">Contact Information</h4>
                                            <p className="user-details">
                                            Munna710 (Munna710@gmail.com)
                                            </p>
                                            
                                    <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                                        <div className="w-100">
                                            <select name="" className="form-control form-select" id="">
                                                <option value="" selected disabled>
                                                    Select Country
                                                </option>
                                            </select>
                                        </div>

                                        <div className="flex-grow-1">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="flex-grow-1">
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="w-100">
                                            <input
                                                type="text"
                                                placeholder="Address"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="w-100">
                                            <input
                                                type="text"
                                                placeholder="Apartment,Suite,etc(optional)"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="w-100">
                                        <input 
                                            type="text"
                                            placeholder="City"
                                            className="form-control"
                                        />
                                        </div>
                                        <div className="flex-grow-1">
                                            <select name="" className="form-control form-select" id="">
                                                <option value="" selected disabled>
                                                    Select State
                                                </option>
                                            </select>
                                        </div>

                                        <div className="flex-grow-1">
                                            <input 
                                                type="text"
                                                placeholder="Zipcode"
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="w-100">

                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to="/cart" className='btn btn-outline-dark me-2'>Return to Cart</Link>
                                            <Link to="/cart" className="btn btn-outline-dark me-2 ">
                                                Continue to Shipping
                                            </Link>
                                        </div>
                                        </div>
                                    </form>
                                    </div>
                                    </div>
                                    </div>
                                    <div className='col-1'></div>
                                    <div className='col-5'>
                                    <div className="border-bottom py-4">
                                        <div className='container'>
                                        <div className='d-flex gap-10 justify-content-start'>
                                        <div className='w-50 d-flex'>
                        <div className='w-50' >
                        <img className='img-fluid' src="/images/women/casual/wc1.jpg" alt="product" />
                        </div>
                        <div className='align-items-end'>
                            <h5 className='title'>green dress</h5>
                            <p>jnjkcndnc</p>
                        </div>

                    </div>
                    </div>
                    </div>
                    <div className='flex-grow-1'>
                        <h5>$ 100</h5>
                    </div>
                    <div className="border-bottom py-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Subtotal</p>
                        <p>$ 1000</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Shipping</p>
                        <p className="mb-0">$ 1000</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                        <h4>Total</h4> 
                        <h5>$1000</h5> 
                    </div> 
                    </div>
                    </div>
                    </div>
                    </div>
                    



                </div>
                </div>
                
                
                </>
        )
}

export default Checkout