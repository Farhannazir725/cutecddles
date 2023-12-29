'use client'
import React from 'react'
import Media from '../../data/media'
import Link from 'next/link';

export default function page() {
  return (
    <div className='bg-white shadow'>
      <div className="container bg-white" >
        <div className="row">
        
    
     

      {
        Media.map((item, index)=>(
          <div className="col-lg-3 mb-5 col-md-6 my-3  bg-white shadow" key={index}>
          <div className="card mt-4 mb-4 mx-2" style={{width: "18rem"}}>
               <img src={item.image} className="card-img-top" height='300' width='300' alt="..."/>
               <div className="card-body mb-4">
                <h5 className='cart-title'>Product: </h5>
                 <h5 className="card-title">Price: <Link href='https://wa.me/+918076864233'>Get Price</Link></h5>
                 <p className="card-text">Description: {item.desc}</p>
                 <Link href="https://wa.me/+918076864233" className="btn btn-outline-dark shadow-none mg-lg-2  mt-3 me-3 ">Buy Now</Link>
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
