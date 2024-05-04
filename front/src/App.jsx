import React from 'react'
import './App.css'

function App() {
  return (
    <div id="home-container">
      <h1>IRLA-KURRI</h1>
      <section>
        <article className="logo-box">
          {/* <img src={require('@/assets/img/irlakurri.png').default} alt="logo" /> */}
          {/* <img src={require('@/assets/react.svg')} alt="logo" /> */}
        </article>
        <article className="login-box">
          <div className="login-date">
            <label>Izena:</label>
            <input type="text" />
          </div>
          <div className="login-date">
            <label>Pasahitza:</label>
            <input className="input-internal" type="password" />
          </div>
          <div className="login-date">
            <button>SARTU</button>
          </div>
        </article>
      </section>
    </div>
  );
}
export default App
