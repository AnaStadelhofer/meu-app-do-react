import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import Root from "../routes/root";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

export const PageLayout = () => {
  const drawerWidth = 240;

  const DrawerApp = () => {
    return (
      <Box>
        <Typography variant="h5" sx={{ textAlign: 'center', fontSize: '3rem'}}>MENU</Typography>
        <List>
          <ListItem>
            <ListItemButton component="a" href="/">
              <ListItemText primary={"Home"}></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/noticia">
              <ListItemText primary={"Noticia"}></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/produto">
              <ListItemText primary={"Produto"}></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/contador">
              <ListItemText primary={"Contador"}></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  };

  const Container = () => {
    const [abrirNav, setAbrirNav] = React.useState(false);

    const abrirModal = () => {
      setAbrirNav(!abrirNav);
    };

    return (
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={abrirModal}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer
            open={abrirNav}
            variant="temporary"
            
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <DrawerApp />
          </Drawer>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Container />

      <Outlet />
    </>
  );
};
