
import aboutImg from '../images/about.svg'

const About = () => {
    return (
        // <h2>About Us</h2>
        <section id="about" className='about'>
        <div className="container">
            <div className="row">
                <div className="col-md d-flex justify-content-center align-items-center aboutSection">
                    <h4 style={{textDecoration: 'underline', fontSize:'45px'}}>About Us</h4>
                    <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti officiis placeat adipisci debitis ut at autem, ex exercitationem suscipit laboriosam accusantium omnis quae architecto minus mollitia. Autem velit reprehenderit magnam!
                    Optio mollitia unde architecto nostrum porro velit, magnam quo dolorum ullam voluptas laudantium molestiae aliquid nam tenetur placeat ipsam dignissimos perspiciatis! Mollitia repudiandae amet molestias, quod earum qui autem in!</p>
                </div>
                <div className="col-md d-flex justify-content-center align-items-center aboutImageSection">
                    <img className='aboutImg' src={aboutImg} alt="No Image Found" />
                </div>
            </div>
            </div>
            </section>
    )
}

export default About;