import React, { useContext } from "react"
import { CartContext } from "../../shopping.js"

export default function removefromcart({item}) {
    const { removeProduct } = useContext(CartContext)
    return (
        <>
            <button onClick={ () => removeProduct(item) }>Remove</button>
        </>
    )
}