import { Box, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Element } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { NavMenu } from '../components/NavMenu';
import { SidebarMenu } from '../components/SidebarMenu';

import { SkillCard } from '../common/SkillCard';
import { ProjectCard } from '../common/ProjectCard';
import ScrollAnimation from '../common/ScrollAnimation';
import '../App.css';

import {colors} from '../utils/colorCode/colors';


import AboutPhoto from '../utils/images/AboutPhoto.png';
import PortFolioHero from '../utils/images/PortfolioHero.gif';
import PendoPlatform from '../utils/images/PendoPlatform.gif';
import ContractTool from '../utils/images/ContractTool.gif';
import StreamlinedProcesses from '../utils/images/StreamlinedProcesses.gif';
import WeatherForecast from '../utils/images/WeatherForecast.gif';

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
        image: ContractTool,
        description: 'This tool is designed to extract key information from any contract efficiently. With an integrated Machine Learning interface for document classification and clustering, the tool\'s efficiency and functionality are significantly enhanced. This advanced feature allows for precise organization and analysis of contract data, making it an invaluable asset for managing large volumes of legal documents.',
        techStack: 'Node.js, React.js, Redux, MongoDB, Redis, Amazon Congnito, Natural Language Processing, AWS'
    },
    {
        title: 'Pendo: Property Management',
        image: PendoPlatform,
        description: 'Pendo is a comprehensive property management platform that empowers landlords to list their properties online, find and onboard tenants seamlessly, and manage over USD 2 million in monthly transactions. From tenant verification to onboarding, and from rent collection to disbursement to landlords, Pendo streamlines the entire process through a user-friendly online interface.',
        techStack: 'Node.js, React.js, Redux, MongoDB, Redis, AWS SQS, AWS S3, Mandrill, Payment Gateways'
    },
    {
        title: 'Streamlined Manufacturing Units',
        image: StreamlinedProcesses,
        description: 'This platform is designed to streamline the various processes involved in a Battery Manufacturing Unit by seamlessly integrating multiple micro applications. It optimizes raw material management, maintains efficient workflows, and monitors assembly lines to ensure quality control at every stage. The platform facilitates real-time inventory tracking, automates order processing, and enhances supply chain coordination, significantly improving operational efficiency and productivity.',
        techStack: 'React.js, Redux, .Net, Webpack Module Federation, Storybook, MySQL, Kafka, AWS'
    },
    {
        title: 'Weather Forecaster',
        image: WeatherForecast,
        description: 'Weather Forecaster is a powerful tool for predicting weather conditions in any location. Leveraging Accuweather\'s APIs, it provides accurate forecasts and displays the results with a beautiful user interface. The application categorizes various weather conditions such as sunny, partly cloudy, cloudy, and rainy, offering users a clear and detailed weather overview.',
        techStack: 'React.js, Node.js, MongoDB'
    }
]

