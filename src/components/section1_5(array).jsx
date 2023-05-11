import React from "react";
import house1 from "../images/h1.jpg";
import house2 from "../images/h2.jpg";
import house3 from "../images/h3.jpg";

const Properties = [
  {
    pimg: <img src={house1} alt="House 1" style={{ height: '20rem' ,width: '25vw' }} />,
    pname: "Elevate 1",
    paddress: "123 Main St, Anytown, USA"
  },
  {
    pimg: <img src={house2} alt="House 2" style={{ height: '20rem' ,width: '25vw' }} />,
    pname: "Elevate 2",
    paddress: "456 Oak St, Othertown, USA"
  },
  {
    pimg: <img src={house3} alt="House 3" style={{height: '20rem' ,width: '25vw' }} />,
    pname: "Elevate 3",
    paddress: "789 Elm St, Yetanothertown, USA"
  }
];

export default Properties;