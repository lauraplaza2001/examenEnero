
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, {  useState }  from 'react';
import MainAppBar from './Components/MainAppBar/MainAppBar';

import Logs from './pages/Logs/Logs';
import Main2 from './pages/Main2/Main2';
import Perfil from './pages/Perfil/Perfil';






function App() {
  /*const clientId='924104507344-il7n3cpre0kjl7pna5bncbipidsrdcno.apps.googleusercontent.com'*/
  const [user,setUser] = useState({});
  

  return (
    <GoogleOAuthProvider clientId="924104507344-il7n3cpre0kjl7pna5bncbipidsrdcno.apps.googleusercontent.com">
      <BrowserRouter>
        <MainAppBar login={setUser}/>
        <Routes>
         {/* <Route path="" element={<Main />} />  */}
          <Route path="" element={<Main2 usuario={user}/>} /> 
          <Route path="perfil" element= {<Perfil usuario={user} />}/>

        </Routes>
      </BrowserRouter>
 
  </GoogleOAuthProvider>
  );
}

export default App;
