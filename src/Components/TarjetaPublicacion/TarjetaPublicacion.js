
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

const TarjetaPublicacion = ({ publicaciones}) => {

  const [show, setShow] = useState("auto");
  const navigate = useNavigate();


  const borrarPublicacion = async (id) => {
      console.log(id);
     axios.delete("https://kai44g.deta.dev/publicaciones/eliminar/"+id);
   
       


}


    
  
return ( 
    <Card sx={{ height: '425px' ,  border: '3px solid #BF40BF' ,  padding:"5px" ,  borderRadius: 5, display: show}}>
      <CardMedia
        component="img"
        height="140"
        image={publicaciones.fotos[0]}
       /* alt="Vivienda"*/
      />
      <CardContent>
      

        <Typography variant="overline"> {publicaciones.usuario.email}</Typography>
   
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
          height:"100px"
        }}
      >
           <Typography align = "justify" paragraph="true" overflor="scroll" height="1px"> {publicaciones.texto} </Typography> 
      </Box>
        
    
    
     
       
      </CardContent>
      <CardActions>
        
        <Button 
        onClick={() => {
         
            borrarPublicacion(publicaciones._id.$oid);
            navigate("/");
          
          
        }}
        size="small" 
        color="secondary"
        variant="contained"
        >
              Borrar
        </Button>
      </CardActions>
    </Card>   

  )
}

export default TarjetaPublicacion
