import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-label="Slide 1" fdprocessedid="qrjmz" aria-current="true"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" fdprocessedid="mpy1qg" class=""></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" fdprocessedid="l3lxd" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active " data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/7973302/pexels-photo-7973302.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="d-block w-100 carousel-image" alt="First slide"  /> 
      <div class="carousel-caption text-start position-absolute end-0 top-0">
        <h1 class="display-1 text-dark my-heading">SUMMER SALE</h1>
        <p class="text-dark">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
        <button class="btn btn-outline-dark btn-lg me-2 mt-3 position-absolute">SHOP NOW</button>
      </div>     </div>
      <div class="carousel-item" data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/4715314/pexels-photo-4715314.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="d-block w-100 carousel-image" alt="Second slide"  /> 
      <div class="carousel-caption text-start position-absolute end-0 top-0">
        <h3 class="text-light fw-normal"> Discover Your Unique Style Journey with Us!</h3>
        <button class="btn btn-outline-dark btn-lg me-2 mt-3 position-absolute">SHOP NOW</button>
      </div>  
      </div>
      <div class="carousel-item" data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="d-block w-100 carousel-image" alt="Third slide"  />   
      <div class="carousel-caption text-start position-absolute end-0 top-0">
        <h1 class="text-dark fw-normal">  Discover Your Style with Our Bags and Scrunchies Collection!</h1>
        <button class="btn btn-outline-light btn-lg me-2 mt-3 position-absolute">SHOP NOW</button>
      </div>    </div>
    
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" fdprocessedid="e1axfc">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" fdprocessedid="fm1mwa">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel