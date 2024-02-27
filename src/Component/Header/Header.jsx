import React from 'react'
import './Header.css';
import logo from '../Assest/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={logo}></img>
    </div>
  )
}

export default Header
