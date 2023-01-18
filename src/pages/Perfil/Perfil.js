import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import Container from '@mui/material/Container';
import axios from 'axios';
import Titulo from '../../common/Titulo/Titulo';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Styler } from '../../Components/Styler/Styler';
import { LoginSharp } from '@mui/icons-material';


const Perfil = () => {

    const [logs, setLogs] = useState([]);

    const token = useLocation().state.token;
 

    const [cargando, setCargando] = useState(true);
    
    const getLogs = async () => {
        setLogs([])
        
        

        // const response = await axios.get("http://localhost:8000/logs");
        console.log("Usuario :" + token.credential);
       const response = await axios.get("https://d6ys3h.deta.dev/usuarios/"+ token.credential); 
        setLogs(response.data)
        console.log(response.data);
        setCargando(false);
        console.log(response.data.conexion.timestrap.$date);
     
    }

    useEffect(() => {
        getLogs()
    }, [cargando]);

    if (cargando) {
        return (
            <div align="center" style={Styler.loading}>
                <CircularProgress />
            </div>);
    } else {
        return (
            <div class="page" style={Styler.page}>
                <Container maxWidth="xl" sx={{ mb: 3 }}>
                    <Titulo titulo="PERFIL" />
                    <Box sx={{ marginBottom: '20px' }}>
                            <Typography>Usuario: {logs.email}</Typography>
                                    
                          {/**   <Typography>Conexión timestrap, iat: { new Date(logs.conexion.timestrap.$date).toDateString()}   { new Date(logs.conexion.iat.$date).toDateString()}  </Typography> 
                             <Typography>Caducidad timestrap, exp: { new Date(logs.caducidad.timestrap.$date).toDateString()}   { new Date(logs.caducidad.exp.$date).toDateString()}  </Typography> 
                             <Typography>Token: {logs.token}</Typography>

                            
                            */} 
                            <Typography>Token: {logs.token}</Typography>

                        </Box>




                 

                </Container>
            </div >
        )
    }
}


export default Perfil;