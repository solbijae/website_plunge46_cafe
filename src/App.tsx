import { ViewHeight } from 'styles/StyleModule';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Food from './components/Menu/Food';
import Drinks from './components/Menu/Drinks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />

      <section id="about">
        <ViewHeight>
          <Home />
        </ViewHeight>
      </section>

      <section id="menu">
        <Food />
        <Drinks />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
