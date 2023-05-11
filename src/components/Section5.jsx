import React, { useState, useEffect } from 'react';
import Section5_template from './section5_template';

const Section5 = () => {
  const [propertiess, setPropertiess] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '948ee9be40msh88ee412f08632cap11e453jsna6a4347d27ce',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    };
    
    fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4', options)
    .then(response => response.json())
    .then(response => {
      const list = response.hits;
      setPropertiess(list);
    })
    .catch(err => console.error(err));    
  }, []);

  return (
    <div className='section5'>
      <hr className='hr_forsection5' /> 
      <p className='section5-heading' data-aos="fade-up" data-aos-duration="800">Rental Homes for Everyone</p>
      <span className='section5-heading2' data-aos="fade-up" data-aos-duration="800">Explore from Apartments,<br /> builder floors, villas and more</span>
        <div className='section5flex'>
          {propertiess.map((property) => (
        
            <Section5_template
              pimg={<img src={property.coverPhoto.url} style={{width: 30 + 'rem' , height: 20 + 'rem'}}></img>}
              paddress={property.location[0].name}
              pprice={property.price}
             
          
            />))
          }
        </div>
    </div>
  );
};

export default Section5;
