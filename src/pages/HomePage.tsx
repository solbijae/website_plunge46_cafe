import Navbar from '../components/common/Navbar';
import Home from '../components/Home';
// import About from 'components/About';
import Food from 'components/Menu/Food';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Food />
    </div>
  );
}

export default HomePage;
