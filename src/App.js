import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Nav from './Nav';
import Hero from './Hero';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Hero />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
