import { Box, Grid, Typography } from '@mui/material';
import { Link, Element } from 'react-scroll';
import HeroImage from '../utils/Basics.png';
import DemoGIF from '../utils/demoGIF.gif';
import { SkillCard } from '../common/SkillCard';
import { ProjectCard } from '../common/ProjectCard';

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
            <Box width='20%' position='fixed' backgroundColor='grey' height='100%'>
                <nav>
                    <ul>
                        <li>
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500}>Skills</Link>
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
                <Element name="home">
                    {/* <section style={{ height: '100vh', backgroundColor: 'lightblue' }}> */}
                    {/* <h1>Section 1</h1> */}
                    <img src={HeroImage} style={{ maxWidth: '100%', height: 'auto' }} />
                    {/* </section> */}
                </Element>
                <Element name="about">
                    <Box>
                        <Box height='100%' mt='100px' display='flex' flexDirection='column' alignItems='center'>
                            <Typography >HELLO</Typography>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '30px' }} >I'm Monsoon Dibragede.</Typography>
                            <Box width='50%'>
                                <Typography align='center'>Senior software developer with excellent skills in architecting robust and scalable software applications.
                                    With a deep expertise in the MERN stack, I have developed numerous innovative projects using React and Node.js.
                                    My portfolio showcases a collection of cutting-edge applications that highlight my technical proficiency and creativity.
                                    Beyond web development, I am also passionate about Machine Learning and have contributed to various projects in this exciting field.
                                </Typography>
                                <img src={HeroImage} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Box>
                        </Box>
                        <Box mt='50px'>
                            <Box ml='10%' mr='10%'>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '50px' }}>Education</Typography>
                                <Box display='flex' flexDirection='row' justifyContent='space-between'>
                                    <Box display='flex' flexDirection='column'>
                                        <Typography>2016-2018</Typography>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '30px' }}>Master of Technology</Typography>
                                        <Typography>Indian Institute of Technology, Madras</Typography>
                                    </Box>
                                    <Box display='flex' flexDirection='column'>
                                        <Typography>2010-2014</Typography>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '30px' }}>Bachelor of Technology</Typography>
                                        <Typography>Indian Institute of Technology, Bhubaneswar</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Element>

                {/* ---------------Skills-------------- */}
                <Element name="skills">
                    <Box ml='10%' mr='10%'>
                        <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '50px' }}>Skills</Typography>
                        <Box display='flex' flexDirection='row' justifyContent='space-between'>
                            <Grid container spacing={4}>
                                {skills.map((skill, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <SkillCard skill={skill} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Element>

                {/* Projects */}
                <Element>
                    <Box ml='10%' mr='10%'>
                        <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '50px' }}>Projects</Typography>
                    {/* </Box> */}
                    {projects.map((obj, index) => (
                        <Grid key={index}>
                            <ProjectCard projectNum={index} image={obj.img} description={obj.description} />
                        </Grid>
                    ))}
                    </Box>
                </Element>

                <Element name="contact">
                    <Box>

                    </Box>
                </Element>
            </Box>
            {/* Add more sections with Element components as needed */}
        </Box>
    );
};
