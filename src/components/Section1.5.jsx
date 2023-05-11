import React from 'react'
import Section1_5template from '../components/Section1.5template'
import Properties from './section1_5(array)'


const Section1_5 = () => {

  const fresh = (property)=>{
    return <Section1_5template pimg={property.pimg} pname={property.pname} paddress={property.paddress} />


  }
  return (
    <div className='section1_5'>
      <hr className='line' />
      <div className='recent_listed' data-aos="fade-up" data-aos-duration="1000">Recent Listed properties</div>
      <div className='recent_listed_bleow_text' data-aos="fade-up" data-aos-duration="1000">Choose from over 1 million apartments, houses, condos, and townhomes for rent.</div>

      <div className='section1_5flex'>
        {
          Properties.map(fresh)
        }

      </div>

      
    </div>
  )
}

export default Section1_5
