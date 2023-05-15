import React from 'react';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import './Laurels.css';

const AwardCrad = ({award: {imgUrl, title, subtitle}}) =>(
    <div className='app__laurels_awards-card'>
      <img src={imgUrl} alt='award'/>
      <div className='app__laurels_awards-card_content'>
        <p className='p__cornmorant' style={{color: '#DCCA87'}}>{title}</p>
        <p className='p__cornmorant'  style={{color: '#fff'}}>{subtitle}</p>
      </div>
    </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & recognition'/>
        <h1 className='headtext__cormorant'>Our Laurels</h1>
        <div className='app__laurels_awards'>
          {data.awards.map((award) => <AwardCrad award={award} key={award.title}/>)}
        </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.food} alt='laurels'></img>
    </div>
  </div>
);

export default Laurels;
