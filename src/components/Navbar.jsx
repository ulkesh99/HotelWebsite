import { Link as ScrollLink} from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { MdOutlineEmail } from 'react-icons/md'
import {MdCall} from 'react-icons/md'
// import {Menu} from './Menu'


// navbar shadow navbar-expand-sm bg-dark navbar-dark fixed-top navbarSection 
const Navbar = () => {
  return (
    <nav className="navbar shadow navbar-expand-md  customNavbar fixed-top navbarSection " style={{cursor: "pointer"}}>
  <div className="container-fluid">
    <a className="navbar-brand"style={{color: '#F0DDBC'}} href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <ScrollLink  className="nav-link"  aria-current="page" to="landing">Home</ScrollLink>
        </li>
            
        <li className="nav-item">
          <ScrollLink className="nav-link " aria-current="page" to="about">About</ScrollLink>
            </li>
            
            <li className="nav-item">
          <ScrollLink className="nav-link" offset={-40} aria-current="page" to="packages">Packages</ScrollLink>
        </li>
       
        <li className="nav-item" >
          <ScrollLink className="nav-link" offset={-40}  aria-current="page" to="amenities">Amenities</ScrollLink>
            </li>
            
            {/* <li className="nav-item">
              <RouterLink className="nav-link" aria-current="page" target="_blank" to={"/menu"}>Menu</RouterLink>
            </li> */}
            
            <li className="nav-item">
          <ScrollLink className="nav-link" offset={-40}   aria-current="page" to="gallery">Gallery</ScrollLink>
        </li>
            
        <li className="nav-item">
          <ScrollLink className="nav-link" offset={-40}  aria-current="page" to="contactUs">Contact Us</ScrollLink>
        </li>   
          </ul> 
          <p className="d-flex align-items-center justify-content-center m-2" style={{color : '#F0DDBC'}}><MdOutlineEmail/></p>
          <p className="d-flex align-items-center justify-content-center m-2" style={{ color: '#F0DDBC' }}> xxyz@gmail.com</p>
          <p className="d-flex align-items-center justify-content-center m-2" style={{color : '#F0DDBC'}}><MdCall/></p>
          <p className="d-flex align-items-center justify-content-center m-2" style={{ color: '#F0DDBC' }}>+91 7678055899</p>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
