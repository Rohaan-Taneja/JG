import React from 'react'


const Section1_5template = ( props) => {

   
  return (
    <div className='section1_5template' data-aos="fade-up" data-aos-duration="1000"
    >
        

        <div className='pimg' >{props.pimg}</div>
        <div className='pname'>{props.pname}</div>
        <div className='paddress'>{props.paddress}</div>
      
    </div>
  )
}

export default Section1_5template
