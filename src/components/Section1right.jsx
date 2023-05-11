import React from 'react'

import constructorgif from "../images/constructorgif.gif"
import constructorimg from "../images/constructorimg3.png"
import housegif from "../images/house.gif" 
import houseimg from "../images/houseimg4.png"



  const Construct = ()=>{
    const gif = document.getElementById("c-animation")
    const bttn = document.getElementById("id_for_removng_bttn")
    const emptyd = document.getElementById("emptydiv")
    
    setTimeout(()=>{
      gif.src=constructorgif 
      bttn.remove();  
      const di=document.createElement("div")
      di.innerHTML = 'Please wait Constructing &nbsp;<i class="fa-solid fa-ellipsis fa-beat-fade"></i> ';
      di.id="your_dream_house"
      emptyd.appendChild(di)  
    },0)

    


    setTimeout(()=>{
      gif.src=housegif
      gif.classList.add("house-gif")
      bttn.remove(); 
    },1500)

    setTimeout(()=>{
      gif.src=houseimg
      bttn.remove();
      const di=document.getElementById("your_dream_house") 
      di.innerHTML = 'Your House is ready';
      emptyd.appendChild(di)
    },5500)



  }



const Section1right = () => {
  return (
    <div className='sec1_right'>

      <div className='section1right' id='section1rightpart'>
        <img className="construct_animation" id='c-animation' src={constructorimg}  alt="" />
        <i class="fa-solid fa-square-exclamation fa-beat">

          <button className='construct_house_bttn' id='id_for_removng_bttn' onClick={Construct}>Construct your &nbsp; 

        <i class="fa-sharp fa-solid fa-house fa-flip"></i> </button></i>
        
        <div id='emptydiv'>h</div>
      </div>

    </div>
   
  )
}

export default Section1right
