
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, {  useState }  from 'react';
import MainAppBar from './Components/MainAppBar/MainAppBar';
import Main from './pages/Main/Main';
import Logs from './pages/Logs/Logs';
import PaginaFotos from './pages/PaginaFotos/PaginaFotos';
import MostrarPublicaciones from './pages/MostrarPublicaciones/MostrarPublicaciones';
import EditarPublicacion from './pages/EditarPublicacion/EditarPublicacion';






function App() {
  /*const clientId='924104507344-il7n3cpre0kjl7pna5bncbipidsrdcno.apps.googleusercontent.com'*/
  const [user,setUser] = useState({});
  

  return (
    <GoogleOAuthProvider clientId="924104507344-il7n3cpre0kjl7pna5bncbipidsrdcno.apps.googleusercontent.com">
      <BrowserRouter>
        <MainAppBar login={setUser}/>
        <Routes>
          <Route path="" element={<Main />} /> 
          <Route path="logs"element={<Logs usuario={user}/>}/>
          <Route path="fotos" element={<PaginaFotos usuario={user}/>}/>
          <Route path="showpublicaciones" element= {<MostrarPublicaciones usuario={user} />}/>
          <Route path="EditarPublicacion" element= {<EditarPublicacion usuario={user} />}/>
        </Routes>
      </BrowserRouter>
 
  </GoogleOAuthProvider>
  );
}

export default App;
