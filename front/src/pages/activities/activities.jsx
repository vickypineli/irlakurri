
import LinkButton from '../../components/linkButton';

const Activities = () => {
  return (
    <div className="activities-container">
      <h1>JARDUERAK</h1>
      <section className="box-activities">
        <LinkButton to="/card-game" text="JUEGO DE CARTAS" />
        <LinkButton to="/chained-words" text="PALABRAS ENCADENADAS" />
        <LinkButton to="/count-letters" text="CUENTA LETRAS" />
        <LinkButton to="/play-word-by-word" text="PALABRA A PALABRA" />
        <LinkButton to="/color-memory" text="COLOR BRAIN" />    
        <LinkButton to="/word-by-word" text="PALABRA A PALABRA" />
        <LinkButton to="/" text="CERRAR SESION" />
      </section>
    </div>
  );
};

export default Activities;