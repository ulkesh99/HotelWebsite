
// import { fa-location-dot } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'
import { BsFacebook } from 'react-icons/bs'
import { BrowserRouter, Link, Routes, Route, Redirect } from 'react-router-dom'
import Menu from './Menu'
// import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <BrowserRouter>
            <section id="footer" className='footerSection'>
            <div className="container-fluid">
            <div className="row">
                    <div className="col-sm d-flex justify-content-center align-items-center footer-left footerSection"><h2>Hotel Name</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam in velit ratione recusandae ipsam. Tenetur, totam temporibus voluptatum quasi iure officiis ad sit fuga eum architecto reprehenderit. Nostrum, harum asperiores?
                    Iure ducimus harum saepe dolor, neque eos voluptatem, inventore dignissimos officia placeat quisquam libero quos? Eos assumenda vel optio. Fugit, veniam. Doloribus dolore inventore tempore, placeat blanditiis suscipit perferendis vel.</p></div>
                    <div className="col-md d-flex justify-content-center align-items-center footer-mid footerSection"><h2>Important Links</h2>
                        <ul>
                            <li>About Us</li>
                            {/* <Link target='_blank' to={<Menu />}>Menu</Link> */}
                                <li>Events</li>
                                <Link target='_blank' to={'/menu'}>Footer</Link>
                    </ul>
                    </div>
                    <div className="col-md d-flex justify-content-center footer-right align-items-center footerSection"><MdLocationOn style={{fontSize: '50px'
                    }}/>
                             Manori Village, Vai Lakanni Mata Nagar, Malad West, Mumbai - 400095 (Opp Kharadala Talao)              
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
                    <Routes>
                        <Route exact path='/menu' element={<Menu />}></Route>
                    </Routes>
                    </BrowserRouter>
            </>

    )
}

export default Footer