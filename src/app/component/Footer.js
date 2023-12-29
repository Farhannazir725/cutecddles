import React from 'react'
import Link from 'next/link';
export default function Footer() {
  return (
    <div className='bg-light'>
<div className="container  bg-white mt-5  mb-5">
<div className="row">
   <div className="col-lg-4 p-4 ">
    <h3 className="h-font fw-bold fs-3 mb-2">CuteCuddles</h3>
    <p> Toy heaven for kids- This is the only motive to kickstart a passionate dream called cute cuddles. Dream to ensure every kid gets access to mindblowing and essential toys that are both developmental and super fun! .</p>
   </div>

   <div className="col-lg-4 p-4">
    <h5 className="mb-3">Links</h5>
    <Link href="/" className="d-inline-block mb-2 text-dark text-decoration-none">Home</Link><br/>
    <Link href="/about" className="d-inline-block mb-2 text-dark text-decoration-none">About</Link><br/>
    <Link href="/contact" className="d-inline-block mb-2 text-dark text-decoration-none">Contact</Link><br/>
    <Link href="products" className="d-inline-block mb-2 text-dark text-decoration-none">Products</Link><br/>
   
   </div>

   <div className="col-lg-4 p-4">
    <h5 className="mb-3">Follow us </h5>
    <Link href="#" className="d-inline-block text-dark text-decoration-none mb-2 "><i className="bi bi-twitter me-1"></i>  Twitter</Link><br/>
    <Link href="#" className="d-inline-block text-dark text-decoration-none mb-2 "><i className="bi bi-facebook me-1"></i>  Facebook</Link><br/>
    <Link href="#" className="d-inline-block text-dark text-decoration-none mb-2 "><i className="bi bi-instagram me-1"></i>  Instagram</Link><br/>
    <Link href="#" className="d-inline-block text-dark text-decoration-none"><i className="bi bi-linkedin me-1"></i>  Linkedin</Link>
   </div>

</div>
</div>   


    <h6 className="text-center bg-dark text-white p-3 m-0">Desing and Developed By CuteCuddels</h6>
    </div>
  )
}
