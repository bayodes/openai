import React, { useState } from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/GPT-3.svg'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className='gpt3__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#whatgpt3">What is GPT?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>

      <div className='gpt3__navbar-sign '>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      {/* <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLin color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
      </div> */}
    </div>
  )
}

export default Navbar