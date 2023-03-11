import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-custom navbar-expand-lg navbarSection" style={{cursor: "pointer"}}>
  <div className="container-fluid">
    <a className="navbar-brand"style={{color: '#F0DDBC'}} href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active "style={{color: '#F0DDBC'}} aria-current="page" to="landing">Home</Link>
        </li>
            
        <li className="nav-item">
          <Link className="nav-link active" style={{color: '#F0DDBC'}} aria-current="page" to="about">About</Link>
            </li>
            
            <li className="nav-item">
          <Link className="nav-link active" style={{color: '#F0DDBC'}} aria-current="page" to="packages">Packages</Link>
        </li>
       
        <li className="nav-item" >
          <Link className="nav-link active"  style={{color: '#F0DDBC'}} aria-current="page" to="amenities">Amenities</Link>
            </li>
            
            <li className="nav-item">
          <Link className="nav-link active"  style={{color: '#F0DDBC'}}  aria-current="page" to="Menu">Menu</Link>
            </li>
            
            <li className="nav-item">
          <Link className="nav-link active"  style={{color: '#F0DDBC'}}  aria-current="page" to="gallery">Gallery</Link>
        </li>
            
        <li className="nav-item">
          <Link className="nav-link active"  style={{color: '#F0DDBC'}} aria-current="page" to="contactUs">Contact Us</Link>
        </li>   
      </ul>
          <p className="d-flex align-items-center justify-content-center m-2">ulkeshchendwankar1@gmail.com</p>
          <p className="d-flex align-items-center justify-content-center m-2">+91 9876543210</p>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
