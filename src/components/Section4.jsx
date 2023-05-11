import React, { useEffect } from 'react'
import person1 from "../images/customer-review -images/person-1.jpeg"
import person2 from "../images/customer-review -images/person-2.jpeg"
import person3 from "../images/customer-review -images/person-3.jpg"
import person4 from "../images/customer-review -images/person-4.jpeg"

const Section4 = () => {

 

  useEffect(() => {
   
    const slide = document.getElementById("slide");

  }, []);

  const slide1 = () => {
    document.getElementById("slide").style.transform = 'translateX(0px)'

     // removing active class from rest of all the buttons
    document.getElementById('sb1').classList.remove("active");
    document.getElementById('sb2').classList.remove("active");
    document.getElementById('sb3').classList.remove("active");
    document.getElementById('sb4').classList.remove("active");
   
     // adding active class to current clicked btn
    document.getElementById('sb1').classList.add("active");
  }

  const slide2 = () => {
    document.getElementById("slide").style.transform = 'translateX(-60rem)'

    // removing active class from rest of all the buttons
    document.getElementById('sb1').classList.remove("active");
    document.getElementById('sb2').classList.remove("active");
    document.getElementById('sb3').classList.remove("active");
    document.getElementById('sb4').classList.remove("active");
  
    // adding active class to current clicked btn
    document.getElementById('sb2').classList.add("active");
  }

  const slide3 = () => {
    document.getElementById("slide").style.transform = 'translateX(-120rem)'

     // removing active class from rest of all the buttons
     document.getElementById('sb1').classList.remove("active");
     document.getElementById('sb2').classList.remove("active");
     document.getElementById('sb3').classList.remove("active");
     document.getElementById('sb4').classList.remove("active");
   
     // adding active class to current clicked btn
    document.getElementById('sb3').classList.add("active");
  }

  const slide4 = () => {
    document.getElementById("slide").style.transform = 'translateX(-180rem)'

     // removing active class from rest of all the buttons
     document.getElementById('sb1').classList.remove("active");
     document.getElementById('sb2').classList.remove("active");
     document.getElementById('sb3').classList.remove("active");
     document.getElementById('sb4').classList.remove("active");
   
     // adding active class to current clicked btn
    document.getElementById('sb4').classList.add("active");
  }



  return (
    <div className='section4'>
      
      <p className='section4heading1'>WHAT CUSTOMER SAYS</p>
      <p  className='section4heading2'>Recent Reviews</p>
      <hr className='hr_forsection4'  />

      <div className="s4container">
        <div className="indicator">
          <span className="btn active" id='sb1' onClick={slide1}></span>
          <span className="btn" id='sb2' onClick={slide2}></span>
          <span className="btn" id='sb3' onClick={slide3}></span>
          <span className="btn" id='sb4' onClick={slide4}></span>
        </div>

        <div className="testimonials">

          <div className='slide-row' id='slide'>

          <div className="slide-col">
          <div className="user-text">
            <p>We used Jaadu-Ghar to sell our home in <b>Louisville</b> last summer and it was outstanding.
            I've recommended the Jaadu-Ghar Real Estate Team to everyone I know. He's a true professional and a genuinely nice guy
            </p>
            <h3>Adam and Deidre S.</h3>
          </div>
          <div className="userimg">
            <img src={person1} alt="" />
          </div>
          </div>

          <div className="slide-col">
          <div className="user-text" >
          <p>We used Jaadu-Ghar to sell our home in <b>Tilak nagar</b> last summer and it was outstanding.
            I've recommended the Jaadu-Ghar Real Estate Team to everyone I know. He's a true professional and a genuinely nice guy
            </p>
            <h3>Dave and Kathy Rice</h3>
          </div>
          <div className="userimg">
            <img src={person2} alt="" />
          </div>
          </div>

          <div className="slide-col">
          <div className="user-text">
          <p>We used Jaadu-Ghar to sell our home in <b>janakpuri</b> last summer and it was outstanding.
            I've recommended the Jaadu-Ghar Real Estate Team to everyone I know. He's a true professional and a genuinely nice guy
            </p>
            <h3>Kamla-Harris</h3>
          </div>
          <div className="userimg">
            <img src={person3} alt="" />
          </div>
          </div>
  

          <div className="slide-col">
          <div className="user-text">
          <p>We used Jaadu-Ghar to sell our home in <b>khyala</b> last summer and he was outstanding.
            I've recommended the Jaadu-Ghar Real Estate Team to everyone I know. He's a true professional and a genuinely nice guy
            </p>
            <h3>Raju Tripathi</h3>
          </div>
          <div className="userimg">
            <img src={person4} alt="" />
          </div>
          </div>

          </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default Section4
