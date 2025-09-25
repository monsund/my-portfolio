import { Box, Container, Typography } from '@mui/material';
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 4,
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: '#f6f8fb',
      }}
    >
      <Container>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Monsoon Dibragede — Built with Next.js +
          MUI
        </Typography>
      </Container>
    </Box>
  );
}
