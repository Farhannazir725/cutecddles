'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Signup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  type="button" variant="light" className="btn bg-none btn-outline-dark shadow-none  mb-2 "onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} >
        <Modal.Header closeButton>
            
         <h3 className='text-center text-bold'>SignUp</h3>
         
        </Modal.Header>
        <Modal.Body>

      
        <form action="">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 ps-0 mb-3">
                <label  className="form-label ">Name</label>
                <input type="text" className="form-control shadow-none"/>  
                </div>
                <div className="col-md-6 p-0">
                <label  className="form-label">Email </label>
                <input type="email" className="form-control shadow-none"/>  
                </div>
                <div className="col-md-6 ps-0 mb-3">
                <label  className="form-label">Phone Number</label>
                <input type="number" className="form-control shadow-none"/>  
                </div>
                <div className="col-md-6 p-0 mb-3">
                <label  className="form-label">Picture</label>
                <input type="file" className="form-control shadow-none"/>  
                </div>
               
                <div className="col-md-6 ps-0 mb-3">
                <label  className="form-label">Username</label>
                <input type="text" className="form-control shadow-none"/>  
                </div>
                <div className="col-md-6 p-0 mb-3">
                <label  className="form-label">Date of Birth</label>
                <input type="date" className="form-control shadow-none"/>  
                </div>
                <div className="col-md-6 ps-0 mb-3">
                <label  className="form-label">Password</label>
                <input type="password" className="form-control shadow-none"/>  
                </div>
                <div className="col-md-6 p-0 mb-3">
                <label  className="form-label">Confirm Password</label>
                <input type="password" className="form-control shadow-none"/>  
                </div>
            </div>
        </div>
        </form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose} className='btn btn-dark shadow-none'>
            Close
          </Button>
          <Button variant="light" onClick={handleClose} className='btn btn-dark shadow-none'>
          Ragister
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;