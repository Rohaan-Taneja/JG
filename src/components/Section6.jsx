import React from 'react'
import facebook from "../images/footer/facebook.png"
import instagram from "../images/footer/instagram.png"
import twitter from "../images/footer/twitter.png"
import linkedin from "../images/footer/linkedin.png"

const Section6 = () => {
  return (
    <div className='section6'>
      <div className='section6-left'>
        <div className='aboutflex'>
          <p className='s6heading1'>About </p>
          <p className='s6heading1logo'>Jaadu-Ghar</p>
        </div>
        <p className='s6heading2'>Jaadu-Ghar is a full stack service provider for all real estate needs, with 15+<br /> services including home loans, pay rent, packers and movers, legal assistance,<br /> property valuation, and expert advice. As the largest platform for buyers <br /> and sellers of property to connect in a transparent manner, Jaadu-Ghar has an <br />  active base of over 15 lakh property listings.</p>
      </div>

      <div className='section6-right'>
    
          <div className='google_play'>
            <p >Get it on </p>
            <div>
            <i class="fa-brands fa-google-play fa-xl" style={{color:'white'}}> </i>
            <p>Google Play</p>
            </div>
         
          </div>

            <div className='app_store'>
              <p >Available on the </p>
              <div>
              <i class="fa-brands fa-apple fa-xl" style={{color:'white'}}></i>
              <p> app Store</p>
              </div>
            </div>

              <img className='logo' src={facebook} alt="" />
              <img className='logo' src={twitter} alt="" />
              <img className='logo' src={linkedin} alt="" />
              <img className='logo'src={instagram} alt="" />
      </div>
      
    </div>
  )
}

export default Section6
