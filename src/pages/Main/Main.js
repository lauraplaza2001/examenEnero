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
const Main = () => {
    const [paradas,setParadas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [lineasFiltradas, setLineasFiltradas] = useState([]);
    const [lineasAux, setLineasAux] = useState([]);

    const getParadas = async () => {
        const response = await axios.get("https://twk28h.deta.dev/paradas");
        setCargando(false);
        setParadas(response.data);
        
    }

   {/*} const getParadasLineaSentido= async (linea,sentido) => {
        const response = await axios.get("https://twk28h.deta.dev/paradas/"+ linea + "/" + sentido);
        setCargando(false);
        setParadas(response.data);
    

    const getParadasNombre= async (value) => {
        const response = await axios.get("https://twk28h.deta.dev/paradas/"+ value);
        setCargando(false);
        setParadas(response.data);
    }

    const getParadasDireccion= async (value) => {
        const response = await axios.get("https://twk28h.deta.dev/paradas/"+ value);
        setCargando(false);
        setParadas(response.data);
    }


    const [searchQuery, setSearchQuery] = useState("");
  
}*/}


  




    useEffect(() => {
        getParadas()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setLineasFiltradas(paradas)
    }, [cargando]);

    if(cargando){
        return <CircularProgress />
    }



    /*******************************FILTROS         ************ */
    const handleSearch = (value) => {
        filterData(value);
      };
    
      const filterData = (value) => {
        console.log(value)
        
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") {
          setLineasFiltradas(paradas);
          console.log("lowercasedValue es vacio")
    
        } else {
          setLineasAux([])
    
          paradas.forEach(element => {
            if (element.nombreParada.toLowerCase().includes(lowercasedValue)) {
              lineasAux.push(element)
              console.log(element.nombreParada)
            }
          });      
          setLineasFiltradas(lineasAux) // Sin hacer set no se actualizan los componentes como el mapa
          
        };
      };
    


    return(
        <div class="page" style={Styler.page}>
        <Grid container spacing={2} sx={{ paddingTop: '10px' }}>
        <Grid item md={3}>
          <SearchBar
            style={Styler.pads}
            placeholder="Buscar por nombre de parada"
            onChange={(event) => handleSearch(event.target.value)}
            searchBarWidth='720px'
          />

        </Grid>
      </Grid>
       
        <Container maxWidth="xl" sx={{mb: 3}}>
            
           
        <Mapa paradas={lineasFiltradas}></Mapa>
        </Container>
        </div>
    );

}

export default Main ; 