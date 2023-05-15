

import React from 'react'
import {MdRestaurantMenu} from 'react-icons/md'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu , setToggleMenu] = React.useState(false);

  return(
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <p>Nantucket Grill</p>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#enu'>Menu</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
     </ul>
      <div className='app__navbar-order'>
        <a href="#book-table" className='p__opensans'>Order Cake</a>
        <div/>
        <a href='/' className='p__opensans'>Book a table</a>
      </div>
      <div className="app__navbar-smallscreen">
      <AiOutlineMenuUnfold color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
           <MdRestaurantMenu  fontSize={27} className="overlay__close" onClick = {() => setToggleMenu(false)}/>
          <ul className='app__navbar-smallscreen-links'>
          <li className='p__opensans'><a href='#home'>Home</a></li>
          <li className='p__opensans'><a href='#about'>About</a></li>
          <li className='p__opensans'><a href='#enu'>Menu</a></li>
          <li className='p__opensans'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
    )}
    </div>
  </nav>
  )
};


export default Navbar;
