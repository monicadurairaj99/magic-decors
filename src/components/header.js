import React, { useContext } from "react"
import { Link } from "@reach/router"
import { CartContext } from "../../shopping.js"
import Helmet from "react-helmet"

export default function Header() {
    
    const { itemCount } = useContext(CartContext)
    
    return (
        <>
         <Helmet>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          </Helmet>
          <div id="myContainer">
            <header>
                <h1>MAGIC DECORS 
                </h1>
            </header>

            <ul className="list-group list-group-horizontal">
              <li className="list-group-item"><Link to="/">Home</Link></li>
              <br/>
              <li className="list-group-item"><Link to="shop">Shop</Link></li>
              <br/>
              <li className="list-group-item"><Link to="about">About</Link></li>
              <br/>
              <li className="list-group-item"><Link to="contact">Contact</Link></li>
              <br/>
              <li className="list-group-item"><Link to="checkout">Check Out</Link></li>
              <br/>
              <li className="list-group-item">

                    {itemCount === 0 &&
                        <strong>How about you buy something?</strong>
                    }

                    {itemCount > 0 &&
                        <strong>You have {itemCount} item(s) in your cart!</strong>
                    }

              </li>
              
          </ul>
          </div>

        </>
    )
}