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

            <ul className="d-flex flex-wrap list-group-horizontal d-flex justify-content-center">
              <li className="list-group-item" id="item1" ><Link to="/">Home</Link> </li>
              <li className="list-group-item" id="item2" ><Link to="shop">Shop</Link></li>
              <br/>
              <li className="list-group-item" id="item3" ><Link to="about">About</Link></li>
              <br/>
              <li className="list-group-item" id="item4"><Link to="contact">Contact</Link></li>
              <br/>
              <li className="list-group-item" id="item5" ><Link to="checkout">Check Out ({itemCount})</Link></li>
              <br/>
             
          </ul>
          </div>

        </>
    )
}