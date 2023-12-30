import React from 'react'
import Carousel from '../components/Carousel'
import MostLoved from '../ui/MostLoved'
import NewArrival from '../ui/NewArrival'
import NewKids from '../ui/NewKids'
import NewsLetter from '../ui/NewsLetter'
const Home = () => {
  return (
    <div className="carousel-mostloved">
      <Carousel />
      <MostLoved />
      <NewArrival />
      <NewKids />
      <NewsLetter />
</div>
  )
}

export default Home
