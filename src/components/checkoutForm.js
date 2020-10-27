import React, { useState } from "react"
import axios from "axios"
import { firestore } from "../../firebase.js"


export default function CheckoutForm() {

    const [ email, setEmail ] = useState("");
    const [ fullname, setFullname ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ addressLine1, setAddressLine1 ] = useState("");
    const [ addressLine2, setAddressLine2 ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ zipcode, setZipcode ] = useState("");


    function saveOrder() {
         //alert("This is sample cart, your order was not really completed.")

        let customer = {
            fullname: fullname,
            email: email,
            phone: phone,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            city: city,
            state: state,
            zipcode: zipcode
        }

        firestore.collection(`orders`).add(customer).catch(err => {
            console.error('Error adding orders: ', err)})

        //TODO:pass the control back to confiramtion page
  
    }

    return (
        <>
            <h2>Customer Info</h2>

               <div class="form-group">
                <label for="exampleFormControlInput1">Your Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name here" value={fullname} onChange={(e) => { setFullname(e.target.value) } } />
            </div>

            <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) } }/>
            </div>

               <div class="form-group">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter 10 digit phone number" value={phone} onChange={(e) => { setPhone(e.target.value) } }/>
            </div>
         
            <h2>Shipping Address</h2>

             <div class="form-group">
                <label for="exampleFormControlInput1">Address Line1</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address Line 1" value={addressLine1} onChange={(e) => { setAddressLine1(e.target.value) } } />
            </div>

            <div class="form-group">
                <label for="exampleFormControlInput1">Address Line2</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address Line 2" value={addressLine2} onChange={(e) => { setAddressLine2(e.target.value) } } />
            </div>

               <div class="form-group">
                <label for="exampleFormControlInput1">City</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="City" value={city} onChange={(e) => { setCity(e.target.value) } } />
            </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">State</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="State" value={state} onChange={(e) => { setState(e.target.value) } } />
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Postal Code</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Postal Code" value={zipcode} onChange={(e) => { setZipcode(e.target.value) } } />
            </div>

            <button className="btn btn-lg btn-primary" onClick={() => saveOrder()}>Place Order</button>
        </>
    )
}