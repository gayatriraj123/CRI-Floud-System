import React from 'react';
import './Footer.css';
import cantact from '../Assest/cantact.png'
import facebook from '../Assest/facebook.png'
import website from '../Assest/website.png'

const Footer = () => {
  return (
    <div className='footer'>
         <div className='contact'>
            <img className='contact_img' src={cantact}/>
            <p>Toll free 1800 200 1234</p>
         </div>
        <div className='facebook'>
            <img className='facebook_img' src={facebook}/>
            <p>www.facebook.com/cripumps</p>
        </div>
        <div className='website'>
            <img className='website_img' src={website}/>
            <p>www.crigroups.com</p>
        </div> 
    </div>
  )
}

export default Footer
