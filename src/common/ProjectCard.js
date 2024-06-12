import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

export const ProjectCard = ({ projectNum, title, image, description }) => {
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
                            <Typography align="center">{description}</Typography>
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
                                <Typography align="center" sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>{`${projectNum + 1}. ${title}`}</Typography>
                                <Typography align="center">{description}</Typography>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} display='flex' justifyContent='center' alignItems='center'>
                        {isEven ? (
                            <Grid>
                                <Typography align="center" sx={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>{`${projectNum + 1}. ${title}`}</Typography>
                                <Typography align="center">{description}</Typography>
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
