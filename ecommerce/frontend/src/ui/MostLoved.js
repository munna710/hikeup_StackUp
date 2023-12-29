import React from 'react';
import './MostLoved.css';
import greendress from '../assets/geenw.jpeg';
import whitedress from '../assets/whitew.jpeg';
import bluedress from '../assets/bluew.jpeg';
import browndress from '../assets/brownW.jpeg';
const MostLoved = () => {
    return (
        <div className='container'>
        <div className="row">
        <h2 className="most-loved-heading">Most Loved</h2>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="#" className="image">
                            <img className="pic-1" src={greendress} alt="Product Image" />
                            <img className="pic-2" src="\images\women\casual\wc1.jpg" alt="Product Image" />
                        </a>
                        <span className="product-sale-label">Sale</span>
                        <a href="#" className="product-like-icon" data-tip="Add to Wishlist">
                            <i className="far fa-heart"></i>
                        </a>
                        <ul className="product-links">
                            <li><a href="#"><i className="fa fa-search"></i></a></li>
                            <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i className="fa fa-random"></i></a></li>
                        </ul>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div class="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="#" className="image">
                            <img className="pic-1" src={whitedress} alt="Product Image" />
                            <img className="pic-2" src="\images\women\casual\wc3.jpg" alt="Product Image" />
                        </a>
                        <span className="product-sale-label">Sale</span>
                        <a href="#" className="product-like-icon" data-tip="Add to Wishlist">
                            <i className="far fa-heart"></i>
                        </a>
                        <ul className="product-links">
                            <li><a href="#"><i className="fa fa-search"></i></a></li>
                            <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i className="fa fa-random"></i></a></li>
                        </ul>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div class="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="#" className="image">
                            <img className="pic-1" src={browndress} alt="Product Image" />
                            <img className="pic-2" src="\images\women\casual\wc10.jpg" alt="Product Image" />
                        </a>
                        <span className="product-sale-label">Sale</span>
                        <a href="#" className="product-like-icon" data-tip="Add to Wishlist">
                            <i className="far fa-heart"></i>
                        </a>
                        <ul className="product-links">
                            <li><a href="#"><i className="fa fa-search"></i></a></li>
                            <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i className="fa fa-random"></i></a></li>
                        </ul>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div class="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="#" className="image">
                            <img className="pic-1" src={bluedress} alt="Product Image" />
                            <img className="pic-2" src="\images\women\casual\wc2.jpg" alt="Product Image" />
                        </a>
                        <span className="product-sale-label">Sale</span>
                        <a href="#" className="product-like-icon" data-tip="Add to Wishlist">
                            <i className="far fa-heart"></i>
                        </a>
                        <ul className="product-links">
                            <li><a href="#"><i className="fa fa-search"></i></a></li>
                            <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                            <li><a href="#"><i className="fa fa-random"></i></a></li>
                        </ul>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div class="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MostLoved