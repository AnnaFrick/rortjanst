import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/ror.png" className="App-logo" alt="logo" />
      </header>
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
      <Footer />
    </div>
  );
}

export default App;
