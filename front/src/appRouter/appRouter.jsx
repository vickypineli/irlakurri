import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './../pages/home/home.jsx';
import Activities from './../pages/activities/activities.jsx'; 
import CardGame from '../pages/cardGame/cardGame.jsx';   
import ChainedWords from '../pages/chainedWords/chainedWords.jsx';
import CountLetters from '../pages/countLetters/countLetters.jsx';
import Words from '../pages/words/words.jsx';
import ColorMemory from '../pages/colorMemory/colorMemory.jsx';
import Error404 from '../pages/error404/error404.jsx'; 


function AppRouter () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities prop1="value1" prop2="value2" />} />
          <Route path="/card-game" element={<CardGame />} />
          <Route path="/chained-words" element={<ChainedWords />} />
          <Route path="/count-letters" element={<CountLetters />} />
          <Route path="/play-word-by-word" element={<Words />} />
          <Route path="/color-memory" element={<ColorMemory />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;