import {BrowserRouter, Routes, Route} from 'react-router-dom'
//styles
import './App.css'
//componenets
import Home from "./components/Home";
import Register from "./components/Register";
import { useState } from 'react';

function App() {
  const [id, setid] = useState(null);
  
  return (
        <div>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />  
          </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
