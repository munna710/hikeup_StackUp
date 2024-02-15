import React, { useEffect } from 'react'
import { getOrders } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Orders = () => {
    const dispatch = useDispatch()
    const orderState = useSelector((state) => state.auth.getOrderedProducts?.orders)
    useEffect(() => {
        dispatch(getOrders())
    }, [])
    console.log(orderState)
  return (
    <>
    <div className="container cart-wrapper home-wrapper-2 py-5 border">
    <div className="row">
    <div className="col-12">
        <div className="row ">
            <div className='col-3 border-end border-dark'>
                <h5>Order Id</h5>
            </div>
            <div className='col-3 border-end border-dark'>
                <h5>Total Amount </h5>
            </div>
            <div className='col-3 border-end border-dark'>
                <h5>Total Amount After Discount</h5>
            </div>
            <div className='col-3 '>
                <h5>Status</h5>
            </div>
        </div>
        
        </div>
        <div className='col-12 mt-3'>
       {
            orderState && orderState.length > 0 ? (
                orderState.map((item,index)=>{
                    return(
                        <div key= {index} className="row my-3 bg-dark text-white pt-3">
                        <div className='col-3'>
                            <p>{item?._id} </p>
                        </div>
                        <div className='col-3'>
                            <p>{item?.totalPrice} </p>
                        </div>
                        <div className='col-3'>
                            <p>{item?.totalPriceAfterDiscount}</p>
                        </div>
                        <div className='col-3'>
                            <p>{item?.orderStatus}</p>
                        </div>
                        <div className='col-12'>
                        <div className="row bg-secondary p-3 border-bottom">
                        <div className='col-3'>
                            <h6>Product Name</h6>
                        </div>
                        <div className='col-2'>
                            <h6>Quantity </h6>
                        </div>
                        <div className='col-3'>
                 
                            <h6>Price</h6>
                        </div>
                        <div className='col-2'>
                            <h6>Color</h6>
                        </div>
                        <div className='col-1'>
                            <h6>Size</h6>
                        </div>
                    </div>{
                        item?.orderItems?.map((i,index)=>{
                            return(
                                <div key={index} className="row bg-secondary p-3">
                                <div className='col-3'>
                                <p>{i?.product?.title}</p>
                                </div>
                                <div className='col-2'>
                                    <p>{i?.quantity} </p>
                                </div>
                                <div className='col-3'>
                         
                                    <p>{i?.price}</p>
                                </div>
                                <div className='col-2'>
                                    <p><div style={{ 
                                                                    display: 'inline-block', 
                                                                    width: '20px', 
                                                                    height: '20px', 
                                                                    backgroundColor: i?.color?.title, 
                                                                    marginLeft: '10px' 
                                                                }} /></p>
                                </div>
                                <div className='col-1'>
                                    <p>{i?.size?.name} </p>
                                </div>
                            </div> 
                            )})
                    }
            
                        </div>
                    </div>
                    )
                })
            ) : (
                <p className='fs-3 text-center fw-bold bg-dark text-white'>No orders yet!!</p>
            )
       }
          
        </div>
        </div>
        </div>
    </>
  )
}

export default Orders