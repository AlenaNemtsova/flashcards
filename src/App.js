import './App.css';
import Header from './components/Header';
import FlashCard from './components/FlashCard';
import WordsList from './components/WordsList';
// import './assets/styles/mainStyles.scss'; переменные не подключаются



function App() {
  return (
    <div className="App">
      <Header></Header>

      <FlashCard></FlashCard>
      <WordsList></WordsList>
      
      <footer>

      </footer>
    </div>
  );
}

export default App;
