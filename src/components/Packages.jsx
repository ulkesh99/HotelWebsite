import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// import { WiTime12 } from 'react-icons/wi'
import {BsFillPersonFill} from 'react-icons/bs'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Packages = () => {
    return (
        <>
        <section id='packages' className='packagesSection'>
                <h4 className='heading' style={{ textDecoration:'underline' }}>Packages</h4>
        <Swiper style={{alignItems: 'center', justifyContent:'center',paddingLeft: '10px',paddingRight:'10px'}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 80 },
                480: { slidesPerView: 1, spaceBetween: 150 },
                768: { slidesPerView: 2, spaceBetween: 50 },
                1024: { slidesPerView: 3, spaceBetween: 150 },
              }}
        >
            <SwiperSlide>
            <div class="card packagesCard" style={{height: "460px"}}>
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347__340.jpg" alt="Card image cap"/>
                <div class="card-body ">
                    <h5 class="card-title packagesHeading">Deluxe Room</h5><hr />
                    <div className="container-fluid d-flex align-items-center justify-content-center flex-row">
                                    <div className="col-md d-flex flex-column packagesdetails">CheckIn : 12pm</div> 
                                    <div className="col-md d-flex flex-column packagesdetails">CheckOut: 10am</div>
                                </div>
                                <hr />
                                <div className="container-fluid d-flex align-items-center justify-content-center flex-row">
                                    <div className="col-md d-flex flex-column packagesdetails">Weekday Price 4000/person.</div> 
                                    <div className="col-md d-flex flex-column packagesdetails">Weekend/Holiday Price 6000/person</div>
                                </div><hr />
                                <p style={{fontSize: "12px"}}>+18% GST As Applicable.</p>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div class="card packagesCard" style={{height: "460px"}}>
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_960_720.jpg" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title packagesHeading">Super Deluxe</h5><hr />
                    <div className="container-fluid d-flex align-items-center justify-content-center flex-row">
                                    <div className="col-md d-flex flex-column packagesdetails">CheckIn: 12pm</div> 
                                    <div className="col-md d-flex flex-column packagesdetails">CheckOut: 10am</div>
                                </div>
                                <hr />
                                <div className="container-fluid d-flex align-items-center justify-content-center flex-row">
                                    <div className="col-md d-flex flex-column packagesdetails">Weekday Price 4000/person</div> 
                                    <div className="col-md d-flex flex-column packagesdetails">Weekend/Holiday Price 6000/person</div>
                                </div><hr />
                                <p style={{fontSize: "12px"}}>+18% GST As Applicable.</p>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div class="card packagesCard" style={{height: "460px"}}>
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201__340.jpg" alt="Card image cap"/>
                <div class="card-body">
                                <h5 class="card-title packagesHeading">Family Package</h5><hr />
                                <div className="container-fluid d-flex align-items-center justify-content-center flex-row">
                                    <div className="col-md d-flex flex-column packagesdetails">CheckIn: 12pm</div> 
                                    <div className="col-md d-flex flex-column packagesdetails">CheckOut: 10am</div>
                                </div>
                                <hr />
                                <div className="container-fluid d-flex align-items-center justify-content-center flex-row">
                                    <div className="col-md d-flex flex-column packagesdetails">Weekday Price 4000/person</div> 
                                    <div className="col-md d-flex flex-column packagesdetails">Weekend/Holiday Price 6000/person</div>
                                </div><hr />
                                <p style={{fontSize: "12px"}}>+18% GST As Applicable.</p>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div class="card packagesCard" style={{height: "460px"}}>
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title packagesHeading">Card title</h5><hr />
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div class="card packagesCard" style={{height: "460px"}}>
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title packagesHeading">Card title</h5><hr />
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </SwiperSlide>

                </Swiper>
                </section>
            </>
    )
}

export default Packages;