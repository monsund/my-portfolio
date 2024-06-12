import { Box, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Element } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { NavMenu } from '../components/NavMenu';
import { SidebarMenu } from '../components/SidebarMenu';

import { SkillCard } from '../common/SkillCard';
import { ProjectCard } from '../common/ProjectCard';
import ScrollAnimation from '../common/ScrollAnimation'; // Import the ScrollAnimation component
import '../App.css'; // Import the CSS for animations


import HeroImage from '../utils/images/Basics.png';
import PortFolioHero from '../utils/images/PortfolioHero.gif';
import PendoPlatform from '../utils/images/PendoPlatform.gif';
import ContractTool from '../utils/images/ContractTool.gif';
import StreamedlineProcesses from '../utils/images/StreamedlineProcesses.gif';
import WeatherForecast from '../utils/images/WeatherForcast.gif';

const skills = [
    'Web Development',
    'Database Management',
    'Software Architecture',
    'Testing and Quality Assurance',
    'Performance Optimization',
    'Problem-Solving and Analytical Thinking'
]

const projects = [
    {
        title: 'Contract Tool',
        img: ContractTool,
        description: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor sit amet felis bibendum tincidunt. Suspendisse potenti; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus lacinia odio vitae vestibulum vestibulum.'
    },
    {
        title: 'Pendo: Property Management',
        img: PendoPlatform,
        description: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor sit amet felis bibendum tincidunt. Suspendisse potenti; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus lacinia odio vitae vestibulum vestibulum.'
    },
    {
        title: 'Streamlined Manufacturing Units',
        img: StreamedlineProcesses,
        description: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor sit amet felis bibendum tincidunt. Suspendisse potenti; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus lacinia odio vitae vestibulum vestibulum.'
    },
    {
        title: 'Weather Forecaster',
        img: WeatherForecast,
        description: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor sit amet felis bibendum tincidunt. Suspendisse potenti; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus lacinia odio vitae vestibulum vestibulum.'
    }
]

