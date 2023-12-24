import React from 'react'

export default function page() {
  return (
    <>
    <div className="my-5 px-4">
        <h2 className="fw-bold h-font text-center">Contact Us</h2>
         <hr width={150} height={2} style={{margin: '0 auto', backgroundColor: 'dark'}}/>
  
          <p className="text-center mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>
            Ad alias, aliquid doloremque harum sunt sint natus officia vitae nulla id.</p>
    </div>
    <div className="container">
  <div className="row">

  <div className="col-lg-6 col-md-6 mb-5 px-4">
      <div className="bg-white rounded shadow p-4 ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8379301690943!2d75.3975474753884!3d29.98408737495404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111f6f030d9439%3A0x8cf84aa648456850!2sForensicmart!5e0!3m2!1sen!2sae!4v1703369175447!5m2!1sen!2sae" className="w-100 rounded mb-4" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <h5>Address</h5>
        <a href="https://goo.gl/maps/oRGV1Wh3bc577qeb7" target="_blank" className="d-inline-block text-decoration-none text-dark mb-2"><i className="bi bi-geo-alt-fill"></i> Bundi Road Mansa Punjab</a>

        <h5 className="mt-4">Call Us </h5>
        <a  href="tel: +919509390034" className="d-inline-block mb-2 text-decoration-none text-dark"><i className="bi bi-telephone-fill"></i> +919509390034</a>
        <br/>
        <a  href="tel: +919509390034" className="d-inline-block text-decoration-none text-dark"><i className="bi bi-telephone-fill"></i> +919509390034</a>

        <h5 className="mt-4">Email</h5>
        <a href="mailto: forensicmart@gmail.com" className="d-inline-block text-decoration-none text-dark" ><i className="bi bi-envelope-fill"></i> forensicmart@gmail.com</a>

        <h5 className="mt-4">Follow US </h5>
        <a  href="#" className="d-inline-block text-dark fs-5 me-2">
          <i className="bi bi-twitter me-1"></i> 
        </a>
        
        <a  href="#" className="d-inline-block text-dark fs-5 me-2">
          <i className="bi bi-facebook"></i>  
        </a>
        
        <a  href="#" className="d-inline-block text-dark fs-5 ">
          <i className="bi bi-instagram"></i> 
        </a>

        </div>
        </div>

        <div className="col-lg-6 col-md-6 px-4">
      <div className="bg-white rounded shadow p-4">
        <form action="">
          <h5>Send a Massage</h5>
          <div className="mt-3">
                <label  className="form-label" style={{fontWeight:'500'}}>Name</label>
                <input type="text" className="form-control shadow-none"/>    
            </div>

            <div className="mt-3">
                <label  className="form-label" style={{fontWeight:'500'}}>Email</label>
                <input type="email" className="form-control shadow-none" />   
            </div>

            <div className="mt-3">
                <label  className="form-label" style={{fontWeight:'500'}}>Subject</label>
                <input type="text" className="form-control shadow-none" />   
            </div>

            <div className="mt-3">
                <label  className="form-label" style={{fontWeight:'500'}}>Message</label>
                <textarea className="form-control shadow-none" rows="5" style={{resize:'none'}}></textarea>   
            </div>
            <button type="submit" className="btn text-white bg-dark mt-3">Send</button>
        </form>
        
      </div>
    </div>
    </div>
    </div>      
    </>
  )
}
