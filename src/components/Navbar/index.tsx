import { useState } from 'react';
import * as S from './styles';
import MenuIcon from 'assets/svg/icon-menu';

const Navbar = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = () => {
    setShowHamburgerMenu((prev: boolean) => !prev);
  }

  return (
    <S.Container>
      <S.NavWrap>
        <h1 onClick={() => scrollToSection('about')}>
          <img src="/images/logo-plunge.png" alt="logo" />
        </h1>
        <S.NavItemWrap>
          <li onClick={() => scrollToSection('about')}>ABOUT</li>
          <li onClick={() => scrollToSection('menu')}>MENU</li>
          <li onClick={() => scrollToSection('contact')}>CONTACT</li>
        </S.NavItemWrap>
        <S.HamburgerMenuWrap onClick={handleMenuClick}>
          <MenuIcon />
          <S.MenuItemWrap style={{ display: showHamburgerMenu ? 'block' : 'none' }}>
            <li onClick={() => scrollToSection('about')}>ABOUT</li>
            <li onClick={() => scrollToSection('menu')}>MENU</li>
            <li onClick={() => scrollToSection('contact')}>CONTACT</li>
          </S.MenuItemWrap>
        </S.HamburgerMenuWrap>
      </S.NavWrap>
    </S.Container>
  );
};

export default Navbar;
