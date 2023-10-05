import React from 'react';
import { Logo, Menu, StylesHeader } from './styles';
import Button from '../button/Button';

const Header = () => {
  return (
    <StylesHeader>
      <Logo>Finanças+</Logo>
      <nav>
        <Menu>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Quem Somos</a>
          </li>
          <li>
            <a href="">Entrar</a>
          </li>
          <li>
            <Button text={'Criar Conta'} />
          </li>
        </Menu>
      </nav>
    </StylesHeader>
  );
};

export default Header;
