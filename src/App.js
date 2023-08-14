import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
