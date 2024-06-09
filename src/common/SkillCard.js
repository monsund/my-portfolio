import { Box, Typography } from "@mui/material"

export const SkillCard = ({skill}) => {
    return (
        <Box
            display='flex'
            alignItems='center'
            sx={{
                height: '20vh',
                background: 'linear-gradient(to bottom right, #F5F5F5, grey)',
                borderRadius: '5px',
                width: '30vh'
            }}
        >
            <Typography align='center' sx={{ fontSize: '20px', textAlign: 'center' }}>{skill}</Typography>
        </Box>
    )
}