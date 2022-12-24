import Header from '../Header/Header';
import Card from '../Card/Card';
import WordsList from '../../pages/WordsList';
import CardsContainer from '../../pages/CardsContainer';
import NoMatch from '../../pages/NoMatch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../../styles/App.css';
import '../../styles/scss/styles.scss'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="header" />
        <Routes>
          <Route path='/' element={<WordsList />} />
          <Route path='/dictionary' element={<WordsList />} />
          <Route path='/learn' element={<CardsContainer className="cards" ><Card /></CardsContainer>} />
          <Route path='/quiz' />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
