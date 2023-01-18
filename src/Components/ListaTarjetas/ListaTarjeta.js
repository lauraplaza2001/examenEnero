import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TarjetaPublicacion from '../TarjetaPublicacion/TarjetaPublicacion';


const ListaTarjetas = ({usuario,locations, funcion, text}) => {
   

  if (!locations.length){
    return null;
  }


  return (
     <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
      {locations.map((aparcamiento) => {
          return (
            <Grid key={aparcamiento.poiID} item xs={12} sm={4} md={4} lg={3}>
              <TarjetaPublicacion  aparcamiento={aparcamiento} funcion={funcion} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  )
}

export default ListaTarjetas