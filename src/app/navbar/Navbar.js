import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
    
<nav className="navbar navbar-expand-lg navbar-light bg-white px-lg-3 py-lg-2 shadow-sm sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">CuteCuddles</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/products">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/term">Term & Condition</Link>
        </li>
      </ul>
      <form className="d-flex">
      {/* <button type="button" className="btn btn-outline-dark shadow-none mg-lg-2 me-3" data-bs-toggle="modal" data-bs-target="#loginModal">
         Login
            </button>
      <button type="button" className="btn btn-outline-dark shadow-none mg-lg-2 me-3" >
         Register
            </button> */}

      </form>
      
    </div>
  </div>
</nav>
    </>
  )
}
