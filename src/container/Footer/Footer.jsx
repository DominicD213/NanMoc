import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
      <div className="app__footer-links_logo">
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Nantucket Grill</h1>
        <p className='p__opensans'>Despite our flaws and imperfections, humanity has shown time and time again the capacity for kindness, compassion, and selflessness towards others.</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Nantucket. All Rights reserved.</p>
    </div>
  </div>

);

export default Footer;