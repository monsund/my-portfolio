import { Grid, IconButton, Typography } from "@mui/material"
import { Link } from "react-scroll";
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from "react";

export const SidebarMenu = ({ menuItems }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <Grid container width='20%' display='flex' flexDirection='column' sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
            <Grid item width='20%' position='fixed' height='100%' display='flex' flexDirection='column' justifyContent='space-between'>
                <Grid>
                    {menuItems.map((item, index) =>
                        <Typography key={index} paddingTop='20%' paddingLeft='20%' height='2rem' fontWeight='bold'>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                onClick={() => handleItemClick(item.name)}
                                style={{ cursor: 'pointer' }}
                            >
                                {item.name}
                            </Link>
                            {selectedItem === item.name && <Divider style={{ backgroundColor: 'black' }} />}
                            {selectedItem !== item.name && <Divider />}
                        </Typography>
                    )}
                </Grid>
                <Grid paddingBottom='20%' display='flex' flexDirection='column' alignItems='center'>
                    <Divider style={{ width: '80%', margin: '20px 0' }} />
                    <Grid>
                        <Typography height='2rem' fontWeight='bold' >Contact</Typography>
                    </Grid>
                    <Grid container direction="row" alignItems="center" spacing={1}>
                        <Grid item>
                            <IconButton href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
                                <LinkedInIcon fontSize='large' sx={{ color: '#0B65C2' }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography>
                            <a href="https://www.linkedin.com/in/monsoon-dibragede-22077149/" target="_blank" rel="noopener noreferrer" style={{ color: '#0e76a8' }}>
                                LinkedIn
                                </a>
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" spacing={1}>
                        <Grid item>
                            <IconButton href="mailto:example@example.com" aria-label="Email">
                                <EmailIcon fontSize='large' sx={{ color: '#E8D667' }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography>monsoon.dibragede@gmail.com</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
