import React from 'react';
import "../Style/about.css";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import AboutBanner from '../Components/Banner/AboutBanner';
import Wrapper from '../Components/Wrapper/Wrapper';



const About = () => {
    return (
        <>
           <Navbar/>
            <AboutBanner/>
         <div className='about_global'>
              <Wrapper/>
              <Wrapper/>
              <Wrapper/>
              <Wrapper/>
        </div> 
        <Footer/>
            
            </>
    );
};

export default About;