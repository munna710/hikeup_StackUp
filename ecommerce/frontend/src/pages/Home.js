import React from 'react'
import Carousel from '../components/Carousel'
import MostLoved from '../ui/MostLoved'
import NewArrival from '../ui/NewArrival'
import NewKids from '../ui/NewKids'
import NewsLetter from '../ui/NewsLetter'
import Testimonial from '../ui/Testimonial'
const Home = () => {
  return (
    <div className="carousel-mostloved">
      <Carousel />
      <MostLoved />
      <NewArrival />
      <NewKids />
      <NewsLetter />
      <Testimonial />
</div>
  )
}

export default Home
