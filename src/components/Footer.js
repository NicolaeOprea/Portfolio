import React from 'react';
import {FaFacebook, FaInstagram,FaLinkedin,FaGithub,FaTwitter} from "react-icons/fa"



function Footer() {
  return (
    <div className='footer'>
        <div>
        <FaInstagram className='icon'/>
        <a href="https://www.linkedin.com/feed/" target={"_blank"}><FaLinkedin className='icon'/></a>
        <a href="https://www.facebook.com/home.php" target={"_blank"}><FaFacebook className='icon'/></a>
        <a href=""><FaGithub className='icon'/></a>
        
        </div>
        <p> &copy; 2022 nicolae.com</p>
    </div>
  )
}

export default Footer