import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Announcements from './components/Announcements';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="grain-effect">
      <div className="corporate-clean min-h-screen">
        <Header />
        <Hero />
        <About />
        <Products />
        <Services />

        <Announcements />
     
        <Team />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}