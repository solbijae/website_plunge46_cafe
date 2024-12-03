import { Link } from 'react-router-dom';
import * as S from "./styles";

function Navbar() {
  return (
    <S.Container>
      <div>
        <Link to="/">
          <img src="/images/logo-plunge.png" alt="logo" />
        </Link>
      </div>
      <div>
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
      </div>
    </S.Container>
  );
}

export default Navbar;
