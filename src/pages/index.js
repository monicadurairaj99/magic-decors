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
<hr/>
<div id="myContainer">
      <div class="row">
      <div class="col-sm-6">
      <h1>OUR MISSION</h1>
      <p>We’re committed to creating effective products to make putting on Decorations, a fun and effortless process. Paired with exceptional customer service, tutorials  fashion inspiration – MAGICDECOR.com is your one stop shop so that you can look & feel your best without Decorations.</p>
      </div>
      <div class="col-sm-6">
      <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt="Boho inspired Living room"
    /></div>
      </div>
      </div>
      <hr/>
      <h3>FOLLOW US OUT THERE</h3>
      <h4><i className="fa fa-facebook" aria-hidden="true"></i><i className="fa fa-twitter" aria-hidden="true"></i> <i className="fa fa-instagram" aria-hidden="true"></i></h4>

  </Layout>
  
  )
}