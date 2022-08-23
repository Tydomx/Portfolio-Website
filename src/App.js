import React, { useState } from 'react';

// import components
import Footer from './assets/components/Footer';
import Nav from './assets/components/Nav';


// import pages
import About from './assets/components/pages/About';
import Portfolio from './assets/components/pages/Portfolio';
import Contact from './assets/components/pages/Contact';
import Resume from './assets/components/pages/Resume';


function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'portfolio':
        return <Portfolio />
      case 'contact':
        return <Contact />
      case 'resume':
        return <Resume />
      default:
        return <About />
    }
  }

  return (
    <div>
      <Nav
        currentPage={currentPage}
        changePage={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
