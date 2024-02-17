import React, { useEffect, useState } from "react";
import logo from '../assets/logo70.png';
import { BsBag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAllProducts2 } from '../features/products/productSlice';
const Navbar = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    const [paginate, setPaginate] = useState(true)
    const productState = useSelector((state) => state.product.products);
    console.log(productState)
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = () => {
        dispatch(getAllProducts2());
    };
    const [productOpt,setProductOpt] = useState([])
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    useEffect(() => {
        let data = []
        for (let index = 0; index < productState?.length; index++) {
            const element = productState[index];
            data.push({id:index, prod:element?._id, name:element?.title})
        }
        setProductOpt(data)
    }, [productState])
    console.log(productOpt)
    console.log(productState)
    return (
        <>

<nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="Logo" width="300" height="80" className="image-fluid" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""><i class="fas fa-bars"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
        <a href="/" className="nav-link link-secondary hover-effect">HOME</a>
        </li>
        <li className="nav-item">
        <a href="/women" className="nav-link link-dark hover-effect">WOMEN</a>
        </li>
        <li className="nav-item dropdown">
        <a href="/girls" className="nav-link link-dark hover-effect">GIRLS</a>
        </li>
        <li className="nav-item dropdown">
                            <a href="#" className="nav-link link-dark hover-effect dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">ACCESSORIES</a>
                            <ul className="dropdown-menu fade-up" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">SCRUNCHIES</a></li>
                                <li><a className="dropdown-item" href="#">BAG</a></li>
                            </ul>
                        </li>
                        <li><a href="/Blog" class="nav-link link-dark hover-effect">BLOG</a></li>
                        </ul>
                        
                    
           
            <div className="d-flex input-group">
            <Typeahead
            className=""
                id="pagination-example"
                onPaginate={() => console.log('Results paginated')}
                onChange={(selected) => {if (selected.length > 0)
                    {
                    navigate(`/product/${selected[0].prod}`)
                }}}
                options={productOpt}
                paginate={paginate}
                labelKey="name"
                placeholder="Search for Products here..."
                />
           
            </div>
            <div>
                    <a href="/Cart" className="">
                <BsBag className="fs-2 link-dark me-2 bag-icon" />
                </a>
                    </div>
     
    
      
      <div>
                    {
                        authState?.user ? 
                        <Link to="/my-profile" className="no-underline"> 
                        <div className="bg-dark text-light rounded-circle p-2 d-flex justify-content-center align-items-center border border-dark fs-3 me-2" style={{width: "39px", height: "39px"}}>
                            <p className="mb-0">{authState?.user?.firstname?.charAt(0).toUpperCase()}</p>
                        </div></Link>:<i className="fas fa-user fs-2 me-2"></i>
                    }
                 </div>
                 <div className="">
                    {
                        authState?.user ?
                        <button type="button" className="btn btn-outline-dark me-2" onClick={handleLogout}>
                            LOGOUT
                        </button>
                        :
                        <Link to="/login" className="btn btn-outline-dark me-2">
                            LOGIN
                        </Link>
                    }
                    </div>
      
      
    </div>
  </div>
</nav>
       
        </>
    )
}

export default Navbar;
