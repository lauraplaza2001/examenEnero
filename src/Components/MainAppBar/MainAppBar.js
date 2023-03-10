import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Image from 'mui-image';
import { useNavigate } from 'react-router-dom';
import CommonButton from '../../common/CommonButton/CommonButton';
import { Styler } from '../Styler/Styler';
import { SettingsBackupRestoreRounded } from '@mui/icons-material';



const MainAppBar = ({ login }) => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [log, setLog] = useState(false);
    const [photo, setPhoto] = useState("");
    const [user,setUser] = useState(""); 
    const [token,setToken] = useState("");
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const logIn = (token) => {
      console.log(token);
      axios.post("https://d6ys3h.deta.dev/usuarios/logIn/" + token.credential).then((response) => {
        
        setPhoto(response.data.foto);
        login(response.data.usuario);
        setLog(true);
        setUser(response.data.usuario);
        setToken(token);
        

    

        
      });
    };
  
    const logOut = () => {
      setPhoto("");
      login();
      setLog(false);

    }

    const LogButton = () => {
      if (log) {
        return (
          <CommonButton
          variant="contained"
          sx={Styler.logoutbutton}
        >
          <Image
            src={photo}
            height="50px"
            width="50px"
            onClick={() => {
              logOut();
              console.log('Logout correcto');
            }} />
        </CommonButton>
        );
      } else {
        return (<GoogleLogin
          onSuccess={credentialResponse => {
            logIn(credentialResponse);
            console.log('Login correcto');
          
          
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />);
      }
    }
  
    return (
      <AppBar position="static" sx={{ backgroundColor: "#28282a" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
           
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate("/")}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'roboto',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
           ParkingNET
            </Typography>


            
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
      


               
              </Menu>
            </Box>
           
  

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key="perfil"
                onClick={() => navigate("/perfil", { state: { token, photo} })}
                sx={{ my: 2, color: 'white', display: 'block' }}
    
              >
                Mi Perfil
              </Button>
            
            </Box>





            <LogButton />
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  export default MainAppBar;



