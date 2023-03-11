import { useState } from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const images = [
    "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071__340.jpg",
    "https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/03/09/06/30/pool-2128578_960_720.jpg",
    "https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1668169064092-04dc2c657d85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1592555059503-0a774cb8d477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071__340.jpg",
    "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071__340.jpg",
    "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071__340.jpg",
    "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071__340.jpg",

]


const Gallery = () => {
    const [data,setData] = useState({image: '', i:0})

    const viewImage = (image,i) => {
        setData({ image, i })
        // console.log({img,i});
    }
    return (
        <>
            {/* console.log({data.img}); */}
            {data.image && 
                <div style={{
                    width: '100%',
                    height: '100vh',
                    background: 'black',
                    position: 'fixed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow:'hidden'
                }}>
                    {/* console.log({ data.img}); */}
                    <img src={data.image}  alt="img" style={{width: 'auto', maxWidth: '90%', maxHeight: '90%' 
                    }}/>
                </div>
            }
            <section id="gallery" className="gallerySection">
            <h2 className="d-flex align-items-center justify-content-center galleryHeader" style={{textDecoration: 'underline'}}>Gallery</h2>
            <div className="div" style={{padding:'10px'}}>
                
                <ResponsiveMasonry
            columnsCountBreakPoints={{350:2,750:2,900:3}}
        >
            <Masonry gutter="20px">
                {
                    images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block", cursor: 'pointer' }}
                            alt="img here"
                            onClick={()=> viewImage(image,i)}
                        />
                    ))
                }
            </Masonry>

                </ResponsiveMasonry>
                </div>
                </section>
            </>
    )
}

export default Gallery;