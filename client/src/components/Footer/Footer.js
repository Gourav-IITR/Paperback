import React from 'react'
import './Footer.css';
import {FaHeart} from 'react-icons/fa'
import footer from './footer.png'

const Footer = () => {
    return (
        <div className="footer">
        <div className='footerContainer'>
        
        <img src={footer}/>
        
        </div>
        <div className="copyright">
             Copyright &#169;2021 All rights reserved | Made with <span className="heart-icon"><FaHeart/></span> by <a href="https://github.com/saurabhhere" target="_blank">Saurabh Gupta</a>
        </div>
        </div>
    )
}

export default Footer
