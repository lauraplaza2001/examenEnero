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
import CommonButton from "../../common/CommonButton/CommonButton";
import Button from "@mui/material/Button";
const Main = () => {
    const [paradas,setParadas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [lineasFiltradas, setLineasFiltradas] = useState([]);
    const [lineasAux, setLineasAux] = useState([]);

    
    const [nLinea,setnLinea] = useState();
    const [sentido,setSentido] = useState();
    const [direccion,setDireccion] = useState();


    const getParadas = async () => {
        const response = await axios.get("https://twk28h.deta.dev/paradas");
        setCargando(false);
        setParadas(response.data);
        
    }

    const getParadasLineaSentido= async (linea,sentido) => {
        const response = await axios.get("https://twk28h.deta.dev/paradas/"+ linea + "/" + sentido);
        setCargando(false);
        setParadas(response.data);
    }

    const getParadasNombre= async (value) => {
        const response = await axios.get("https://twk28h.deta.dev/paradas/"+ value);
        setCargando(false);
        setParadas(response.data);
    }
    

    const getParadasDireccion= async (value) => {
        const response = await axios.get("https://twk28h.deta.dev/paradas/direccion"+ value);
        setCargando(false);
        setParadas(response.data);
    }

  





    useEffect(() => {
        getParadas()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setLineasFiltradas(paradas)

    }, [cargando]);

    if(cargando){
        return <CircularProgress />
    }



    /*******************************FILTROS         ************ */
  

    
    const handleSearchDireccion = (value) => {
        filterDataDireccion(value);
      };

      const filterDataDireccion = (value) => {
        console.log(value)
        
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") {
          setLineasFiltradas(paradas);
          console.log("lowercasedValue es vacio")
    
        } else {
          setLineasAux([])
          getParadasDireccion(lowercasedValue)
            
          paradas.forEach(element => {
            if (element.nombreParada.toLowerCase().includes(lowercasedValue)) {
              lineasAux.push(element)
              console.log(element.nombreParada)
            }
          });      
          setLineasFiltradas(lineasAux) // Sin hacer set no se actualizan los componentes como el mapa
          
        };
      };
    




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



    
      const handleFiltroDireccion = () => {
        console.log(direccion)
        getParadasNombre(direccion)
        setLineasFiltradas(paradas) 
      }
      const handleFiltroLineaSentido = () => {
        console.log(nLinea)
        console.log(sentido)
        getParadasLineaSentido(nLinea,sentido)
        setLineasFiltradas(paradas) /*  esto tengo que hacerlo para q se actualice el mapa*/

      }




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
            <SearchBar
            style={Styler.pads}
            placeholder="Buscar por direccion"
            onChange={(event) => handleSearchDireccion(event.target.value)}
            searchBarWidth='720px'
          />

        </Grid>
      </Grid>


      <Grid container spacing={2} sx={{ paddingTop: '20px' }}>
        <Grid item md={6}>
        <form >
             <TextField
                name= "linea"
                id="linea"
                label="Nº línea" 
                required
                value={nLinea}
                type="number"
                onChange={(event) => setnLinea(event.target.value)}
                />


             <TextField 
                id="sentido" 
                label="Sentido"
                required 
                value={sentido}
                type="number"
                onChange={(event) => setSentido(event.target.value)}
                
                />
             <Button onClick={handleFiltroLineaSentido}  >Filtrar</Button>
             
        </form>
        </Grid>
      </Grid>




      
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
        <Mapa paradas={lineasFiltradas}></Mapa>
        </Container>
        </div>
    );

}

export default Main ; 