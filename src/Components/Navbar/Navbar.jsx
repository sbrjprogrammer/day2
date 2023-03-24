import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import "./Navbar.css"

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-0" style={{backgroundColor:"#1E282C",color:"white"}}>
    <div className="container-fluid" >
   
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item text-light">
            <a className="nav-link active" style={{color:'white'}} aria-current="page" href="#">Admin <FaUserAlt className='ms-2 mb-1'/></a>
          </li>
       
         
        
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar