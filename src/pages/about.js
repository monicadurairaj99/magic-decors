import React from "react"
import Layout from "../components/layout"
import Carousel from 'react-bootstrap/Carousel'

export default function About() {
    return(
        <Layout>
<>
           <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      alt="Wall Decor"
    />
    <Carousel.Caption>
      <h3>Wall Decor</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1519643225200-94e79e383724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Living Room</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1564129902891-da885e5a13a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Patio Decor</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h1>ABOUT US</h1>
<p>MAGIC DECOR-Designing, we document inspiration. Our aim is to bring to our readers a steady set of resources that would help them visualize, create and maintain beautiful homes. Our emphasis is on visuals that motivate you. We cover architectural innovations, cool homes, ideas for specific rooms, new design trends, products and occasionally decor tips. We hope to become your one stop source for home design inspiration!</p>
<br/>
<p>Join our community on Facebook and upload your work there to put it before a huge audience. Do not like something you see here? Tell us about it. We just can’t hear enough from our readers and the feedback we get will help us improve our site.</p>
<br/>
<p>We update our site everyday. If you do not want to miss out any action be sure to follow us! An easy way would be to subscribe to our email newsletter. You will get all articles delivered to your inbox and what more, you will get a free ebook full of interior designs.</p>
</>
<hr/>
      <h3>FOLLOW US OUT THERE</h3>
      <h4><i className="fa fa-facebook" aria-hidden="true"></i><i className="fa fa-twitter" aria-hidden="true"></i> <i className="fa fa-instagram" aria-hidden="true"></i></h4>

        </Layout>
    )
}