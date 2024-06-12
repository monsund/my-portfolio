import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { colors } from "../utils/colorCode/colors";

export const ProjectCard = ({ projectNum, title, image, description, techStack }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isEven = projectNum % 2 === 0;
    return (
        <Grid container display='flex' justifyContent='center' alignItems='center' marginTop={isMobile ? 2 : 5} marginBottom={5}>
            {isMobile ? (
                <Grid display='flex' flexDirection='column' gap={3}>
                    <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center' alignItems='center'>
                        <Grid>
                            <Typography align="center" sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>{`${projectNum + 1}. ${title}`}</Typography>
                            <Typography align="center" sx={{ color: colors.darkGrey }}>{description}</Typography>
                            <Typography align="center">
                                <Box sx={{ fontWeight: 'bold', marginTop: '2vh' }}>
                                    {'Techonology: '}
                                    <Typography color={colors.lightGrey} sx={{ fontSize: 'small' }}>{techStack}</Typography>
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center' alignItems='center'>
                        <img src={image} alt="Project" style={{ maxWidth: '80%', height: 'auto' }} />
                    </Grid>
                </Grid>
            ) : (
                <>
                    <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center' alignItems='center'>
                        {isEven ? (
                            <img src={image} alt="Project" style={{ maxWidth: '80%', height: 'auto' }} />
                        ) : (
                            <Grid>
                                <Typography align="center" style={{color: colors.darkGrey}} sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>{`${projectNum + 1}. ${title}`}</Typography>
                                <Typography align="center" style={{color: colors.lightGrey}}>{description}</Typography>
                                <Typography align="center">
                                    <Box sx={{ fontWeight: 'bold', marginTop: '2vh', color: colors.darkGrey }}>
                                        {'Techonology: '}
                                        <Typography style={{color: colors.lightGrey}} sx={{ fontSize: 'small' }}>{techStack}</Typography>
                                    </Box>
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center' alignItems='center'>
                        {isEven ? (
                            <Grid>
                                <Typography align="center" style={{color: colors.darkGrey}} sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>{`${projectNum + 1}. ${title}`}</Typography>
                                <Typography style={{color: colors.lightGrey}} align="center">{description}</Typography>
                                <Typography align="center">
                                    <Box sx={{ fontWeight: 'bold', marginTop: '2vh', color: colors.darkGrey }}>
                                        {'Techonology: '}
                                        <Typography style={{color: colors.lightGrey}} sx={{ fontSize: 'small' }}>{techStack}</Typography>
                                    </Box>
                                </Typography>
                            </Grid>
                        ) : (
                            <img src={image} alt="Project" style={{ maxWidth: '80%', height: 'auto' }} />
                        )}
                    </Grid>
                </>
            )}
        </Grid>
    );
}
