import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import AboutMe from './components/AboutMe';
import Projects from './components/MyCreations';
import Contact from './components/Contact';
import Resume from './components/Resume'
import Footer from './components/Footer'


const styles= {
  minHeight: '100%'
}
 function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'My Creations') {
      return <Projects />;
    }
    if (currentPage === 'Resume'){
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
     
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App