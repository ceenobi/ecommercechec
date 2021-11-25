import React from 'react'
import CarouselView from './CarouselA/Carousel'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import CarouselShop from './CarouselB/Carousel'
import Highlight from './Highlight/Highlight'
import Watch from './Watch/Watch'
import Jumbotron from './Jumbotron/Jumbotron'
import Trending from './Trending/Trending'

const Home = () => {
  return (
    <>
      <CarouselView />
      <HomeView>
        <Container className='bg mt-5 py-5'>
          <CarouselShop />
          <Highlight />
          <Watch />
        </Container>
        <Jumbotron />
        <Trending />
      </HomeView>
    </>
  )
}

export default Home

const HomeView = styled.div`
  .bg {
    background-color: var(--lightWhite);
  }
`
