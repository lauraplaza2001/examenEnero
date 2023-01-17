import React, {useState, useEffect} from 'react'
import { Container } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import ListaTarjetas from '../../Components/ListaTarjetas/ListaTarjeta';

const MostrarPublicaciones = ({usuario}) => {
    const [cargando, setCargando] = useState(true);
    const [publicaciones, setPublicaciones] = useState([]);
    

    const getValores = async() => {
        const publicaciones = await axios.get("https://kai44g.deta.dev/publicaciones");
        setPublicaciones(publicaciones.data);
        setCargando(false);
    } 

    useEffect(() => {
        getValores()
    }, [cargando]);

 
    if(cargando){
      return <CircularProgress />;
    }
    return (
      <Container maxWidth="xl" sx={{mb: 3}}>

    
          <ListaTarjetas usuario= {usuario} locations={publicaciones} />
          
      </Container>
    )
}

export default MostrarPublicaciones