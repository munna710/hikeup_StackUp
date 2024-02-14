import { clearAllListeners } from '@reduxjs/toolkit';
import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const dispatch = useDispatch()
    const [totalamount, setTotalAmount] = useState(null);

        const userCartState = useSelector(state => state.auth.cartProducts);
        console.log(userCartState);
        useEffect(() => {
            let sum = 0;
            for(let index = 0; index < userCartState?.length; index++){
                sum = sum + (Number(userCartState[index]?.price * userCartState[index]?.quantity));
                setTotalAmount(sum)
    
            }
        }, [userCartState]);
        return (
                <>
                <div style={{backgroundColor:"#e8e8e8"}} className="checkout-wrapper py-5 home-wrapper-2 ">
                <div className="container-xxl">
                        <div className="row">
                        <div className="col-6 ">
                            <div className="checkout-left-data">
                            <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><Link to="/Cart" className="text-dark">Cart</Link></li>
                                                <li class="breadcrumb-item active" aria-current="page">Information</li>
                                                <li class="breadcrumb-item active"><Link to="#" className="text-dark">Shipping</Link></li>
                                                <li class="breadcrumb-item active"><Link to="#" className="text-dark">Payment</Link></li>
                                            </ol>
                                            </nav>
                                            <div className=' border-end border-dark'>
                                            <h4 >Contact Information</h4>
                                            <p className="user-details">
                                            Munna710 (Munna710@gmail.com)
                                            </p>
                                            <h4>Shipping Address</h4>
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
                                    <div className='col'>
                                    <div className="border-bottom py-4 border-dark">
                                    {
                                            userCartState && userCartState?.map((item, index) => {
                                                return(
                                                    <>
                                                    <div key ={index} className='cart-data py-3 d-flex justify-content-between align-items-center bg-light border-bottom py-4 border-secondary'>
                                
                                        <div className='w-25 me-2 '>
                                            <span style={{ top: "20px", right: "2px", zIndex: '1' }} className='badge bg-secondary text-white rounded-circle p-2 position-relative'>{item?.quantity} </span>
                                            <img className='img-fluid border border-secondary' src={item?.productId?.images[0]?.url} alt="product" />
                                        </div>
                                        <div className='w-75'>
                                            <h5 className='title '>{item?.productId?.title} </h5>
                                            <p className='color'>
                                                Color: 
                                                <div style={{ 
                                                    display: 'inline-block', 
                                                    width: '20px', 
                                                    height: '20px', 
                                                    backgroundColor: item?.color?.title, 
                                                    marginLeft: '10px' 
                                                }} />
                        
                                                </p>
                                                <p className='size'>Size: {item?.sizes?.name} </p>
                                            
                                        </div>
                                        <div className='cart-col-2'>
                                            <h5 className='price'>{item?.price * item?.quantity} </h5>
                                        </div>
                                    </div>
                                
                                                    </>
                                                )
                                                    
                                                
                                                })
                                     }
                                       
                                    
                                        
                    
                    
                    
                    <div className="border-bottom py-4 border-dark">
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Subtotal</p>
                        <p>₹{totalamount? totalamount:'0'}</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Shipping</p>
                        <p className="mb-0">₹ 40</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center border-bottom py-4 border-dark">
                        <h4>Total</h4> 
                        <h5>₹{totalamount? totalamount+40:'0'}</h5>  
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