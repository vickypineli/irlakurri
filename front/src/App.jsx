import logo from './assets/img/irlakurri.png';
import './App.css'
import Activities from './pages/activities/activities.jsx';
// import AppRouter from './appRouter/appRouter.jsx';

function App() {
  const handleClick = () => {
    console.log("hola");
  }

  return (
    <div id="home-container">
      <h1>IRLA-KURRI</h1>
      <section>
        <article className="logo-box">
          <img src={logo} alt="logo" />
        </article>
        <article className="login-box">
          {/* <div className="login-date">
            <label>Izena:</label>
            <input type="text" />
          </div>
          <div className="login-date">
            <label>Pasahitza:</label>
            <input className="input-internal" type="password" />
          </div> */}
          <div className="login-date">

            <button onClick={handleClick}>SARTU</button>
        
          </div>
        </article>
      </section>
   
    </div>
  );
}

export default App;
