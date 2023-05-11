import React from 'react'
import Section2grid from './Section2grid'
import Qualities from './Section2gridcontent(array)'

const quality =(qual)=>
{
    
  return <Section2grid icon={qual.icon} heading={qual.heading} desc={qual.description} />

}

const Section2 = () => {

   
  return (
    <div className='section-2' >
        <h1 className='why_jaadughar' data-aos="fade-up" data-aos-duration="1000">Why Jaadu-GHAR <i className="fa-solid fa-question fa-fade"></i></h1>
        <p className='why_jaadughar_ans' data-aos="fade-up" data-aos-duration="1200" >Making buying houses easier and<br/> more convenient for you.</p>

        <div className='section2flex'>

            {Qualities.map(quality)}

        </div>
      
    </div>
  )
}

export default Section2
