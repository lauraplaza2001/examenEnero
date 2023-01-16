import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TarjetaPublicacion from '../TarjetaPublicacion/TarjetaPublicacion';


const ListaTarjetas = ({locations, funcion, text}) => {
   

  if (!locations.length){
    return null;
  }


  return (
     <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
      {locations.map((publicaciones) => {
          return (
            <Grid key={publicaciones.id} item xs={12} sm={4} md={4} lg={3}>
              <TarjetaPublicacion publicaciones={publicaciones} funcion={funcion} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  )
}

export default ListaTarjetas