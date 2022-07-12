import './App.css';
import Header from './components/Header';
import FlashCard from './components/FlashCard';
import WordsList from './components/WordsList';
import CardsContainer from './components/CardsContainer';
import NoMatch from './components/NoMatch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './assets/styles/mainStyles.scss'; переменные не подключаются

const rows = [
  { "id": "11346", "english": "street", "transcription": "[ stri:t ]", "russian": "улица", "tags": "в городе", "tags_json": "[\"u043eu0432u043eu0449u0438\"]" },

  {"id":"11347","english":"car","transcription":"[ kɑ: ]","russian":"автомобиль","tags":"","tags_json":"[\"\"]"},

  {"id":"11350","english":"arm","transcription":"[ ɑ:m ]","russian":"рука","tags":"","tags_json":"[\"\"]"},
  
  {"id":"11354","english":"air","transcription":"[  eər ]","russian":"воздух","tags":"","tags_json":"[\"\"]"},
  
  {"id":"11355","english":"fox","transcription":"[ fɒks ]","russian":"лиса","tags":"","tags_json":"[\"\"]"},
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="header"/>
        <Routes>
          <Route path='/' element={<WordsList rows={rows} />}/>
          <Route path='/dictionary' element={<WordsList rows={rows} />}/>
          <Route path='/learn' element={<CardsContainer className="cards" rows={rows}><FlashCard /></CardsContainer>}/>
          <Route path='/quiz' />
          <Route path="*" element={<NoMatch />} />
        </Routes>

        <footer>

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
