import React, {} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import AddToCart from "../components/add-to-cart.js"


export default function magicdecorTemplate({data}) {
  const MagicDecors = data.contentfulMagicDecors

  return (
    <>
      <Helmet bodyAttributes={ { class: `product-page ${MagicDecors.sku}` } }>
        <title>{MagicDecors.name} | Magic Decors</title>
        <meta name="description" value="Shop with us!"/>
      </Helmet>
      <Layout>
      <div id="myContainer">
      <div class="row">
      <div class="col-sm-6">
          <img src={MagicDecors.images.file.url} alt={MagicDecors.name} className="img-thumbnail" />  
          </div>
          <div class="col-sm-6">  
          <h2 className="animate__animated animate__bounce">{MagicDecors.name} - ${MagicDecors.price.toFixed(2)}</h2>
          
          <AddToCart item={ {sku: MagicDecors.sku, price: MagicDecors.price, name: MagicDecors.name} }></AddToCart>
          </div> 
        </div>
        </div>
          
          <p>
              {MagicDecors.description.description}
          </p>

          

      </Layout>
    </>
  )
}


export const query = graphql`
query MagicDecorsQuery($slug: String!){
  contentfulMagicDecors(name: {eq: $slug}) {
    name,
    description {
      description
    }
    images {
      file {
        url
      }
    }
    price
    sku
    
  }
}
` 
