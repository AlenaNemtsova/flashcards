import { Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import WordsList from '../../pages/wordsList/WordsList';
import CardsContainer from '../../pages/cardsContainer/CardsContainer';
import NoMatch from '../../pages/noMatch/NoMatch';

import './App.scss';


function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Routes>
        <Route path='/' element={<WordsList />} />
        <Route path='/dictionary' element={<WordsList />} />
        <Route path='/learn' element={<CardsContainer />} />
        <Route path='/quiz' />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
