import React from "react";
import logo from '../assets/logo2.png';
import { BsBag } from "react-icons/bs";
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="container  ">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom fixed-top bg-light my-navbar">
                <a className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" href="#">
                    <img src={logo} alt="Logo" width="60" height="50" className="bi me-2" />
                    <span style={{ fontSize: '28px' }}>CUT_AND_NEEDLE</span>
                </a>
                <div >
                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
                <li className="nav-item"><a href="#" class="nav-link px-2 link-secondary hover-effect">HOME</a></li>
                <li className="nav-item"><a href="#" class="nav-link px-2 link-dark hover-effect">WOMEN</a></li>
                <li className="nav-item"><a href="#" class="nav-link px-2 link-dark hover-effect">GIRLS</a></li>
                <li className="nav-item dropdown">
                <a href="#" className="nav-link px-2 link-dark hover-effect dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">ACCESSORIES</a>
                <ul className="dropdown-menu fade-up" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">SCRUNCHIES</a></li>
                <li><a className="dropdown-item" href="#">BAG</a></li>
                </ul>

                </li>
                <li><a href="#" class="nav-link px-2 link-dark hover-effect">BLOG</a></li>
                {/* <li><a href="#" class="nav-link px-2 link-dark  d-flex align-items-top"><BsBag size={25}/></a></li> */}
                </ul>
                </div >
                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                </form>
              
                <div class="d-flex align-items-center justify-content-end col-md-3">
                <a href="#" className="link-dark me-3 bag-icon">
                <BsBag size={32} />
                </a>
                <div className="text-end">
                    <button type="button" className="btn btn-outline-dark me-2">LOGIN</button>
                </div>
                
                </div>
                
            </header>
        </div>
    )
}

export default Navbar;
