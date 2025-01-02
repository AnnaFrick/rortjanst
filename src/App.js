import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="/ror.png" className="App-logo" alt="logo" />
          <nav className="App-nav">
            <Link to="/">Hem</Link>
            <Link to="/about">Om företaget</Link>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App-body">
                <h1>Peter Engström Rörtjänst AB</h1>
                <h2>Utför VS-jobb hos dig!</h2>
                <p className="App-description">
                  Peter Engström Rörtjänst AB utför VS-jobb i din bostad som installation/justering av värmesystem och värmepump, 
                  renovering/nybyggnation av badrum, kök och tvättstuga. Alltid med noggrannhet och kvalitet enligt 
                  <strong> SÄKER VATTEN-certifiering</strong>. Med ROT-subvention.
                </p>
                <img src="/sakervatten.png" height={350} className="App-certification" alt="Säker Vatten Certification" />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
