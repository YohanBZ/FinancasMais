import React from 'react';
import s from './header.module.css';
import Button from '../button/Button';
import { Plus } from '@phosphor-icons/react';

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.logo}>
        Finanças+
        {/* <Plus size={32} weight="bold" /> */}
      </h1>
      <nav>
        <ul className={s.menu}>
          <li>
            <a href="" className={s.link}>
              Home
            </a>
          </li>
          <li>
            <a href="" className={s.link}>
              Quem Somos
            </a>
          </li>
          <li>
            <a href="" className={s.link}>
              Entrar
            </a>
          </li>
          <li>
            <Button text={'Criar Conta'} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
