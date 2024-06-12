import { Box, Drawer, Grid, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-scroll";
import { useState } from "react";

export const NavMenu = ({ menuItems }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Grid container sx={{zIndex: 10}}>
            <Grid item>
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{
                        display: { xs: 'block', sm:'none', md: 'none' },
                        position: 'fixed',
                        zIndex: 10,
                        // top: 10,
                        // left: 10
                    }}>
                    <MenuIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <Drawer open={drawerOpen} onClose={handleDrawerToggle} sx={{ zIndex: 10, display: { xs: 'block', sm:'none', md: 'none' } }}>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index}>
                                <Link to={item.to} smooth={true} duration={500} onClick={handleDrawerToggle}>
                                    <ListItemText primary={item.name} />
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Grid>
        </Grid>
    )
}