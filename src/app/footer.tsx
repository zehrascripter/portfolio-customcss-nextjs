import Link from 'next/link';
import React from 'react';
import { IoLogoYoutube } from 'react-icons/io';
import Image from 'next/image';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <a className="footer-logo">
            <Image src="/accets/images/logo.png" alt="Logo" width={100} height={100} className="logo" />
            <span className="footer-title">Zehra Portfolio</span>
          </a>
          <span className="social-links">
            <Link target="_blank" href="https://www.youtube.com/channel/UCSdwo6rSdhEGakIp16XmAJg" className="social-icon">
              <IoLogoYoutube className="youtube-icon" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