export const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const menuItems = [
        { name: 'Home', to: 'home' },
        { name: 'Intro', to: 'intro' },
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
                {/* ---------------Home section---------------*/}
                <Element name="home">
                    <Grid container display='flex' justifyContent='center' alignItems='center' backgroundColor='#FAF8F8'>
                        <Grid item xs={12} sm={12} md={6} justifyContent='center'>
                            {!isMobile ?
                                <Typography align='center' >
                                    <Box component="span" sx={{ fontSize: '3rem', color: colors.lightGrey }}>Craft the </Box>
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
                                    <Box component="span" sx={{ color: colors.lightGrey }}>Craft the </Box>
                                    <Box component="span" sx={{
                                        fontSize: '1.2rem',
                                        backgroundImage: 'linear-gradient(45deg, #C7DE0D 30%, #F22003 90%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>
                                        Future of Technology
                                    </Box>
                                    <Box component="span" sx={{ color: colors.lightGrey }}>, <br></br>one line of code at a time.</Box>
                                </Typography>}
                            <Grid display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginTop={isMobile ? 0 : 5}>
                                <Typography
                                    align='center'
                                    sx={{
                                        fontSize: isMobile ? '1rem' : '2rem',
                                        color: colors.darkGrey,
                                    }}
                                >Website built in React</Typography>
                                <Typography
                                    align='center'
                                    sx={{
                                        fontSize: isMobile ? '.6rem' : '1rem',
                                        // backgroundImage: 'linear-gradient(45deg, #F90C01 30%, #6BFC05 90%)',
                                        // WebkitBackgroundClip: 'text',
                                        // WebkitTextFillColor: 'transparent'
                                        color: colors.white,
                                        background: colors.yellow,
                                        borderRadius: '5px',
                                        marginBottom: '5px',
                                        padding: '5px'
                                    }}
                                >Monsoon Dibragede | Full Stack Developer</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center' marginTop={isMobile ? 5 : 0}>
                            <img src={PortFolioHero} style={{ maxWidth: '100%', height: isMobile ? '15rem' : '20rem' }} />
                        </Grid>
                    </Grid>
                </Element>

                {/* ---------------Intro section-------------------*/}
                <Element name="intro">
                    <ScrollAnimation>
                        <Box marginTop={8} backgroundColor='white'>
                            <Box marginTop={3} height='100%' display='flex' flexDirection='column' alignItems='center'>
                                <ScrollAnimation>
                                    <Grid xs={12} sm={12} md={12}>
                                        <Typography align='center' sx={{ color: colors.lightGrey }}>HELLO,</Typography>
                                    </Grid>
                                </ScrollAnimation>
                                <ScrollAnimation>
                                    <Grid xs={12} sm={12} md={12}>
                                        <Typography align='center' sx={{ fontWeight: 'bold', fontSize: '30px', color: colors.lightGrey  }} >I'm Monsoon Dibragede.</Typography>
                                    </Grid>
                                </ScrollAnimation>
                                <Grid width={isMobile ? '100%' : '50%'} xs={12} sm={12} md={12}>
                                    <ScrollAnimation>
                                        <Typography align='center' paddingTop={2} paddingBottom={2}>
                                            <Box component="span" sx={{ color: colors.lightGrey }}>Senior software developer with excellent skills in architecting robust and scalable software applications.
                                                With a deep expertise in the</Box>
                                            <Box component="span" sx={{ fontWeight: 'bold' }}> MERN stack</Box>
                                            <Box component="span" sx={{ color: colors.lightGrey }}>, I have developed numerous innovative projects using React and Node.js.
                                                My portfolio showcases a collection of cutting-edge applications that highlight my technical proficiency and creativity.
                                                Beyond web development, I am also passionate about Machine Learning and have contributed to some projects in this exciting field.</Box>
                                        </Typography>
                                        <img src={AboutPhoto} style={{ maxWidth: '100%', height: 'auto' }} />
                                    </ScrollAnimation>
                                </Grid>
                            </Box>
                            <Box mt='1rem'>
                                <Grid ml='5%' mr='5%' display='flex' flexDirection='column' gap={1}>
                                    <ScrollAnimation>
                                        <Grid xs={12} sm={12} md={12}>
                                            <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: colors.lightGrey }}>Education</Typography>
                                        </Grid>
                                    </ScrollAnimation>
                                    <ScrollAnimation>
                                        <Grid display='flex' flexDirection='column' justifyContent='space-between' gap={2}>
                                            <Grid
                                                xs={12} sm={12} md={12}
                                                display='flex'
                                                flexDirection='row'
                                                justifyContent='center'
                                                alignItems='center'
                                                gap={2}
                                                sx={{
                                                    height: '100%',
                                                    background: `linear-gradient(to bottom right, #F5F5F5, ${colors.lightGrey})`,
                                                    borderRadius: '5px',
                                                    width: '100%',
                                                    paddingTop: '5px',
                                                    paddingBottom: '5px'
                                                }}
                                            >
                                                <Typography align='center' sx={{ fontWeight: 'bold', fontSize: isMobile ? 'small' : 'medium' }}>{'Master of Technology'}</Typography>
                                                <Typography align='center' sx={{fontSize: isMobile ? 'small' : 'medium'}}>{'Indian Institute of Technology, Madras'}</Typography>
                                                <Typography align='center' sx={{fontSize: isMobile ? 'small' : 'medium'}}>2016-2018</Typography>
                                            </Grid>
                                            <Grid
                                                xs={12} sm={12} md={12}
                                                display='flex'
                                                flexDirection='row'
                                                justifyContent='center'
                                                alignItems='center'
                                                gap={2}
                                                sx={{
                                                    height: '100%',
                                                    background: `linear-gradient(to bottom right, #F5F5F5, ${colors.lightGrey})`,
                                                    borderRadius: '5px',
                                                    width: '100%',
                                                    paddingTop: '5px',
                                                    paddingBottom: '5px'
                                                }}
                                            >
                                                <Typography align='center' sx={{ fontWeight: 'bold', fontSize: isMobile ? 'small' : 'medium' }}>Bachelor of Technology</Typography>
                                                <Typography align='center'sx={{fontSize: isMobile ? 'small' : 'medium'}}>Indian Institute of Technology, Bhubaneswar</Typography>
                                                <Typography align='center'sx={{fontSize: isMobile ? 'small' : 'medium'}} >2010-2014</Typography>
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
                                        <ProjectCard projectNum={index} {...obj} />
                                        {/* <ProjectCard projectNum={index} title={obj.title} image={obj.img} description={obj.description} /> */}
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
