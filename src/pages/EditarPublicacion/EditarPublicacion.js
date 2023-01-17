import { Button } from "@mui/material";
import React, {useState} from 'react'
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import Cloudinary from "../../Components/Cloudinary/Cloudinary";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'mui-image'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useLocation } from "react-router-dom";





const EditarPublicacion = () => {
    const publicaciones= useLocation().state.publicaciones;

    const navigate = useNavigate();
    const defaultValues={
        email: "",
        id : "",
        texto: "",
        fotos : []
    }
    let color = "primary";

    const [values, setValues] = useState(defaultValues);

  



    const validationSchema = Yup.object().shape({
        texto: Yup.string().required("Texto obligatorio").min(20, "20 caracteres mínimo").max(400, "400 caracteres máximo"),                                              // eslint-disable-line
    });


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });



    const editPublicacion = (data) => {
        
            axios.put("https://kai44g.deta.dev/publicaciones/editar" ,
                {
            
                    "id" : publicaciones._id.$oid,
                    "usuario" : publicaciones.usuario._id.$oid,
                    "email" : publicaciones.usuario.email,
                    "texto": values.texto,
                    "fotos": publicaciones.fotos

                   
                    
                }).then(() => {
                    navigate("/showpublicaciones")
                }).catch((response) =>{
                    console.log(publicaciones._id.$oid)
                    console.log(publicaciones.usuario._id.$oid)
                    console.log(publicaciones.usuario.email)
                    console.log(values.texto)
                    console.log(publicaciones.fotos)
                    console.log(response)
                  

                    console.log(publicaciones)
                    
                });
       


    }

    const handleChange = (value) =>(
        setValues(value)
    );




    return(

        <Grid container spacing={2} sx={{paddingTop: '10px'}}>
        <Grid item sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }}} >
           
        </Grid>
        <Grid item container md={6} xs={12} sx={{margin: '20px'}} alignItems="center"  justifyContent="center" >
            <Box sx={{maxWidth: '650px'}}>
            <form onSubmit={handleSubmit(editPublicacion)} onKeyPress={e => { e.which === 13 && e.preventDefault() }} noValidate>
                <Grid container spacing={2} sx={{ paddingRight: '10px', paddingBottom: '10px', border: 1, borderRadius: 5, borderColor: "#BF40BF"}}>
                 
                    <Grid item md={9}><TextField placeholder='Texto'fullWidth multiline rows={3} maxrows={5} label="Texto" {...register('texto')} error={errors.texto ? true : false} helperText={errors.texto?.message} name='texto' required onChange={(event) => handleChange({...values, texto: event.target.value})}/></Grid>
                   
                </Grid>
                <Button type="submit" variant="contained" color="primary" sx={{marginTop: '20px'}}>Editar</Button>
            </form>
            </Box>
        </Grid>
    </Grid>
    );

}

export default EditarPublicacion ; 