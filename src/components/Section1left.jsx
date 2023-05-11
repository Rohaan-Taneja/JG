import React from 'react'
import { useEffect } from 'react'
import oldladyimg from "../images/old-lady.gif"

const Section1left = () => {

    useEffect(()=>{
        const text2=document.getElementById('animated-text')

    const textload =()=>{

    setTimeout(()=>{

        text2.textContent="BUY"
        text2.style.color="green"
    }, 0)

    setTimeout(()=>{

        text2.textContent="SELL"
        text2.style.color="red"
       
    },1500)

    setTimeout(()=>{

        text2.textContent="RENT"
        text2.style.color="rgb(58,6,132)"
    },3000)

    
}
textload();
setInterval(textload ,4500)
    } ,[])

  return (
    <div className='leftpart_createfor1030px_mediaquery'>
    <div  >
        <div className='container'>
            <span className=' text first-text'>Property</span>
            <span className='text sec-text' id='animated-text' ></span>
  
        </div>
        <div className='text-after-textanimation'>
            <span className='text-1'> Find your dream home,</span>
            <span className='text-2'>and say goodbye to your dream of</span>
            <div className='text-and-oldlady'>
            <span className='text-3' >"Early Retirement" </span>
            <span>
                <img className='old-lady' src={oldladyimg} alt="" />
                
                 </span>
            </div>
            {/* old women pareshaan hogi , aisi animation banani hai , left to write move krr rhi hogi */}
        </div>
    </div>
    </div>
  )
}
export default Section1left
