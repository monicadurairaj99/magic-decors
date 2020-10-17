const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const magicdecorTemplate = path.resolve(`src/templates/magicdecorTemplate.js`)
  
    return graphql(`
     {
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
      price
      sku
    }
  }
}

` ).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
  
      result.data.allContentfulMagicDecors.nodes.forEach((node) => {
        createPage({
            path: node.name,
            component: magicdecorTemplate,
            context: {
                slug: node.name
            }, // additional data can be passed via context
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error);
    });
  }