import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
     <main>
          <h1>Order Details</h1>
          <div>
               <h1>Shipping</h1>
               <p>
                    <b>Address</b>
                    {"address here lol"}
               </p>
          </div>
          <div>
               <h1>Contact</h1>
               <p>
                    <b>Name</b>
                    {"Siddhartha"}
               </p>
               <p>
                    <b>Phone</b>
                    {"929292929292"}
               </p>
          </div>
          <div>
               <h1>Status</h1>
               <p>
                    <b>Order Status</b>
                    {"Preparing"}
               </p>
               <p>
                    <b>Placed At</b>
                    {"29-04-2023"}
               </p>
               <p>
                    <b>Delivered At</b>
                    {"30-04-2023"}
               </p>
          </div>
          <div>
               <h1>Payment</h1>
               <p>
                    <b>Payment Method</b>
                    {"Online"}
               </p>
               <p>
                    <b>Payment Reference</b>
                    {"#478293874"}
               </p>
               <p>
                    <b>Paid At</b>
                    {"30-04-2023"}
               </p>
          </div>
          <div>
               <h1>Amount</h1>
               <p>
                    <b>Items Total</b>
                    INR{"69696"}
               </p>
               <p>
                    <b>Shipping Charges</b>
                    INR{"200"}
               </p>
               <p>
                    <b>Tax</b>
                    INR{"200"}
               </p>
               <p>
                    <b>Total Amount</b>
                    INR{"70000"}
               </p>
          </div>
          <article>
               <h1>Ordered Items</h1>
               <div>
                    <h4>Cheese Burger</h4>
                    <div>
                         <span>{12}</span> x {" "}
                         <span>{230}</span>
                    </div>
               </div>
               <div>
                    <h4>Veg Cheese Burger</h4>
                    <div>
                         <span>{10}</span> x {" "}
                         <span>{500}</span>
                    </div>
               </div>
               <div>
                    <h4>Chicken Burger</h4>
                    <div>
                         <span>{20}</span> x {" "}
                         <span>{700}</span>
                    </div>
               </div>
               <div>
                    <h4 style={{fontWeight:800}}>Sub Total</h4>
                    <div style={{fontWeight:800}}>INR {2323232}</div>
               </div>
          </article>

     </main>
    </section>
  )
}

export default OrderDetails