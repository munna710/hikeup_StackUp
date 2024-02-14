import React, { useEffect, useState } from 'react'
import TextWrapper from '../components/textwrapper'
import { AiFillDelete } from 'react-icons/ai'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteCartProduct, getUserCart,updateCartProduct } from '../features/user/userSlice';

const Cart = () => {
    
    const dispatch = useDispatch();
    const [productUpdateDetail, setProductUpdateDetail] = useState(null);
    const [totalamount, setTotalAmount] = useState(null);
    console.log(totalamount);
    const userCartState = useSelector(state => state.auth.cartProducts);
    console.log(userCartState);
    useEffect(() => {
        // console.log('cart page');
        dispatch(getUserCart())
    }, [])
    const deleteACartProduct = (id) => {
        dispatch(deleteCartProduct(id))
        setTimeout(() => {
            dispatch(getUserCart())
        }, 200);
    }
    
    useEffect(() => {
        dispatch(updateCartProduct({cartItemId:productUpdateDetail?.cartItemId,quantity:productUpdateDetail?.quantity}))
        setTimeout(() => {
            dispatch(getUserCart())
        },200)
    } ,[productUpdateDetail]);
    useEffect(() => {
        let sum = 0;
        for(let index = 0; index < userCartState?.length; index++){
            sum = sum + (Number(userCartState[index]?.price * userCartState[index]?.quantity));
            setTotalAmount(sum)

        }
    }, [userCartState]);
    return (
        <>
            <div className='container'>
                <TextWrapper category={"MY:BAG"} />
                <section className="cart-wrapper home-wrapper-2 py-5 border">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <div className="cart-header py-3 d-flex justify-content-between align-items-center border-bottom">
                                    <h3 className='cart-col-1'>Product</h3>
                                    <h3 className='cart-col-3'>Price</h3>
                                    <h3 className='cart-col-3'>Quantity</h3>
                                    <h3 className='cart-col-4'>Total</h3>
                                </div>
                                {userCartState && userCartState.length === 0 ? (
                                    <div className="cart-data py-3 d-flex justify-content-center align-items-center text-secondary">
                                        <h4>CART IS EMPTY</h4>
                                    </div>
                                ) : (
                                    userCartState && userCartState.map((item) => {
                                        const imageUrl = item.productId.images && item.productId.images[0] ? item.productId.images[0].url : 'defaultImageUrl';
                                        return (
                                            <div key={item.id} className="cart-data py-3 d-flex justify-content-between align-items-center ">
                                                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                                    <div className="w-25 me-4">
                                                        <img src={imageUrl} className="img-fluid" alt="product" />
                                                    </div>
                                                    <div className="w-75">
                                                        <h5 className='title'>{item?.productId.title} </h5>
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
                                                </div>
                                                <div className="cart-col-2">
                                                    <h5 className="price">₹{item?.price} </h5>
                                                </div>
                                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        min={1}
                                                        max={item.productId.quantity}
                                                        id=""
                                                        value={productUpdateDetail?.quantity? productUpdateDetail?.quantity:item?.quantity}
                                                        onChange={(e) => setProductUpdateDetail({cartItemId:item?._id , quantity: e.target.value})}
                                                    />
                                                    <div>
                                                        <AiFillDelete onClick={()=>{deleteACartProduct(item?._id)}} className='text-danger fs-3'/>
                                                    </div>
                                                </div>
                                                <div className='cart-col-4'>
                                                    <h5 className='price'>₹{item?.price*item?.quantity}</h5>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                                

                                <div className='col-12 py-2 mt-4'>
                                    <div className='d-flex justify-content-between align-items-baseline '>
                                   
                                    <Link to="/other-page" className='btn btn-outline-dark me-2'>continue to shopping</Link>
                                    {
                                        (totalamount!==0 || totalamount!==null) && 
                                        <div className='d-flex flex-column align-items-end'>
                                        <h4>SUBTOTAL: ₹{totalamount} </h4>
                                        <p>Taxes and shipping calculated  at checkout.</p>
                                        <Link to="/checkout" className='btn btn-outline-dark me-2'>CHECKOUT</Link>
                    
                                    </div>
                                    }
                                </div>
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