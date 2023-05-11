import React from 'react'
<link rel="stylesheet" href="index.css" />


// hello
const Navbar = () => {
  return (

    <div  >
        <div className='navbar' id='navvid'>
            <a href="">
                <h1 className='logo-name'>Jaadu_Ghar</h1>
            </a>

            <ul>
                <li>
                    <a href="">
                        About
                    </a>
                </li>
                <li>
                    <a href="">
                        Properties for sale
                    </a>
                </li>
                <li>
                    <a href="">
                        just sold
                    </a>
                </li>
                <li>
                    <a href="">News</a>
                </li>
                <li>
                <button className='contact-agent'>Contact Agent</button>
                </li>

                
            </ul>
            
            {/* mobile view buttons */}
            <div className='mobile-nav-bttn' id='menuid' onClick={show}>
                <h1 className='mobile-nav-icon-menu'>☰</h1>
                <h1 className='mobile-nav-icon-cross'>&#10006;</h1>

            </div>
        </div>
        
 
    </div>
  )
}
const show = () => {
    const nav = document.getElementById("navvid")
    nav.classList.toggle("active");
};


export default Navbar
