import { useState,useEffect } from 'react';
import './wordByWord.css';

const WordByWord = () => {

  const [texts, setTexts] = useState([]);
  const [textByWords, setTextByWords] = useState([]);
  const [wordsByMinute, setWordsByMinute] = useState(10);
  const [word, setWord] = useState('');
  const [textSelected, setTextSelected] = useState('');
  const  fonts =
  useEffect(() => {
    loadData();
     console.log ('word by word loaded');
     console.log ('texts',texts);

   }, []);


  const loadData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/activities/wordbyword');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('data',data)
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
    <>
      <div className="container">
        <h1>play word by word</h1>
      </div>
        <section className="text-container">
          {/* <div className="text">
            <h2 style={fontSelected}>{word}</h2>
          </div> */}
          <div className="button-container">
            <button onClick={playText}>PLAY</button>
            <button onClick={pauseText}>STOP</button>
          </div>
        </section>
    </>
  );
}
export default WordByWord;