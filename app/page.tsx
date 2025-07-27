import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="grain-effect">
      <div className="corporate-clean min-h-screen">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Values />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}