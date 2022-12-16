import Mapa from "../../Components/Mapa/Mapa";
import { Container } from '@mui/material'
import React, {useState} from 'react'

const Main = () => {
    const [paradas] = useState([]);





    return(


        <Container maxWidth="xl" sx={{mb: 3}}>
        <Mapa paradas={paradas}></Mapa>
        </Container>
    );

}

export default Main ; 