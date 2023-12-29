import React, { useEffect } from 'react';
import $ from 'jquery';
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
        <div className="owl-carousel owl-theme">
            <div className="item"><img src="\images\women\casual\wc1.jpg" alt="Item 1" /></div>
            <div className="item"><img src="\images\women\casual\wc2.jpg" alt="Item 2" /></div>
            <div className="item"><img src="\images\women\casual\wc3.jpg" alt="Item 3" /></div>
            <div className="item"><img src="\images\women\casual\wc4.jpg" alt="Item 4" /></div>
            <div className="item"><img src="\images\women\casual\wc5.jpg" alt="Item 5" /></div>
            <div className="item"><img src="\images\women\casual\wc6.jpg" alt="Item 6" /></div>
          
        </div>
    );
};

export default NewArrival;