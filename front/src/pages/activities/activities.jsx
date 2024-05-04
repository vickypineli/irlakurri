import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para la navegación

const Activities = () => {
  const activities = [
    { name: "Hitzez Hitz", path: "/activities/word-by-word" },
    { name: "Irakur-Lagun", path: "/activities/play-word-by-word" },
    { name: "Silabak Zenbatu", path: "/activities/count-letters" },
    { name: "Hitz Kateatuak", path: "/activities/chained-words" },
  ];

  return (
    <div className="activities-container">
      <h1>JARDUERAK</h1>
      <section className="box-activities">
        {activities.map(({ name, path }) => (
          <Link key={path} to={path}>
            <button>{name}</button>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Activities;