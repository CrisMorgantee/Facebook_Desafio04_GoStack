import React, { Component } from 'react';
import './styles.css';

import Logo from '../../assets/facebook.png';
import Avatar from '../../assets/cris.jpeg';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <img src={Logo} className='logo' />
        <a href='#' className='perf'>
          Meu Perfil
        </a>
        <img src={Avatar} className='avatar' />
      </header>
    );
  }
}

export default Header;
