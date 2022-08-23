import React, { useState } from 'react';

// import components
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';

// import pages
import About from './assets/components/pages/About';
import Portfolio from './assets/components/pages/Portfolio';


function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'portfolio':
        return <Portfolio />
      default:
        return <About />
    }
  }

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
