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
                <h5 className='cart-title'><b>Product:</b>  {item.name} </h5>
                 <h6 className="card-text"><b>Price:</b>  {item.price}</h6>
                 <h6 className='card-text'><b>Discount:</b>  {item.disc}</h6>
                 <h6 className='card-text'><b>After Discount Price: </b>{item.discp}</h6>
                 <p className="card-text"><b>About Product:</b> {item.desc}</p>
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
