import { Link } from 'react-router-dom';
import * as S from './styles';
import MenuIcon from 'assets/svg/icon-menu';

const Navbar = () => {
  return (
    <S.Container>
      <div>
        <Link to="/">
          <img src="/images/logo-plunge.png" alt="logo" />
        </Link>
      </div>
      <S.NavItemWrap>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/">menu</Link>
        </li>
        <li>
          <Link to="/">location</Link>
        </li>
      </S.NavItemWrap>
      <S.MenuIconWrapper>
        <MenuIcon />
      </S.MenuIconWrapper>
    </S.Container>
  );
};

export default Navbar;
