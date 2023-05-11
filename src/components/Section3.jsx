import React from 'react'
import trophy from "../images/trophy.png"
import bulb from "../images/bulb.png"
import heart from "../images/heart.png"
import bag from "../images/bag.png"

const Section3 = () => {
  return (
    <div className='section3'>
      <hr className='hr_forsection3' />
        <div className='section3_heading'  data-aos="fade-up" data-aos-duration="1000">our Awards</div>
        <div className='section3_heading2' data-aos="fade-up" data-aos-duration="1000">over 1,24,000+ Happy User Being With Us Still <br /> They Love Our Services</div>
        <div className='section3_flex'>
          
          <div  data-aos="slide-right" data-aos-duration="1000">
            <div className='s3logo' > <img src={trophy} alt="" style={{ height: '6rem' }} ></img></div>
            <div className='s3number'> 32 M</div>
            <div className='s3award'>IITA Green Award</div>
          </div>

          <div data-aos="slide-right" data-aos-duration="1000">
            <div className='s3logo'> <img src={bag} alt="" style={{ height: '6rem' }} ></img></div>
            <div className='s3number'>42 M</div>
            <div className='s3award'> Blue Burmin Award</div>
          </div>
          <div  data-aos="slide-left" data-aos-duration="1000">
            <div className='s3logo'> <img src={heart} alt="" style={{ height: '6rem' }} ></img></div>
            <div className='s3number'>51 M</div>
            <div className='s3award'>Mimo XII Award</div>
          </div>
          <div data-aos="slide-left" data-aos-duration="1000">
            <div className='s3logo'> <img src={bulb} alt="" style={{ height: '6rem' }} ></img></div>
            <div className='s3number'>42 M</div>
            <div className='s3award'> Australian UGC Award</div>
          </div>
          
        </div>
      
    </div>
  )
}

export default Section3
