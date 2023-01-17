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




const EditarPublicacion = () => {

    const navigate = useNavigate();
    const defaultValues={
        email: "laura@gmail.com",
        id : "63c30e6d62aa61e95dd2c8a2",
        texto: "",
        fotos : []
    }
    let color = "primary";

    const [values, setValues] = useState(defaultValues);

    const addFoto = (url) => {
        values.fotos.push(url);
    };

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

    const addPublicacion = (data) => {
        
        if(values.fotos.length >= 1){
            axios.post("https://kai44g.deta.dev/publicaciones/crear",
                {

                    "id" : values.id,
                    "email" : values.email,
                    "texto": values.texto,
                    "fotos": values.fotos
                   
                    
                }).then(() => {
                    navigate("/")
                }).catch((response) =>{
                    console.log(response)
                    console.log(values.id)
                    console.log(values.texto)
                    console.log(values.email)
                    
                });
        }else{
            color = "error";
        }


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
            <form onSubmit={handleSubmit(addPublicacion)} onKeyPress={e => { e.which === 13 && e.preventDefault() }} noValidate>
                <Grid container spacing={2} sx={{ paddingRight: '10px', paddingBottom: '10px', border: 1, borderRadius: 5, borderColor: "#BF40BF"}}>
                 
                    <Grid item md={9}><TextField placeholder='Texto'fullWidth multiline rows={3} maxrows={5} label="Texto" {...register('texto')} error={errors.texto ? true : false} helperText={errors.texto?.message} name='texto' required onChange={(event) => handleChange({...values, texto: event.target.value})}/></Grid>
                    <Grid item ><Cloudinary func={addFoto} color={color}/></Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" sx={{marginTop: '20px'}}>Crear</Button>
            </form>
            </Box>
        </Grid>
    </Grid>
    );

}

export default EditarPublicacion ; 