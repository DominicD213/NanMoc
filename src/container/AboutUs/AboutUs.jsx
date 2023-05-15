import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.n} alt='n'/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Expectations</h1>
        <img src={images.spoon} alt='spoon' className='spoon__img'/>
        <p className='p__opensans'>Nantucket Grill prides itself on delivering top-notch service to every customer, ensuring that their dining experience is nothing short of exceptional. From the moment you step through the door, you'll be greeted by a friendly and attentive staff who will go above and beyond to make your visit unforgettable.</p>
        <div/>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife'/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='spoon' className='spoon__img'/>
        <p className='p__opensans'>After a career of opening successful restaurants across Massachusetts and winning the Boston Clam Chowder competition, Jerry Sullivan and his wife Jeanne moved to North Carolina to retire. However, they soon realized that they weren’t ready to leave the restaurant world behind. In 1997, they opened the Nantucket Café to provide the community with their special New England style of cooking.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
