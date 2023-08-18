import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';
import { Header, Main, Footer, Testimonial, About } from './container';
import AboutPage from './views/aboutpage/AboutPage';
import views from './views';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/about' element={<AboutPage />} />
        {/* Define other routes here */}
      </Routes>
      </BrowserRouter>
      <Header />
      <Main />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}

export default App;
