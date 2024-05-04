import logo from './assets/img/irlakurri.png';
import './App.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Activities from './pages/activities/activities.jsx'; // Ajusta la ruta según la ubicación real de tu archivo Activities.jsx

function App() {
  return (
    <Router>
      <div id="home-container">
        <h1>IRLA-KURRI</h1>
        <section>
          <article className="logo-box">
            <img src={logo} alt="logo" />
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
              {/* Utiliza el componente Link para dirigirte a la página de actividades */}
              <Link to="/activities">
                <button>SARTU</button>
              </Link>
            </div>
          </article>
        </section>

        {/* Configura las rutas de la aplicación */}
        <Switch>
          <Route path="/activities">
            <Activities />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

