
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useEffect, useState }  from 'react';
import MainAppBar from './Components/MainAppBar/MainAppBar';
import Main from './pages/Main/Main';
import Logs from './pages/Logs/Logs';






function App() {
  const clientId='924104507344-il7n3cpre0kjl7pna5bncbipidsrdcno.apps.googleusercontent.com'
  const [user,setUser] = useState({});
  

  return (
    <GoogleOAuthProvider clientId="924104507344-il7n3cpre0kjl7pna5bncbipidsrdcno.apps.googleusercontent.com">
      <BrowserRouter>
        <MainAppBar login={setUser}/>
        <Routes>
          <Route path="" element={<Main />} /> 
          <Route path="logs"element={<Logs usuario={user}/>}/>
        </Routes>
      </BrowserRouter>
 
  </GoogleOAuthProvider>
  );
}

export default App;