export const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const menuItems = [
        { name: 'Introduction', to: 'intro' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        ...(isMobile ? [{ name: 'Contact', to: 'contact' }] : [])
    ];

    return (
        <Grid display='flex' flexDirection={{ xs: 'column', sm: 'row', md: 'row' }}>
            {isMobile ? <NavMenu menuItems={menuItems} /> : <SidebarMenu menuItems={menuItems} />}

            {isMobile && <Grid
                sx={{
                    height: '3rem',
                    top:0, left:0,
                    width: '100%',
                    background: '#ffffff',
                    position: 'fixed',
                    zIndex:10
                }}>
            </Grid>}

            <Box width={!isMobile ? '80%' : '100%'} ml={!isMobile ? 5 : 0} mt={isMobile ? 5 : 0} position='relative' overflow='auto'>
                {/* ---------------Intro section---------------*/}
                <Element name="intro">
                    <Grid container display='flex' justifyContent='center' alignItems='center' backgroundColor='#FAF8F8'>
                        <Grid item xs={12} sm={12} md={6} justifyContent='center'>
                            {!isMobile ?
                                <Typography align='center' >
                                    <Box component="span" sx={{ fontSize: '3rem', color: 'black' }}>Craft the </Box>
                                    {/* {' the '} */}
                                    <Box component="span" sx={{
                                        fontSize: '4rem',
                                        backgroundImage: 'linear-gradient(45deg, #C7DE0D 30%, #F22003 90%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>
                                        Future of Technology
                                    </Box>
                                    <Box component="span" sx={{ fontSize: '2rem', color: 'grey' }}>, one line of code at a time.</Box>
                                </Typography> :
                                <Typography align='center' paddingTop={2} paddingBottom={2}>
                                    <Box component="span" sx={{ color: 'grey' }}>Craft the </Box>
                                    <Box component="span" sx={{
                                        fontSize: '1.2rem',
                                        backgroundImage: 'linear-gradient(45deg, #C7DE0D 30%, #F22003 90%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>
                                        Future of Technology
                                    </Box>
                                    <Box component="span" sx={{ color: 'grey' }}>, <br></br>one line of code at a time.</Box>
                                </Typography>}
                            <Grid display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginTop={isMobile ? 0 : 5}>
                                <Typography
                                    align='center'
                                    sx={{
                                        fontFamily: 'cursive',
                                        fontSize: isMobile ? '1rem' : '2rem',
                                        backgroundImage: 'linear-gradient(45deg, #FF03E4 30%, #6BFC05 90%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}
                                >Website built in React</Typography>
                                <Typography
                                    align='center'
                                    sx={{
                                        fontFamily: 'cursive',
                                        fontSize: isMobile ? '.6rem' : '1rem',
                                        backgroundImage: 'linear-gradient(45deg, #F90C01 30%, #6BFC05 90%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}
                                >Monsoon Dibragede | Full Stack Developer</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center' marginTop={isMobile ? 5 : 0}>
                            <img src={PortFolioHero} style={{ maxWidth: '100%', height: isMobile ? '20rem' : '30rem' }} />
                        </Grid>
                    </Grid>
                </Element>

                {/* ---------------About section---------------*/}
                <Element name="about">
                    <ScrollAnimation>
                        <Box marginTop={8} backgroundColor='white'>
                            <ScrollAnimation>
                                <Grid xs={12} sm={12} md={12}>
                                    <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '50px' }}>About</Typography>
                                </Grid>
                            </ScrollAnimation>
                            <Box marginTop={3} height='100%' display='flex' flexDirection='column' alignItems='center'>
                                <ScrollAnimation>
                                    <Grid xs={12} sm={12} md={12}>
                                        <Typography align='center'>HELLO,</Typography>
                                    </Grid>
                                </ScrollAnimation>
                                <ScrollAnimation>
                                    <Grid xs={12} sm={12} md={12}>
                                        <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '30px' }} >I'm Monsoon Dibragede.</Typography>
                                    </Grid>
                                </ScrollAnimation>
                                <Grid width={isMobile ? '100%' : '50%'} xs={12} sm={12} md={12}>
                                    <ScrollAnimation>
                                        <Typography align='center' paddingTop={2} paddingBottom={2}>
                                            <Box component="span" sx={{ color: 'grey' }}>Senior software developer with excellent skills in architecting robust and scalable software applications.
                                                With a deep expertise in the</Box>
                                            <Box component="span" sx={{ fontWeight: 'bold' }}> MERN stack</Box>
                                            <Box component="span" sx={{ color: 'grey' }}>, I have developed numerous innovative projects using React and Node.js.
                                                My portfolio showcases a collection of cutting-edge applications that highlight my technical proficiency and creativity.
                                                Beyond web development, I am also passionate about Machine Learning and have contributed to various projects in this exciting field.</Box>
                                        </Typography>
                                        <img src={HeroImage} style={{ maxWidth: '100%', height: 'auto' }} />
                                    </ScrollAnimation>
                                </Grid>
                            </Box>
                            <Box mt='1rem'>
                                <Grid ml='10%' mr='10%' display='flex' flexDirection='column' gap={3}>
                                    <ScrollAnimation>
                                        <Grid xs={12} sm={12} md={12}>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Education</Typography>
                                        </Grid>
                                    </ScrollAnimation>
                                    <ScrollAnimation>
                                        <Grid display='flex' flexDirection='row' justifyContent='space-between' gap={2}>
                                            <Grid
                                                xs={12} sm={12} md={12}
                                                display='flex'
                                                flexDirection='column'
                                                justifyContent='center'
                                                alignItems='center'
                                                sx={{
                                                    height: '20vh',
                                                    background: 'linear-gradient(to bottom right, #F5F5F5, grey)',
                                                    borderRadius: '5px',
                                                    width: '80%'
                                                }}
                                            >
                                                <Typography align='center'>2016-2018</Typography>
                                                <Typography align='center' sx={{ fontWeight: 'bold' }}>Master of Technology</Typography>
                                                <Typography align='center'>Indian Institute of Technology, Madras</Typography>
                                            </Grid>
                                            <Grid
                                                xs={12} sm={12} md={12}
                                                display='flex'
                                                flexDirection='column'
                                                justifyContent='center'
                                                alignItems='center'
                                                sx={{
                                                    height: '20vh',
                                                    background: 'linear-gradient(to bottom right, #F5F5F5, grey)',
                                                    borderRadius: '5px',
                                                    width: '80%'
                                                }}
                                            >
                                                <Typography align='center'>2010-2014</Typography>
                                                <Typography align='center' sx={{ fontWeight: 'bold' }}>Bachelor of Technology</Typography>
                                                <Typography align='center'>Indian Institute of Technology, Bhubaneswar</Typography>
                                            </Grid>
                                        </Grid>
                                    </ScrollAnimation>
                                </Grid>
                            </Box>
                        </Box>
                    </ScrollAnimation>
                </Element>

                {/* ---------------Skills--------------  */}
                <Element name="skills">
                    <ScrollAnimation>
                        <Grid marginTop={8} paddingBottom='1rem' display='flex' flexDirection='column' backgroundColor='#FAF8F8'>
                            <Grid xs={12} sm={12} md={12} >
                                <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '50px' }}>Skills</Typography>
                            </Grid>
                            <Grid container marginTop={3} display='flex' flexDirection='row' justifyContent='center' alignItems='center' spacing={4}>
                                {skills.map((skill, index) => (
                                    <Grid item xs={6} sm={6} md={4} key={index} display='flex' justifyContent='center'>
                                        <SkillCard skill={skill} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </ScrollAnimation>
                </Element>

                {/* ---------------Projects--------------- */}
                <Element name="projects">
                    <ScrollAnimation>
                        <Grid container marginTop={8} display='flex' flexDirection='column' alignItems='center'>
                            <ScrollAnimation>
                                <Grid item xs={12} sm={12} md={12} display='flex' justifyContent='center'>
                                    <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '50px' }}>
                                        Projects
                                    </Typography>
                                </Grid>
                            </ScrollAnimation>
                            {projects.map((obj, index) => (
                                <ScrollAnimation>
                                    <Grid item key={index} xs={12} sm={12} md={12} display='flex' justifyContent='center' alignItems='center'>
                                        <ProjectCard projectNum={index} title={obj.title} image={obj.img} description={obj.description} />
                                    </Grid>
                                </ScrollAnimation>
                            ))}
                        </Grid>
                    </ScrollAnimation>
                </Element>

                {/* ---------------Contact--------------- */}
                {isMobile ? <Element name="contact">
                    <Grid backgroundColor='#FAF8F8'>
                        <Grid xs={12} sm={12} md={12}>
                            <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '50px' }}>Contact</Typography>
                        </Grid>
                        <Grid display='flex' flexDirection='column' >
                            <Grid xs={12} sm={12} md={12} display='flex' flexDirection='row' gap={2.5} justifyContent='center' alignItems='center'>
                                <IconButton>
                                    <EmailIcon fontSize='large' sx={{ color: '#F3C60B' }} />
                                </IconButton>
                                <Typography>monsoon.dibragede@gmail.com</Typography>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} display='flex' flexDirection='row' gap={2.5} justifyContent='center' alignItems='center'>
                                <IconButton href="https://www.linkedin.com/in/monsoon-dibragede-22077149/">
                                    <LinkedInIcon fontSize='large' sx={{ color: 'blue' }} />
                                </IconButton>
                                <Typography>
                                    Connect with me on <a href="https://www.linkedin.com/in/monsoon-dibragede-22077149/" target="_blank" rel="noopener noreferrer" style={{ color: '#0e76a8' }}>LinkedIn</a>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Element> : null}
            </Box>

            {/* Add more sections with Element components as needed */}
        </Grid>
    );
};
