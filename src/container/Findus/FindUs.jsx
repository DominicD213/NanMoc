import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__cormorant' style={{color:"#DCCA87", margin:"2rem"}}>Locations</p>
        <p className='p__opensans'>5826 Fayetteville Rd. Durham, NC 27713</p>
        <p className='p__opensans'>5925 Farrington Rd. Chapel Hill, NC 27517</p>
        <p className='p__opensans'>1145 Falls River Avenue Raleigh, NC 27614</p>
        <p className='p__cormorant' style={{color:"#DCCA87", margin:"2rem"}}>Bakery</p>
        <p className='p__opensans'>5925 Farrington Rd. Chapel Hill, NC 27517</p>
        <p className='p__cormorant' style={{color:"#DCCA87", margin:"2rem"}}>Hours</p>
        <p className='p__opensans'>Sunday-Thursday: 11am - 9pm</p>
        <p className='p__opensans'>Friday-Saturday: 11am - 10pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;


<div className='app__wrapper-content'>
        <p className='p__cormorant' style={{color:"#DCCA*&", margin:"2rem"}}>Locations</p>
        <p className='p__opensans'>5826 Fayetteville Rd. Durham, NC 27713</p>
        <p className='p__opensans'>5925 Farrington Rd. Chapel Hill, NC 27517</p>
        <p className='p__opensans'>1145 Falls River Avenue Raleigh, NC 27614</p>
        <p className='p__cormorant' style={{marginBottom: '3rem'}}>Bakery</p>
        <p className='p__opensans'>5925 Farrington Rd. Chapel Hill, NC 27517</p>
        <p className='p__cormorant' style={{marginBottom: '3rem'}}>Hours</p>
        <p className='p__opensans'>Sunday-Thursday: 11am - 9pm</p>
        <p className='p__opensans'>Friday-Saturday: 11am - 10pm</p>
      </div>