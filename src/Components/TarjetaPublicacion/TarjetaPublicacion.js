
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TarjetaPublicacion = ({ publicaciones , funcion, textoBoton}) => {

  const [show, setShow] = useState("auto");
  const navigate = useNavigate();

    
  return ( 
    <Card sx={{ height: '425px' ,  border: '3px solid #BF40BF' ,  padding:"5px" ,  borderRadius: 5, display: show}}>
      <CardMedia
        component="img"
        height="140"
        image={publicaciones.fotos[0]}
      /*  alt="Vivienda" */
      />
      <CardContent>
      

        <Typography variant="overline"> {"El usuario cuyo email es : " + publicaciones.usuario.email  +" ha publicado lo siguiente:  " + publicaciones.texto }</Typography>
   
     
        
     
    
     
       
      </CardContent>
    </Card>   

  )
}

export default TarjetaPublicacion
