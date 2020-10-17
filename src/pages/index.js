import React from "react"
import Layout from "../components/layout"
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
  return( 
    
  <Layout>
    {/* <div>Hello world!</div> */}
    <>
           <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1534807775-7fe738b744a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
      alt="Fall Decorations"
    />
    <Carousel.Caption>
      <h3>Fall Decorations</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1509266145091-5e3e5ef88bc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
      alt="Treetops Glisten Ornaments"
    />
    <Carousel.Caption>
      <h3>Treetops Glisten Ornaments</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt="Boho inspired Living room"
    />
    <Carousel.Caption>
      <h3>Boho inspired Living room</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>

  </Layout>
  
  )
}