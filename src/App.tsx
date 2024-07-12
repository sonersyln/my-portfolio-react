import React, { useEffect, useState } from 'react'
import './index'
import './index.css';
import Hero from './components/Welcome/Hero'
import MobileNav from './components/Navbar/MobileNav'
import Nav from './components/Navbar/Nav'
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/AboutMe/About'
import Services from './components/MyServices/Services'
import Skils from './components/EducationSkill/Skils'
import Projects from './components/Projects/Projects'
import Testimonial from './components/ReferenceReview/Testimonial'
import Footer from './components/Footer/Footer'



const App = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    AOS.init({
      disable: false,
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
    <div>
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      <Hero />
      <div className="relative z-[30]">
      </div>
        <div id="aboutSection">
          <About />
        </div>
        <div id="servicesSection">
          <Services />
        </div>
        <Skils />
        <div id="projectSection">
          <Projects />
        </div>
        <Testimonial />
        <div id="footerSection">
          <Footer />
        </div>
      
        
    </div>
  </div>
  )
}

export default App