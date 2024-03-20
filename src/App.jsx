import {BrowserRouter, Routes, Route} from 'react-router-dom'
//styles
import './App.css'
//componenets
import Home from "./components/Home";
import Register from "./components/Register";
import { useState } from 'react';
import Login from './components/Login';
import Account from './components/Account';
import NavBar from './components/Navbar';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';


function App() {
  const [id, setid] = useState(null);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  
  // console.log('id', id)
  console.log('token', token)
 
  
  return (
        <div>
          <BrowserRouter>
          <NavBar token={token} setToken={setToken}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register setid={setid}/>} />  
            <Route path="/login" element={<Login setToken={setToken} setUsername={setUsername}/>} />
            <Route path="/account" element={<Account token={token} username={username}/>} />
            <Route path="/services" element={<Services token={token} />} />  
            <Route path="/servicedetails/:productId" element={<ServiceDetails token={token} />} />         
          </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;