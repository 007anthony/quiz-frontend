import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Quiz from './component/Quiz';
import ToggleButton from './component/ToggleButton';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="game/:id" element={<Quiz/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
