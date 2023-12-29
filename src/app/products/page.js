'use client'
import React from 'react'
import Media from '../../data/media'
import Link from 'next/link';

export default function page() {
  return (
    <div className='bg-light'>
      <div className="container ">
        <div className="row">
        
    
     

      {
        Media.map((item, index)=>(
          <div className="col-lg-3 col-md-6 my-3" key={index}>
          <div className="card mt-4 mx-2" style={{width: "18rem"}}>
               <img src={item.image} className="card-img-top" height='300' width='300' alt="..."/>
               <div className="card-body">
                <h5 className='cart-title'>Product: </h5>
                 <h4 className="card-title">Price: {item.price}</h4>
                 <p className="card-text">Description: {item.desc}</p>
                 <Link href="https://wa.me/+918076864233" className="btn btn-outline-dark shadow-none mg-lg-2 me-3 ">Buy Now</Link>
                 {/* <a href="#" className="btn btn-outline-dark shadow-none mg-lg-2 me-3">Add Cart</a> */}
               </div>
             </div>
          </div>
        ))
      }





            </div>
          </div>







    
    </div>
  )
}
