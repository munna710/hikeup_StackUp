import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './Testimonial.css';
const Testimonial = () => {
    useEffect(() => {
        $('.owl-carousel').owlCarousel({
            mouseDrag:false,
            loop:true,
            margin:2,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        });

        $('.owl-prev').click(function() {
            let active = $('.owl-item .item.show');
            $('.owl-item .item.show').removeClass('show');
            $('.owl-item .item').removeClass('next');
            $('.owl-item .item').removeClass('prev');
            active.addClass('next');
            if(active.is('.first')) {
                $('.owl-item .last').addClass('show');
                $('.first').addClass('next');
                $('.owl-item .last').parent().prev().children('.item').addClass('prev');
            }
            else {
                active.parent().prev().children('.item').addClass('show');
                if(active.parent().prev().children('.item').is('.first')) {
                    $('.owl-item .last').addClass('prev');
                }
                else {
                    $('.owl-item .show').parent().prev().children('.item').addClass('prev');
                }
            }
        });

        $('.owl-next').click(function() {
            let active = $('.owl-item .item.show');
            $('.owl-item .item.show').removeClass('show');
            $('.owl-item .item').removeClass('next');
            $('.owl-item .item').removeClass('prev');
            active.addClass('prev');
            if(active.is('.last')) {
                $('.owl-item .first').addClass('show');
                $('.owl-item .first').parent().next().children('.item').addClass('prev');
            }
            else {
                active.parent().next().children('.item').addClass('show');
                if(active.parent().next().children('.item').is('.last')) {
                    $('.owl-item .first').addClass('next');
                }
                else {
                    $('.owl-item .show').parent().next().children('.item').addClass('next');
                }
            }
        });

    }, []);

    return (
        <div className="container-fluid px-3 px-sm-5 my-5 text-center">
            <h1 className="most-loved-heading">WHAT OUR CLIENT SAYS</h1>
            <div className="owl-carousel owl-theme">
            <div class="item first prev">
            <div class="card border-0 py-3 px-4">
                <div class="row justify-content-center">
                    <img src="https://i.imgur.com/gazoShk.jpg" class="img-fluid profile-pic mb-4 mt-3"/>
                </div>
                <h6 class="mb-3 mt-2">Marielle Haag</h6>
                <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
            </div>
        </div>
        <div class="item show">
            <div class="card border-0 py-3 px-4">
                <div class="row justify-content-center">
                    <img src="https://i.imgur.com/oW8Wpwi.jpg" class="img-fluid profile-pic mb-4 mt-3"/>
                </div>
                <h6 class="mb-3 mt-2">Ximena Vegara</h6>
                <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
            </div>
        </div>
        <div class="item next">
            <div class="card border-0 py-3 px-4">
                <div class="row justify-content-center">
                    <img src="https://i.imgur.com/ndQx2Rg.jpg" class="img-fluid profile-pic mb-4 mt-3"/>
                </div>
                <h6 class="mb-3 mt-2">John Paul</h6>
                <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
            </div>
        </div>
        <div class="item last">
            <div class="card border-0 py-3 px-4">
                <div class="row justify-content-center">
                    <img src="https://i.imgur.com/T5aOhwh.jpg" class="img-fluid profile-pic mb-4 mt-3"/>
                </div>
                <h6 class="mb-3 mt-2">William Doe</h6>
                <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Testimonial;