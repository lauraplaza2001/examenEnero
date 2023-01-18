
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import CardActions from '@mui/material/CardActions';

const TarjetaPublicacion = ({ aparcamiento}) => {

  const [show, setShow] = useState("auto");
  const navigate = useNavigate();


  
       

  
return ( 
    <Card sx={{ height: '425px' ,  border: '3px solid #BF40BF' ,  padding:"5px" ,  borderRadius: 5, display: show}}>
     
      <CardContent>
      

        <Typography variant="overline"> {aparcamiento.nombre}</Typography>
   
      <Box
        component="span"
        sx={{
          overflow: 'auto',
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          height:"300px"
        }}
      >
           <Typography align = "justify" paragraph="true" variant = 'body' overflor="scroll" height="25px"> DIRECCIÓN : {aparcamiento.direccion}   </Typography> 
           <Typography align = "justify" paragraph="true" overflor="scroll" height="20px"> {aparcamiento.latitud}  {aparcamiento.longitud}  </Typography> 
           <Typography align = "justify" paragraph="true" overflor="scroll" height="20px"> CAPACIDAD:  {aparcamiento.capacidad}. </Typography> 
           <Typography align = "justify" paragraph="true" overflor="scroll" height="20px"> PLAZAS DISPONIBLES:  {aparcamiento.libres} </Typography> 
           <Typography align = "justify" paragraph="true" overflor="scroll" height="20px"> CONTACTO: {aparcamiento.correo} </Typography> 

      </Box>
        
    
    
     
       
      </CardContent>
      <CardActions>
        
       




      </CardActions>
    </Card>   

  )
}

export default TarjetaPublicacion
