
import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'; 
import axios from 'axios';
import {config} from '../utils/axiosConfig'
import { createAnOrder, deleteUserCart, getUserCart } from '../features/user/userSlice';

const Checkout = () => {
    const dispatch = useDispatch()
    const authState = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [totalamount, setTotalAmount] = useState(null);
    const [shippingInfo, setShippingInfo] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState({razorpayOrderId:"",razorpayPaymentId:""});
    const [cartProductState,setCartProductState] = useState([])
    const [isPaymentInfoSet, setIsPaymentInfoSet] = useState(false);
    console.log(paymentInfo,shippingInfo);
    useEffect(() => {
        console.log("Payment Info:", paymentInfo);
      }, [paymentInfo]);
    
    useEffect(() => {
        console.log("Shipping Info:", shippingInfo);
      }, [shippingInfo]);
    useEffect(() => {
        dispatch(getUserCart())
    }, [])
    useEffect(() => {
        console.log(authState); // Log authState to check if useEffect is running when authState changes
        if (authState?.orderedProduct !== null && authState?.orderedProduct?.success === true) {
          console.log(authState.orderedProduct.isSuccess); // Log isSuccess to check its value
          navigate("/orders"); // Use navigate to navigate
        }
      }, [authState]);
    const shippingSchema = yup.object({
        firstName: yup.string().required("First Name is Required"),
        lastName: yup.string().required("Last Name is Required"),
        address: yup.string().required("Address Details are Required"),
        state: yup.string().required("State is Required"),
        city: yup.string().required("City is Required"),
        country: yup.string().required("Country is Required"),
        pincode: yup.number().required("Pincode is Required"),
        
    });
        const userCartState = useSelector(state => state.auth.cartProducts);
        console.log(userCartState);
        useEffect(() => {
            let items = [];
            for(let index = 0; index < userCartState?.length; index++){
                items.push({
                    product: userCartState[index]?.productId?._id,
                    quantity: userCartState[index]?.quantity,
                    price: userCartState[index]?.price,
                    color: userCartState[index]?.color?._id,
                    size: userCartState[index]?.sizes?._id,
                })
            }
            setCartProductState(items)
        }
        , [])
        useEffect(() => {
            let sum = 0;
            for(let index = 0; index < userCartState?.length; index++){
                sum = sum + (Number(userCartState[index]?.price * userCartState[index]?.quantity));
                setTotalAmount(sum)
    
            }
        }, [userCartState]);
        const formik = useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                address: "",
                state: "",
                city: "",
                country: "",
                pincode: "",
                other: "",
            },
            validationSchema: shippingSchema,
            onSubmit: async (values) => {
                setShippingInfo(values);
                console.log("Shipping Info:", values);
                setTimeout(async () => {
                  await checkOutHandler();
                }, 100);
              },
            
        });
        const loadScript = (src) => {
            return new Promise((resolve) => {
              const script = document.createElement("script");
              script.src = src;
              script.onload = () => resolve(true);
              script.onerror = () => resolve(false);
              document.body.appendChild(script);
            });
          };
        
       
        const checkOutHandler = async () => {
            
            try {
                const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
                if (!res) {
                  alert("Razorpay SDK failed to Load");
                  return;
                }
                console.log(totalamount);
                const result = await axios.post("http://localhost:4000/api/user/order/checkout", { amount: totalamount }, config);                
                if (!result) {
                  alert("Something went wrong");
                  return;
                }
                console.log(result.data);
                const { amount, id: order_id, currency } = result.data.order;
                console.log(amount);
                const options = {
                  key: "rzp_test_QkFiEyRnOp9iAy",
                  amount: amount,
                  currency: currency,
                  name: "CUT_AND_NEEDLE",
                  description: "Test Transaction",
                  order_id: order_id,
                  handler: async function (response) {
                    const data = {
                      orderCreationId: order_id,
                      razorpayPaymentId: response.razorpay_payment_id,
                      razorpayOrderId: response.razorpay_order_id,
                    };
          
                    setPaymentInfo({
                      razorpayPaymentId: response.razorpay_payment_id,
                      razorpayOrderId: response.razorpay_order_id,
                    });
          
                    console.log("Payment Info Set:", response.razorpay_payment_id, response.razorpay_order_id);
          
                    await axios.post("http://localhost:4000/api/user/order/paymentVerification", data, config);
                    setIsPaymentInfoSet(true);
                    // console.log("Payment Info:", paymentInfo);
                    // console.log("Shipping Info:", shippingInfo);
          
                    // dispatch(createAnOrder({
                    //   totalPrice: totalamount,
                    //   totalPriceAfterDiscount: totalamount,
                    //   orderItems: cartProductState,
                    //   paymentInfo,
                    //   shippingInfo,
                    // }));
                },
                prefill: {
                    name: "CUT_AND_NEEDLE",
                    email: "thisismunna710@gmail.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "CUT_AND_NEEDLE's office",
                },
                theme: {
                    color: "#61dafb",
                },
            };
    
            const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error in checkOutHandler:", error);
    }
        }
        useEffect(() => {
            if (isPaymentInfoSet) {
              console.log("Payment Info:", paymentInfo);
              console.log("Shipping Info:", shippingInfo);
        
              dispatch(createAnOrder({
                totalPrice: totalamount,
                totalPriceAfterDiscount: totalamount,
                orderItems: cartProductState,
                paymentInfo,
                shippingInfo,
              }));
              dispatch(deleteUserCart());

              // Reset the flag
              setIsPaymentInfoSet(false);
            }
          }, [isPaymentInfoSet]);
       
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
                                    <form onSubmit={formik.handleSubmit} action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                                        <div className="w-100">
                                            <select name="country" className="form-control form-select" id=""
                                           value={formik.values.country}
                                           onChange={formik.handleChange("country")}
                                            onBlur={formik.handleBlur("country")}
                                            >
                                                <option value="" selected disabled>
                                                    Select Country
                                                </option>
                                                <option value="India">India</option>

                                            </select>
                                            {formik.touched.country && formik.errors.country ? (
                                            <div className='error'>{formik.errors.country}</div>
                                            ) : null}
                                        </div>

                                        <div className="flex-grow-1 me-2">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                className="form-control"
                                                name='firstName'
                                                value={formik.values.firstName}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur('firstName')}
                                            />
                                            {formik.touched.firstName && formik.errors.firstName ? (
                                            <div className='error'>{formik.errors.firstName}</div>
                                            ) : null}
                                        </div>

                                        <div className="flex-grow-1">
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                className="form-control"
                                                name='lastName'
                                                value={formik.values.lastName}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur('lastName')}

                                            />
                                            {formik.touched.lastName && formik.errors.lastName ? (
                                            <div className='error'>{formik.errors.lastName}</div>
                                            ) : null}
                                        </div>

                                        <div className="w-100">
                                            <input
                                                type="text"
                                                placeholder="Address"
                                                className="form-control"
                                                name='address'
                                                value={formik.values.address}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur('address')}
                                            />
                                            {formik.touched.address && formik.errors.address ? (
                                            <div className='error'>{formik.errors.address}</div>
                                            ) : null}
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
                                            name='city'
                                            value={formik.values.city}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur("city")}
                                        />
                                        {formik.touched.city && formik.errors.city ? (
                                        <div className='error'>{formik.errors.city}</div>
                                        ) : null}
                                        </div>
                                        <div className="flex-grow-1 me-2">
                                            <select name="state" className="form-control form-select" id=""
                                            value={formik.values.state}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur("state")}
                                            >
                                                <option value="" selected disabled>
                                                    Select State
                                                </option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="Odisha">Odisha</option>
                                                
                                            </select>
                                            {formik.touched.state && formik.errors.state ? (
                                            <div className='error'>{formik.errors.state}</div>
                                            ) : null}
                                        </div>

                                        <div className="flex-grow-1">
                                            <input 
                                                type="text"
                                                placeholder="Zipcode"
                                                className="form-control"
                                                name='pincode'
                                                value={formik.values.pincode}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur("pincode")}
                                            />
                                            {formik.touched.pincode && formik.errors.pincode
                                            ? (
                                            <div className='error'>{formik.errors.pincode}</div>
                                            ) : null}

                                        </div>

                                        <div className="w-100">

                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to="/cart" className='btn btn-outline-dark me-2'>Return to Cart</Link>
                                            <Link to="/cart" className="btn btn-outline-dark me-2 ">
                                                Continue to Shipping
                                            </Link>
                                            <button className="btn btn-outline-dark me-2" type="submit" >place order</button>
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