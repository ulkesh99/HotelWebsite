import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Amenities = () => {
    return (
        <section id='amenities' className='amenitiesSection'>
        <h4 className='heading' style={{textDecoration: 'underline'}}>Amenities</h4>
        <Swiper style={{alignItems: 'center', justifyContent:'center',paddingLeft: '30px'}}
        modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
                // navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
            pagination={{ clickable: true }}
            breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 80 },
                    480: { slidesPerView: 1, spaceBetween: 150 },
                    768: { slidesPerView: 2, spaceBetween: 50 },
                    1024: { slidesPerView: 3, spaceBetween: 150 },
                  }}
        >
            <SwiperSlide>
                    <div class="card amenities-card" style={{ height: "420px", marginBottom: '20px', backgroundColor:'#F0DDBC'}}>
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_960_720.jpg" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title amenities-card-title">Swimming Pool</h5>
                    <p class="card-text amenities-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div class="card amenities-card" style={{height: "420px", marginBottom: '20px',backgroundColor:'#F0DDBC'}}>
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2014/07/11/23/15/carrom-390836__340.jpg" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title amenities-card-title">Indoor Games</h5>
                    <p class="card-text amenities-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div class="card amenities-card" style={{height: "420px", marginBottom: '20px',backgroundColor:'#F0DDBC'}}>
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/02/11/10/01/dumplings-632203__340.jpg" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title amenities-card-title">Delicious Cuisine</h5>
                    <p class="card-text amenities-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div class="card amenities-card" style={{height: "420px",backgroundColor:'#F0DDBC'}}>
                <img class="card-img-top amenitiesImg" src="https://cdn.pixabay.com/photo/2017/04/17/10/26/barbecue-2237116__340.jpg" alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title amenities-card-title">Barbeque</h5>
                    <p class="card-text amenities-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div class="card amenities-card" style={{height: "420px",backgroundColor:'#F0DDBC'}}>
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title amenities-card-title">Card title</h5>
                    <p class="card-text amenities-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
            </SwiperSlide>

                </Swiper>
                </section>
    )
}

export default Amenities;