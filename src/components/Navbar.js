import { AppBar, Box, Container, IconButton, MenuItem, Menu, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

//Navigation menu
export const Navbar = () => {
  
    let navigate = useNavigate();

    //Menu 
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);   
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    //Redirect to Home
    const handleOpenHome = () => { 
        setAnchorElNav(null);
        navigate('/');    
    }
    //Redirect to Gluten Free view
    const handleOpenGlutenFree = () => { 
        setAnchorElNav(null);   
        navigate('/gluten');
      
    }
    //Redirect to Dairy Free view
    const handleOpenDairyFree = () => { 
        setAnchorElNav(null);
        navigate('/dairy');
    }

    //Redirect to Vegan view
    const handleOpenVegan = () => { 
        setAnchorElNav(null);
        navigate('/vegan');
    }

    //Theme style
    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#f97b2f',
        },
      },
    });

    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              ¡Qué rico!
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
                  <MenuItem selected className="MenuItem" onClick={handleOpenHome}>                  
                          <Typography color="white" textAlign="center">Home</Typography>                  
                  </MenuItem>
                  <MenuItem selected className="MenuItem" onClick={handleOpenGlutenFree}>                  
                          <Typography color="white" textAlign="center">Gluten Free</Typography>                  
                  </MenuItem>
                  <MenuItem selected className="MenuItem" onClick={handleOpenDairyFree}>                  
                          <Typography color="white" textAlign="center">Dairy Free</Typography>                   
                  </MenuItem>
                  <MenuItem selected className="MenuItem" onClick={handleOpenVegan}>                   
                          <Typography color="white" textAlign="center">Vegan</Typography>                   
                  </MenuItem>

              </Menu>
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              ¡Qué rico!
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                      onClick={handleOpenHome}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                      Home
                </Button>    
                <Button
                active="true"
                      onClick={handleOpenGlutenFree}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                      Gluten Free
                </Button> 
                <Button
                      onClick={handleOpenDairyFree}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                      Dairy Free
                </Button>            
                <Button
                      color="primary"
                      onClick={handleOpenVegan}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                      Vegan
                </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
    )
}
