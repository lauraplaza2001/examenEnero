import Mapa from "../../Components/Mapa/Mapa";
import { Container } from '@mui/material'
import React, {useState,useEffect} from 'react'
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import SearchBar from "../../common/SearchBar/SearchBar";
import Grid from '@mui/material/Grid';
import { Styler } from '../../Components/Styler/Styler';
import ListaTarjetas from "../../Components/ListaTarjetas/ListaTarjeta";

import Button from "@mui/material/Button";


const Main2 = ({ usuario }) => {
    const [aparcamientos,setAparcamientos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [aparcamientosFiltrados, setAparcamientosFiltrados] = useState([]);



    const [direccion,setDireccion] = useState();


    const getAparcamientos = async () => {
        const response = await axios.get("https://iocond.deta.dev/aparcamientos");
        setCargando(false);
        setAparcamientos(response.data);
        
    }

    


    const getAparcamientosDireccion= async (value) => {
        const response = await axios.get("https://iocond.deta.dev/aparcamientos/direccion/"+ value);
        setCargando(false);
        setAparcamientos(response.data);
    }

  





    useEffect(() => {
        getAparcamientos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setAparcamientosFiltrados(aparcamientos)

    }, [cargando]);

    if(cargando){
        return <CircularProgress />
    }



    /*******************************FILTROS ************ */
  

    
      const handleFiltroDireccion = () => {
        console.log(direccion)
        getAparcamientosDireccion(direccion)
        setAparcamientosFiltrados(aparcamientos) 
      }
  




    return(
       
        <div class="page" style={Styler.page}>



      
      <Grid container spacing={2} sx={{ paddingTop: '20px' }}>
        <Grid item md={6}>
        <form >
             <TextField
                name= "direccion"
                id="direccion"
                label="Direccion" 
                required
                value={direccion}
                type="txt"
                onChange={(event) => setDireccion(event.target.value)}
                />


             <Button onClick={handleFiltroDireccion}  >Filtrar</Button>
             
        </form>
        </Grid>
      </Grid>

       

        <Container maxWidth="xl" sx={{mb: 3}}>
        <Mapa aparcamientos={aparcamientosFiltrados}></Mapa>
        </Container>


        <Container maxWidth="xl" sx={{mb: 3}}>

          <ListaTarjetas  locations={aparcamientosFiltrados} />
          
      </Container>


        </div>
    );

}

export default Main2 ; 