import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Empform from './components/Empform';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/empform" element={<Empform/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
