import Mapa from "../../Components/Mapa/Mapa";
import { Container } from '@mui/material'
import React, {useState,useEffect} from 'react'
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const Main = () => {
    const [paradas,setParadas] = useState([]);
    const [cargando, setCargando] = useState(true);

    const getParadas = async () => {
        const response = await axios.get("https://twk28h.deta.dev/paradas");
        setCargando(false);
        setParadas(response.data);
        
    }

    useEffect(() => {
        getParadas()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cargando]);

    if(cargando){
        return <CircularProgress />
    }


    return(


        <Container maxWidth="xl" sx={{mb: 3}}>
        <Mapa paradas={paradas}></Mapa>
        </Container>
    );

}

export default Main ; 