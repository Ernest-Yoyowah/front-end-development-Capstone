import './App.css';
import {Routes, Route} from 'react-router-dom';

import { Navbar} from './components';
import { Header, Main, Footer, Testimonial, About } from './container';

function App() {
  return (
    <>
   
    <Navbar />
    <Header />
    <Main />
    <Testimonial />
    <About />
    <Footer />
    </>
  );
}

export default App;
