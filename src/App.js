import './App.scss';
import Home from './pages/Home/Home';
import Formulario from './pages/Formulario/Formulario';
import Mentor from './pages/Mentor/Mentor';
import Eventos from './pages/Eventos/Eventos';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/formulario' element={<Formulario/>} />
            <Route path='/mentor/:id' element={<Mentor/>} />
            <Route path='/eventos' element={<Eventos/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
