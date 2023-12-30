import React, { useEffect } from 'react';
import $ from 'jquery';
import './NewArrival.css';
window.jQuery = $;
window.$ = $;
require('owl.carousel');
const NewKids = () => {
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
            <div className="owl-carousel owl-theme">
                <div className="item">
                    <a href="#"><img src="\images\girls\g1.png" alt="Item 1" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
                <div className="item">
                    <a href="#"><img src="\images\girls\g2.png" alt="Item 2" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
                <div className="item">
                    <a href="#"><img src="\images\girls\g3.png" alt="Item 3" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
                <div className="item">
                    <a href="#"><img src="\images\girls\g9.png" alt="Item 4" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
                <div className="item">
                    <a href="#"><img src="\images\girls\g7.png" alt="Item 5" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
                <div className="item">
                    <a href="#"><img src="\images\girls\g3.png" alt="Item 6" /></a>
                    <div className="product-content">
                        <h3 className="title"><a href="#">GREEN DRESS</a></h3>
                        <div className="price"><span>₹1200</span> ₹600</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewKids