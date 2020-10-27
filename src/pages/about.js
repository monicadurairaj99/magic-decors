import React from "react"
import Layout from "../components/layout"
import Carousel from 'react-bootstrap/Carousel'

export default function About() {
    return(
        <Layout>
            <div>About magic decor</div>
<>
           <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1534807775-7fe738b744a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1534807775-7fe738b744a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1534807775-7fe738b744a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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