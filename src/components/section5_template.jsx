import React from 'react'

const Section5_template = (props) => {
  return (
    <div className='section5template'>
        <div className='s5pimg'>{props.pimg}</div>
        <div className='s5pname'>Tranquil Retreat</div>
        <div className='s5paddress'> in {props.paddress}</div>
        <div className='s5pprice'>{props.pprice} Rs/month</div>
        
      
    </div>
  )
}

export default Section5_template
