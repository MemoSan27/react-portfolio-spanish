import { useState } from 'react';
import './App.css'
import Background from './components/ui/Background'
import Header from './components/ui/Header';
import About from './components/ui/About';
import SmMenu from './components/ui/SmMenu';
import BotonDownload from './components/ui/BotonDownload';
import Skills from './components/ui/Skills';
import Portafolio from './components/portafolio/Portafolio';
import Contact from './components/contacto/Contact';
import Footer from './components/ui/Footer';



function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <Background />
      <SmMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <header id='header' className='header'>
        <nav className='nav'> 
            <div className='nav__autor-name container'> 
                <a onClick={() => setIsOpen(false)}  href='#header' className='nav__autor-link'>
                    <h2 className='nav__autor'>Guillermo Sandoval</h2>
                </a>
    
                <div className='nav__menu'>
                    <a href='#about' className='nav__link'> Sobre mí </a>
                    <a href='#skills' className='nav__link'> Mis Skills </a>
                    <a href='#portafolio' className='nav__link'> Portafolio </a>
                    <a href='#contacto' className='nav__link'> Contacto </a>
                </div>
    
                <i onClick={() => setIsOpen(!isOpen)} className='iconShowMenu bx bx-menu'></i>
            </div>
          </nav>
          <Header />
      </header>

      <main className='main'>
        <BotonDownload />
        <About />
        <Skills />
        <Portafolio />
        <Contact />
      </main>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
