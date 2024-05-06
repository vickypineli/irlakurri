import { useState, useEffect } from 'react';

const WordByWord = () => {
  const [word, setWord] = useState('');
  const [wordsByMinute, setWordsByMinute] = useState(10);
  const [textByWords, setTextByWords] = useState([]);
  const [texts, setTexts] = useState([]);
  const [textSelected, setTextSelected] = useState('');
  const [fontSelected, setFontSelected] = useState('');


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/activities/wordbyword');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTexts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const pauseText = () => {
    clearInterval();
  };

  const playText = () => {
    setTextByWords(textSelected.split(' '));
    let item = 0;
    setInterval(() => {
      setWord(textByWords[item]);
      item += 1;
    }, 60000 / wordsByMinute);
  };

  return (
    <div className="container">
      <div>
        <h1>HITZEZ-HITZ</h1>
      </div>
      <section className="text-container">
        <div className="text">
          <h2 style={fontSelected}>{word}</h2>
        </div>
        <div className="button-container">
          <button onClick={playText}>PLAY</button>
          <button onClick={pauseText}>STOP</button>
        </div>
      </section>
      <section className="options">
        <div className="option-item">
          <label> Testua: </label>
          <select value={textSelected} onChange={(e) => setTextSelected(e.target.value)}>
            {texts.map((text) => (
              <option key={text.text} value={text.text}>{text.language}</option>
            ))}
          </select>
        </div>
        <div className="option-item">
          <label> Letra-tipo: </label>
          <select value={fontSelected} onChange={(e) => setFontSelected(e.target.value)}>
            <option value="escolar" style={{ fontFamily: 'escolar', color: 'blue' }}>ESCOLAR</option>
            <option value="dislexia" style={{ fontFamily: 'dislexia', color: 'green' }}>DISLEXIA</option>
            <option value="sarakanda" style={{ fontFamily: 'sarakanda', color: 'red' }}>SARAKANDA</option>
          </select>
        </div>
        <div className="option-item">
          <div className="range">
            <label> Hitz-min:</label>{wordsByMinute}
          </div>
          <input className="slider" type="range" max="120" min="30" step="10" value={wordsByMinute} onChange={(e) => setWordsByMinute(e.target.value)} />
          <datalist id="tickmarks">
            <option value="30"></option>
            <option value="60"></option>
            <option value="90"></option>
            <option value="120"></option>
            <option value="150"></option>
          </datalist>
        </div>
      </section>
      <textarea
        value={textSelected}
        placeholder="Aldatu testua hemen....."
        style={fontSelected}
        onChange={(e) => setTextSelected(e.target.value)}
      />
    </div>
  );
};

export default WordByWord;
