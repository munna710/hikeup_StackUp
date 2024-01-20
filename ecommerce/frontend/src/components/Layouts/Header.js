import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component
{
  render()
  {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <Link class="navbar-brand" to={'/home'}>TheRich Shop</Link>
           
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                
                    <li class="nav-item"><Link class="nav-link active" to={'/home'}>Home</Link></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item"  >All Products</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" >Popular Items</a></li>
                            <li><a class="dropdown-item"  >New Arrivals</a></li>
                        </ul>
                    </li>
                </ul>
                
                    
                    <Link class="btn btn-outline-dark" to={'/cart'}>
                    <i class="bi-cart-fill me-1"></i>
                    Cart
                    <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                    </Link>
               
            </div>
        </div>
      </nav>
      
    )
  }
}
export default Header;