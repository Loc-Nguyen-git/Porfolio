import { BrowserRouter as Router } from 'react-router-dom';

import {About, Contact, Experience, Hero, Navbar, Tech, Works, } from './components';

const App = () => {
    return (
    <Router>
      <div className='relative z-0 bg-orange-200'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className='relative z-0'>
          <Contact />          
        </div>
      </div>
    </Router>  
  )
}

export default App;
