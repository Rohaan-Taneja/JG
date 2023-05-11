import React from "react";
import first from "../images/1.png"
import second from "../images/2.png"
import third from "../images/3.png"
import forth from "../images/4.png"
import fifth from "../images/5.png"
import sixth from "../images/6.png"


const Qualities = [
    {
        icon: <img src= {first} alt=""style={{height: 10 + 'rem' }} ></img>,
        heading:"Experienced Real Estate Professionals",
        description:"Our team of experienced real estate professionals has been serving clients in the area for years, providing expert guidance and exceptional customer service to help them find their dream homes or sell their properties."
    },
    {
        icon:  <img src= {second} alt=""style={{height: 10 + 'rem' }} ></img>,
        heading:"Diverse Property Portfolio",
        description: "We have a diverse portfolio of properties to suit every taste and budget, from cozy starter homes to luxurious estates. Our properties are carefully selected to ensure that our clients find the perfect fit for their lifestyle and preferences."
    },

    {
        icon: <img src= {third} alt=""style={{height: 10 + 'rem' }} ></img>,
        heading:"Personalized Service",
        description:"Our personalized service approach ensures that each client receives customized attention and support throughout the buying or selling process. We listen carefully to their needs and work tirelessly to help them achieve their goals."
    },

    {
        icon: <img src= {forth} alt=""style={{height: 10 + 'rem' }} ></img>,
        heading: "Innovative Marketing Strategies",
        description :" Our innovative marketing strategies are designed to give our clients maximum exposure and help them sell their properties quickly and at the best possible price. We use the latest technology and social media platforms to reach a wide audience and generate interest in our listings."
    },

    {
        icon:  <img src= {fifth} alt=""style={{height: 10 + 'rem' }} ></img>,
        heading:"Seamless Transaction Process" ,
        description:"Our seamless transaction process is designed to make buying or selling a property as easy and stress-free as possible. From the initial consultation to closing, we handle all the details, ensuring that our clients have a smooth and hassle-free experience."
    },

    {
        icon:  <img src= {sixth} alt=""style={{height: 10 + 'rem' }} ></img>,
        heading:"Strong Local Connections",
        description:"Our strong local connections and network give our clients access to the best properties in the area and the inside scoop on local market trends. We use our local expertise to provide our clients with valuable insights and guidance that can help them make informed decisions."
    }
]

export default Qualities