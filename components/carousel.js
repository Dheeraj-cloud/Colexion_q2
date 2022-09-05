import Carousel from 'react-bootstrap/Carousel';
const Carousels = ()=>{
    return (
        <Carousel>
      <Carousel.Item>
        <img
           width='500px'
           height='300px'
          className="d-block w-100"
          src='/1.png'
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           width='500px'
           height='300px'
          className="d-block w-100"
          src='/2.png'
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width='500px'
          height='300px'
          className="d-block w-100"
          src='/3.png'
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          width='500px'
          height='300px'
          className="d-block w-100"
          src='/4.png'
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          width='500px'
          height='300px'
          className="d-block w-100"
          src='/5.png'
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
    
    
      

    
}

export default Carousels