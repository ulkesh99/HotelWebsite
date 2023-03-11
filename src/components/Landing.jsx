import trees from '../images/trees.jpg'
import pool from '../images/pool.jpg'
import houses from '../images/houses.jpg'

const Landing = () => {
  return (
    <section id="landing" className='landing'>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
          <div class="carousel-item active head-text">
            <div className="head-image">
          <img src={pool} class="d-block w-100 imgHero" alt="..." /></div>
          <div class="text-on-image">
            <h1 style={{ fontSize:'92px', width:'100vw', paddingLeft:'60px', marginLeft:'90px',color:'#394156'}}>First slide label</h1>
            {/* <p>Some representative placeholder content for the first slide.</p> */}
          </div>
    </div>
          <div class="carousel-item head-text">
            <div className="head-image">
              <img src={houses} className="d-block w-100 imgHero" alt="..." /></div>
            <div className="text-on-image">
              <h3 style={{fontSize:'92px', width:'100vw', paddingLeft:'60px', marginLeft:'90px',color:'#394156'}}>Second slide text</h3>
            </div>
    </div>
          <div class="carousel-item head-text">
            <div className="head-image">
              <img src={trees} className="d-block w-100 imgHero" alt="..." /></div>
              <div className="text-on-image">
              <h3 style={{fontSize:'92px', width:'100vw', paddingLeft:'60px', marginLeft:'90px',color:'#394156'}}>Third slide text</h3>
            </div>
    </div>
  </div>
      </div>
      </section>
  );
};

export default Landing;
