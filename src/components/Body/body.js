import m1 from '../../assets/nm1.jpg'
import m2 from '../../assets/nm2.jpg'
import p1 from '../../assets/products/p1.jpg'
import p2 from '../../assets/products/p2.jpg'
import p3 from '../../assets/products/p3.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import '../../body.css'

const products = [p1, p2, p3, p1, p2, p1, p2, p3, p1, p2]

const Body = () => {
  return (
    <div className='body'>
      <div className='carousel'>
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
          <div>
            <img src={m1} />
          </div>
          <div>
            <img src={m2} />
          </div>
        </Carousel>
      </div>
      <div className='products'>
        <h1 style={{ letterSpacing: '6px', color: '#3e4152' }}>
          DEALS OF THE DAY
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map((each) => {
            return (
              <div style={{ padding: '20px' }}>
                <img src={each} width='250px' alt='' />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Body
