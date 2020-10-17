import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

export default function Shop({data}) {
  return( 
  <Layout>
    <Helmet>
    <title>Hello shop!</title>
    </Helmet>
    <div class="row">
    {data.allContentfulMagicDecors.nodes.map((node, shop) => (
        <div class="col-md-3" key={shop}>
          <div class="card mb-4 shadow-sm">
          <img class="card-img-top" src={ node.images.file.url } alt={ node.name } data-holder-rendered="true" />
            <div class="card-body">
              <p class="card-text">{node.name}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href={node.name} class="btn btn-sm btn-outline-secondary">View</a>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
         ))}
        </div>

    
    
  </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulMagicDecors(sort: {fields: contentful_id, order: DESC}) {
    nodes {
      name
      description {
        description
      }
      images {
        file {
          url
        }
      }
    }
  }
}

` 