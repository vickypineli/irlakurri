import logo from '../../assets/img/irlakurri.png';
import { Link } from 'react-router-dom'; 
const Home = () => {
  return (
    <div id="home-container">
      <h1>IRLA-KURRI</h1>
      <section>
        <article className="logo-box">
          <img src={logo} alt="Logo" />
        </article>
        <article className="login-box">
          <div className="login-date">
          <Link to="/activities">
              <button>sartu</button>
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
    
