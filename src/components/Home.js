import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Link, Element } from 'react-scroll';
import HeroImage from '../utils/Basics.png';
import PortFolioHero from '../utils/PortfolioHero.gif';
import DemoGIF from '../utils/demoGIF.gif';
import { SkillCard } from '../common/SkillCard';
import { ProjectCard } from '../common/ProjectCard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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
        img: HeroImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor sit amet felis bibendum tincidunt. Suspendisse potenti; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus lacinia odio vitae vestibulum vestibulum.'
    },
    {
        img: DemoGIF,
        description: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor sit amet felis bibendum tincidunt. Suspendisse potenti; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus lacinia odio vitae vestibulum vestibulum.'
    },
    {
        img: HeroImage,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor sit amet felis bibendum tincidunt. Suspendisse potenti; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus lacinia odio vitae vestibulum vestibulum.'
    },
    {
        img: DemoGIF,
        description: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor sit amet felis bibendum tincidunt. Suspendisse potenti; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus lacinia odio vitae vestibulum vestibulum.'
    }
]

export const Home = () => {

    return (
        <Box display='flex' flexDirection='row'>
            {/* <Box width='40%' position='fixed' height='100%'> */}
            <Box width='20%' position='fixed' backgroundColor='white' height='100%'>
                <nav>
                    <ul>
                        <li>
                            <Link to="intro" smooth={true} duration={500}>Introduction</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500}>Skills</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>
            </Box>

            {/***
             * Main contents *************
             */}

            <Box width='100%' ml='20%' position='relative' overflow='auto'>
                <Element name="intro">
                    <Grid container display='flex' justifyContent='space-between' alignItems='center' backgroundColor='#EBECF0'>
                        <Grid item xs={12} sm={12} md={6} justifyContent='center'>
                            <Typography align='center' >
                                <Box component="span" sx={{ fontSize: '4rem', color: 'black' }}>Craft the </Box>
                                {/* {' the '} */}
                                <Box component="span" sx={{ fontSize: '5rem', color: '#F3C60B' }}>Future of Technology</Box>
                                <Box component="span" sx={{ fontSize: '3rem', color: 'black' }}>, one line of code at a time.</Box>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center'>
                            <img src={PortFolioHero} style={{ maxWidth: '100%', height: '30rem' }} />
                        </Grid>
                    </Grid>
                </Element>

                {/* -------About section -------*/}
                <Element name="about">
                    <Box marginTop={8}>
                        <Grid xs={12} sm={12} md={12}>
                            <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '50px' }}>About</Typography>
                        </Grid>
                        <Box marginTop={3} height='100%' display='flex' flexDirection='column' alignItems='center'>
                            <Grid xs={12} sm={12} md={12}>
                                <Typography align='center'>HELLO,</Typography>
                            </Grid>
                            <Grid xs={12} sm={12} md={12}>
                                <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '30px' }} >I'm Monsoon Dibragede.</Typography>
                            </Grid>
                            <Grid width='50%' xs={12} sm={12} md={12}>
                                <Typography align='center'>Senior software developer with excellent skills in architecting robust and scalable software applications.
                                    With a deep expertise in the MERN stack, I have developed numerous innovative projects using React and Node.js.
                                    My portfolio showcases a collection of cutting-edge applications that highlight my technical proficiency and creativity.
                                    Beyond web development, I am also passionate about Machine Learning and have contributed to various projects in this exciting field.
                                </Typography>
                                <img src={HeroImage} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Grid>
                        </Box>
                        <Box mt='1rem'>
                            <Grid ml='10%' mr='10%' display='flex' flexDirection='column' gap={3}>
                                <Grid xs={12} sm={12} md={12}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Education</Typography>
                                </Grid>
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
                            </Grid>
                        </Box>
                    </Box>
                </Element>

                {/* ---------------Skills-------------- */}
                <Element name="skills">
                    <Grid ml='10%' mr='10%' marginTop={8} paddingBottom='1rem' backgroundColor='#EBECF0'>
                        <Grid xs={12} sm={12} md={12} >
                            <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '50px' }}>Skills</Typography>
                        </Grid>
                        <Grid marginTop={3} display='flex' flexDirection='row' justifyContent='space-between'>
                            <Grid container spacing={4}>
                                {skills.map((skill, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <SkillCard skill={skill} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Element>

                {/* Projects */}
                <Element name="projects">
                    <Grid ml='10%' mr='10%' marginTop={8}>
                        <Typography xs={12} sm={12} md={12} align='center' sx={{ fontWeight: 'bold', fontSize: '50px' }}>Projects</Typography>
                        {/* </Box> */}
                        {projects.map((obj, index) => (
                            <Grid key={index}>
                                <ProjectCard projectNum={index} image={obj.img} description={obj.description} />
                            </Grid>
                        ))}
                    </Grid>
                </Element>

                <Element name="contact">
                    <Grid backgroundColor='#EBECF0'>
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
                </Element>
            </Box>
            {/* Add more sections with Element components as needed */}
        </Box>
    );
};
