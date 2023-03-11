
// import { fa-location-dot } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
// import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section id="footer" className='footerSection'>
            <div className="container-fluid">
            <div className="row">
                    <div className="col-sm d-flex justify-content-center align-items-center footer-left contactSection"><h2>Hotel Name</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam in velit ratione recusandae ipsam. Tenetur, totam temporibus voluptatum quasi iure officiis ad sit fuga eum architecto reprehenderit. Nostrum, harum asperiores?
                    Iure ducimus harum saepe dolor, neque eos voluptatem, inventore dignissimos officia placeat quisquam libero quos? Eos assumenda vel optio. Fugit, veniam. Doloribus dolore inventore tempore, placeat blanditiis suscipit perferendis vel.</p></div>
                    <div className="col-md d-flex justify-content-center align-items-center footer-mid contactSection"><h2>Important Links</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Menu</li>
                            <li>Events</li>
                    </ul>
                    </div>
                    <div className="col-md d-flex justify-content-center footer-right align-items-center contactSection"><MdLocationOn style={{fontSize: '50px'
                    }}/>
                            Hotel Location <br />
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ea quas voluptatem qui saepe autem quaerat reprehenderit nisi neque, voluptates doloribus eveniet expedita ratione alias possimus nostrum provident exercitationem eum.                    
                        <h4 className="footer-socials-header">Stay Connected</h4>
                        <ul className="d-flex flex-row footer-socials-name">
                                    <a target="_blank" className='socials' href="https://www.instagram.com/">      <RiInstagramFill /> Instagram</a>
                            <a target='_blank' className="socials" href='https://www.facebook.com/login/'><BsFacebook/> Facebook</a>
                        </ul>
                    </div>
                </div>
                <hr />
                <h6 className="license">Copyright©2023 Ferreria Farms. All rights reserved.</h6>
                </div>
                </section>
            </>

    )
}

export default Footer