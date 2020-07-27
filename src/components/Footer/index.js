import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
      <img className="Logo" src={Logo} alt="AdriFlix logo"/>
      </a>
      <p>
        Site feito na #ImersãoReact da 
        {' '}
        <a href="https://www.alura.com.br/">
          Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
