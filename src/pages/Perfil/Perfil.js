import React, { useEffect, useState } from 'react'

import { CircularProgress } from '@mui/material';
import Container from '@mui/material/Container';
import axios from 'axios';
import Titulo from '../../common/Titulo/Titulo';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Styler } from '../../Components/Styler/Styler';


const Perfil = ({ usuario }) => {
    const navigate = useNavigate();
    const [logs, setLogs] = useState([]);
    const [cargando, setCargando] = useState(true);

    const getLogs = async () => {
        setLogs([])

        // const response = await axios.get("http://localhost:8000/logs");
        const response = await axios.get("https://d6ys3h.deta.dev/usuarios");
        setLogs(response.data)
        setCargando(false);
     
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
                    <Titulo titulo="Logs completos" />

                    {logs.map((log, index) => (
                        <Box sx={{ marginBottom: '20px' }}>
                            <Typography>Usuario: {log.email}</Typography>
                        {/*                      <Typography>Caducidad: { log.timestrap.date.toString()}</Typography> */}
                     { /*{console.log( new Date(log.timestrap.$date).toDateString())}*/}
                                              <Typography>Caducidad: { new Date(log.timestrap.$date).toDateString()}</Typography> 
                          
                            <Typography>Token: {log.token}</Typography>
                        </Box>
                    ))}

                </Container>
            </div >
        )
    }
}


export default Perfil;