import Header from '../Header/Header';
import FlashCard from '../FlashCard/FlashCard';
import WordsList from '../WordsList/WordsList';
import CardsContainer from '../CardsContainer/CardsContainer';
import NoMatch from '../NoMatch/NoMatch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../../styles/App.css';
import '../../styles/scss/styles.scss'

const rows = [
  { "id": "11346", "english": "street", "transcription": "[ stri:t ]", "russian": "улица", "tags": "в городе", "tags_json": "[\"u043eu0432u043eu0449u0438\"]" },

  { "id": "11347", "english": "car", "transcription": "[ kɑ: ]", "russian": "автомобиль", "tags": "", "tags_json": "[\"\"]" },

  { "id": "11350", "english": "arm", "transcription": "[ ɑ:m ]", "russian": "рука", "tags": "", "tags_json": "[\"\"]" },

  { "id": "11354", "english": "air", "transcription": "[  eər ]", "russian": "воздух", "tags": "", "tags_json": "[\"\"]" },

  { "id": "11355", "english": "fox", "transcription": "[ fɒks ]", "russian": "лиса", "tags": "", "tags_json": "[\"\"]" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="header" />
        <Routes>
          <Route path='/' element={<WordsList rows={rows} />} />
          <Route path='/dictionary' element={<WordsList rows={rows} />} />
          <Route path='/learn' element={<CardsContainer className="cards" rows={rows}><FlashCard /></CardsContainer>} />
          <Route path='/quiz' />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
