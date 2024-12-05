import Navbar from '../components/common/Navbar';
import Home from '../components/Home';
// import About from 'components/About';
import Food from 'components/Menu/Food';
import Drinks from 'components/Menu/Drinks';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Food />
      <Drinks />
    </div>
  );
}

export default HomePage;
