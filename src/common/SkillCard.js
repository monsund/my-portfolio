import { Box, Typography } from "@mui/material"
import { colors } from "../utils/colorCode/colors"

export const SkillCard = ({skill}) => {
    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{
                height: '20vh',
                background: `linear-gradient(to bottom right, #F5F5F5, ${colors.lightGrey})`,
                borderRadius: '5px',
                width: '100%'
            }}
        >
            <Typography align='center' sx={{ fontSize: '20px', textAlign: 'center' }}>{skill}</Typography>
        </Box>
    )
}