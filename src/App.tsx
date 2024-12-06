import { ViewHeight, Section } from 'styles/StyleModule';
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

      <Section id="about">
        <ViewHeight>
          <Home />
        </ViewHeight>
      </Section>

      <Section id="menu">
        <Food />
        <Drinks />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

      <Footer />
    </div>
  );
}

export default App;
