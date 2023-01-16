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



const MainAppBar = ({ login }) => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [log, setLog] = useState(false);
    const [photo, setPhoto] = useState("");
    const [user,setUser] = useState(""); 
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const logIn = (token) => {
      axios.post("https://d6ys3h.deta.dev/usuarios/logIn/" + token.credential).then((response) => {
        setPhoto(response.data.foto);
        login(response.data.usuario);
        setLog(true);
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
            METRO DE MÁLAGA
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
                <MenuItem key="logs" onClick={handleCloseNavMenu}>
                  <Link
                    sx={{
                      textAling: "center",
                      color: "black",
                    }}
                    onClick={() => navigate("/logs")}
                    underline="none"
                  >
                    Mostrar logs
                  </Link>
                </MenuItem>
               
              </Menu>
            </Box>
           
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key="logs"
                onClick={() => navigate("/logs")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Mostrar logs
              </Button>
            
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key="fotos"
                onClick={() => navigate("/fotos")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                UP Publicaciones
              </Button>
            
            </Box>

           

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key="logs"
                onClick={() => navigate("/showpublicaciones")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Mostrar publicaciones
              </Button>
            
            </Box>




            <LogButton />
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  export default MainAppBar;



