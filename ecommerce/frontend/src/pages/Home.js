import React from 'react'
import Carousel from '../components/Carousel'
import MostLoved from '../ui/MostLoved'
import NewArrival from '../ui/NewArrival'
const Home = () => {
  return (
    <div className="carousel-mostloved">
      <Carousel />
      <MostLoved />
      <NewArrival />
</div>
  )
}

export default Home
