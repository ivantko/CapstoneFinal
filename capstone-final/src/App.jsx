import {BrowserRouter, Routes, Route} from 'react-router-dom'
//styles
import './App.css'
//componenets
import Home from "./components/Home";
import Register from "./components/Register";
import { useState } from 'react';
import Login from './components/Login';
import Account from './components/Account';


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
            <Route path="/account" element={<Account token={token}/>} />
          </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
