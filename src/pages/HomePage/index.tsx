import * as S from './styles';

import Navbar from '../../components/Navbar';
import Home from '../../components/Home';
// import About from 'components/About';
import Food from 'components/Menu/Food';
import Drinks from 'components/Menu/Drinks';
import Contact from 'components/Contact';

function HomePage() {
  return (
    <div>
      <Navbar />
      <S.Container>
        <Home />
      </S.Container>
      <S.Container>
        <Food />
        <Drinks />
      </S.Container>
      <Contact />
    </div>
  );
}

export default HomePage;
