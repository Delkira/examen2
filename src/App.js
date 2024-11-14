import './App.css';
import Home from './pages/Home';
import Inicial from './pages/Inicial';
import Primario from './pages/Primario';
import Secundaria from './pages/Secundaria';
import Cens from './pages/Cens';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ini" element={<Inicial />} />
          <Route path="/pri" element={<Primario />} />
          <Route path="/secu" element={<Secundaria />} />
          <Route path="/ce" element={<Cens />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
