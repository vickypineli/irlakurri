import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './../pages/home/home.jsx';
import Activities from './../pages/activities/activities.jsx'; 
import CardGame from '../pages/cardGame/cardGame.jsx';   
import ChainedWords from '../pages/chainedWords/chainedWords.jsx';
import CountLetters from '../pages/countLetters/countLetters.jsx';
import Words from '../pages/words/words.jsx';
import ColorMemory from '../pages/colorMemory/colorMemory.jsx';


function AppRouter () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/card-game" element={<CardGame />} />
          <Route path="/chained-words" element={<ChainedWords />} />
          <Route path="/count-letters" element={<CountLetters />} />
          <Route path="/play-word-by-word" element={<Words />} />
          <Route path="/color-memory" element={<ColorMemory />} />
          <Route path="*" element={
            <>
             <h1> ERROR 404</h1>
             <p>La pestaña solicitada no existe</p>
            </>
            } />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;