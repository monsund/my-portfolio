import { Grid, Typography } from "@mui/material";

export const ProjectCard = ({ projectNum, image, description }) => {
    const isEven = projectNum % 2 === 0;
    return (
        <Grid container display='flex' flexDirection='row' justifyContent='center' alignItems='center' marginTop={5} marginBottom={5}>
            <Grid item xs={12} sm={12} md={6} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                {isEven ? (
                    <img src={image} alt="Project" style={{ maxWidth: '80%', height: 'auto' }} />
                ) : (
                    <Typography align="center">{description}</Typography>
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={6} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                <Typography>
                    {!isEven ? (
                        <img src={image} alt="Project" style={{ maxWidth: '80%', height: 'auto' }} />
                    ) : (
                        <Typography align="center">{description}</Typography>
                    )}
                </Typography>
            </Grid>
        </Grid>
    );
}