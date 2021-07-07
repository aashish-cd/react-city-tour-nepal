import React from 'react'
import Logo from './logo.png'

const Navbar = () => {


 return (
  <div>
   <nav className="navbar  navbar-fixed-top">
    <div className="container-fluid">
     <a className="navbar-brand" href='/'>
      <img src={Logo} alt="tour-logo" />
     </a>
     <form className="d-flex">

      <button className="btn btn-outline-success" type="submit" >We ❤ Nepal</button>
     </form>
    </div>
   </nav>
  </div>
 )
}


export default Navbar