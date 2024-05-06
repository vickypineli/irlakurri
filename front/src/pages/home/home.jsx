import logo from '../../assets/img/irlakurri.png';

const Home = () => {
  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <div id="home-container">
      <h1>IRLA-KURRI</h1>
      <section>
        <article className="logo-box">
          <img src={logo} alt="Logo" />
        </article>
        <article className="login-box">
          <div className="login-date">
            <button onClick={handleLogin}>Login</button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
    
