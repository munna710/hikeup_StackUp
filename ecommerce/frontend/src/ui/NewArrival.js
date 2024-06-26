import React, { useEffect } from 'react';
import $ from 'jquery';
import './NewArrival.css';
window.jQuery = $;
window.$ = $;
require('owl.carousel');
const NewArrival = () => {
    useEffect(() => {
        $('.owl-carousel').owlCarousel({
            items: 5,
            loop: true,
            margin: 10,
            nav: true,
            slideBy: 1,
        });
    }, []);

    return (
        <div className='container'>
            <h2 className="most-loved-heading">DISCOVER WHAT'S NEW</h2>
            <div className="owl-carousel owl-theme">
                <div className="item">
                    <a href="#"><img src="\images\women\casual\wc1.jpg" alt="Item 1" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
                <div className="item">
                    <a href="#"><img src="\images\women\casual\wc10.jpg" alt="Item 2" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
                <div className="item">
                    <a href="#"><img src="\images\women\casual\wc7.jpg" alt="Item 3" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
                <div className="item">
                    <a href="#"><img src="\images\women\casual\wc9.jpg" alt="Item 4" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
                <div className="item">
                    <a href="#"><img src="\images\women\casual\wc5.jpg" alt="Item 5" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
                <div className="item">
                    <a href="#"><img src="\images\women\casual\wc2.jpg" alt="Item 6" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;