import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Header, Main, Footer, Testimonial, About } from './container';
import AboutPage from './views/aboutpage/AboutPage';
import views from './views';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={views.about.path} render={() => <AboutPage />} />
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
