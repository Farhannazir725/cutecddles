import React from 'react'

export default function page() {
  return (
    <div className='bg-light'>
  <div className="my-5 px-4 mb-4 ">
  <h2 className="fw-bold h-font text-center">About Us</h2>
  <hr width="150px" height="2px" style={{margin: '0 auto', backgroundColor: 'dark'}}/>
  <p className="text-center mt-3 ">We offer a wide range of toys which help them learn and enjoy. Our products includes a variety of soft toys, bubble toys and soft plush items like sofa and cushion book. We also offer a wide range of wobble toys and battery toys like talking tom, brswinging penguin and funny rabbit. We believe in a kids overall development so we provide writing tablets and computer toys using which they can play and learn.</p>
</div> 


<div className="container mt-4 ">
  <div className="row justify-content-between align ">
  <div className="col-lg-6 col-md-5 mb-4 order-lg-1 order-md-1 order-2">
    <h3 className="mb-3 mt-4">Lorem ipsum dolor sit.</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Mollitia odio non voluptas id saepe dolore nisi.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Mollitia odio non voluptas id saepe dolore nisi.
      
      </p>
      </div>
 <div className="col-lg-5 col-md-5 mb-4 order-lg-2 order-md-2 order-1 mt-4">
        <img src="https://plus.unsplash.com/premium_photo-1670249419932-a7027d9003f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpc25lc3N8ZW58MHx8MHx8fDA%3D" className="w-100 rounded"/>

      </div>
  </div>
</div>



    </div>
  )
}
