import React from 'react'
import TextWrapper from '../components/textwrapper'
import { AiFillDelete } from 'react-icons/ai'
import './Cart.css'
import { Link } from 'react-router-dom'
const Cart = () => {
    return (
        <>
            <div className='container'>
                <TextWrapper category={"MY:BAG"} />
                <section className="cart-wrapper home-wrapper-2 py-5">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                    <h4 className='cart-col-1'>Product</h4>
                                    <h4 className='cart-col-2'>Price</h4>
                                    <h4 className='cart-col-3'>Quantity</h4>
                                    <h4 className='cart-col-4'>Total</h4>
                                </div>
                                <div className="cart-data py-3 d-flex justify-content-between align-items-center ">
                                    <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className="w-25">
                                    <img src="/images/women/casual/wc1.jpg" className="img-fluid " alt="product image" />
                                    </div>
                                    <div className="w-75">
                                        <h5 className='title'>GDFG</h5>
                                        <p className='color'>Size: hgfd</p>
                                        <p className='size'>Color: fdf</p>
                                    </div>
                                    </div>
                                    <div className="cart-col-2">
                                        <h5 className="price">$ 100</h5>
                                    </div>
                                   
                                    <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <input
                                     className="form-control"
                                    type="number"
                                     min={1}
                                        max={10}
                                        id=""
                                    />
   
                                            <div>
                                                <AiFillDelete className='text-danger'/>
                                            </div>
                                        </div>
                                    <div className='cart-col-4'>
                                        <h5 className='price'> $ 100</h5>
                                    </div>
                                </div>
                                <div className="cart-data py-3 d-flex justify-content-between align-items-center ">
                                    <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className="w-25">
                                    <img src="/images/women/casual/wc1.jpg" className="img-fluid " alt="product image" />
                                    </div>
                                    <div className="w-75">
                                        <h5 className='title'>GDFG</h5>
                                        <p className='color'>Size: hgfd</p>
                                        <p className='size'>Color: fdf</p>
                                    </div>
                                    </div>
                                    <div className="cart-col-2">
                                        <h5 className="price">$ 100</h5>
                                    </div>
                                   
                                    <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <input
                                     className="form-control"
                                    type="number"
                                     min={1}
                                        max={10}
                                        id=""
                                    />
   
                                        <div>
                                            <AiFillDelete className='text-danger'/>
                                        </div>
                                    </div>
                                    <div className='cart-col-4'>
                                        <h5 className='price'> $ 100</h5>
                                    </div>
                                </div>
                                <div>
                                   
                                    <Link to="/other-page" className='btn btn-outline-dark me-2'>continue to shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Cart