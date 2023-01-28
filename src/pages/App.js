import Header from '../components/Header/Header';
import WordsList from './WordsList';
import CardsContainer from './CardsContainer';
import NoMatch from './NoMatch';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import '../styles/scss/styles.scss'


function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Routes>
        <Route path='/' element={<WordsList />} />
        <Route path='/dictionary' element={<WordsList />} />
        <Route path='/learn' element={<CardsContainer className="cards" />} />
        <Route path='/quiz' />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
