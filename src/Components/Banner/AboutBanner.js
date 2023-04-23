import React from 'react';
import ImgBannerAbout from '../../assets/BanniereAbout.jpg';

const AboutBanner = () => {
    return (
        <div className='banner'>
            <img src={ImgBannerAbout} alt="Kasa A propos"  />
            <h1> chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default AboutBanner;