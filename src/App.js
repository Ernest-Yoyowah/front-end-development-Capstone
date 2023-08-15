// App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Header, Main, Footer, Testimonial, About } from './container';
import AboutPage from './views/aboutpage/AboutPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/aboutpage" element={<AboutPage />} />
        {/* Define other routes here */}
      </Routes>
      <Header />
      <Main />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}

export default App;
