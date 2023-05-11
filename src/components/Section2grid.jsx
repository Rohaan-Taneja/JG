import React from 'react'
<link rel="stylesheet" href="index.css" />


const Section2grid = ( props) => {
    
  return (
    
    <div className='section2template'  data-aos="zoom-in" data-aos-duration="1000">
        <div className='iconpositioning'>{props.icon}</div>
        <span className='heading'>{props.heading}</span>
        <span className='description'>{props.desc}</span>
      
    </div>
  )
}

export default Section2grid
