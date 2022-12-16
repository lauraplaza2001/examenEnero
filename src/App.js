
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useState }  from 'react';
import MainAppBar from './Components/MainAppBar/MainAppBar';
import Main from './pages/Main/Main';
import MisAnuncios from './pages/MisAnuncios/MisAnuncios';



function App() {
  const [setUser] = useState({});
  return (
    <GoogleOAuthProvider clientId="924104507344-il7n3cpre0kjl7pna5bncbipidsrdcno.apps.googleusercontent.com">
    
      <BrowserRouter>
        <MainAppBar login={setUser}/>
        <Routes>
        <Route path="" element={<Main />} /> 
        <Route path="Anuncios"element={<MisAnuncios/>}/>
       
      </Routes>


        </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
