import {BrowserRouter, Routes, Route} from 'react-router-dom'
//styles
import './App.css'
//componenets
import Home from "./components/Home";
import Register from "./components/Register";
import { useState } from 'react';
import Login from './components/Login';


function App() {
  const [id, setid] = useState(null);
  const [token, setToken] = useState(null);
  
  // console.log('id', id)
  console.log('token', token)
 
  
  return (
        <div>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register setid={setid}/>} />  
            <Route path="/login" element={<Login setToken={setToken} />} />
          </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
