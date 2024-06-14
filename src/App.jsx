import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">molecule</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#positions">Open positions</a>
          <a href="#blog">Blog</a>
          <a href="#template">Template</a>
          <button className="buy-now">Buy now</button>
        </nav>
      </header>
      <main className="main">
        <section className="hero">
          <h1>
            Molecule is a SaaS marketing template that's <span className="highlight">easy to modify</span>.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <form className="signup-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Sign Up</button>
          </form>
          <p className="terms">
            By clicking Sign Up you're confirming that you agree with our <a href="#terms">Terms and Conditions</a>.
          </p>
        </section>
        <section className="images">
          <div className="image image1"></div>
          <div className="image image2"></div>
          <div className="image image3"></div>
        </section>
        <section className="logos">
          <h2>Used by the leading SaaS companies of tomorrow.</h2>
          <div className="logo-list">
            <div className="logo-item">hooq</div>
            <div className="logo-item">Studio Cai</div>
            <div className="logo-item">STOCKHOLM</div>
            <div className="logo-item">Craft Industries</div>
            <div className="logo-item">gkdc</div>
            <div className="logo-item">glassware</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
  