import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function Hero() {
  return (
    <Container sx={{ py: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
          gap: { xs: 4, md: 6 },
          alignItems: 'center',
        }}
      >
        {/* Left: Text */}
        <Box>
          {/* Line 1: gradient "Build · Explore" */}
          <Typography
            component="h1"
            sx={{
              m: 0,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-.02em',
              fontSize: {
                xs: 'clamp(36px, 8vw, 56px)',
                md: 'clamp(56px, 6vw, 72px)',
              },
              backgroundImage:
                'linear-gradient(90deg, #0ea5e9 0%, #8b5cf6 60%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            Build · Explore
          </Typography>

          {/* Line 2: solid "Unwind" */}
          <Typography
            component="div"
            sx={{
              mt: { xs: 0.5, md: 0.75 },
              fontWeight: 900,
              letterSpacing: '-.02em',
              lineHeight: 1.06,
              fontSize: {
                xs: 'clamp(36px, 8vw, 56px)',
                md: 'clamp(56px, 6vw, 72px)',
              },
              color: 'text.primary',
            }}
          >
            Unwind
          </Typography>

          {/* Subtitle: “Full-stack developer · Traveler · Avid hobbyist” */}
          <Typography
            color="text.secondary"
            sx={{
              mt: 1.25,
              mb: 2.5,
              fontSize: { xs: 14, md: 22 },
            }}
          >
            Full-stack developer · Traveler · Avid hobbyist
          </Typography>

          <Stack direction="row" spacing={1.5}>
            <Button
              component="a"
              href="/work"
              variant="contained"
              color="primary"
            >
              View My Work
            </Button>
            {/* <Button component="a" href="/contact" variant="outlined">
              Contact
            </Button> */}
          </Stack>
        </Box>

        {/* Right: code card (kept as-is; tweak size if you like) */}
        <Box
          sx={{
            position: 'relative',
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 16px 32px rgba(0,0,0,.12)',
            minHeight: { xs: 180, md: 260 },
          }}
        >
          <Image
            src="/images/hero-image.jpg"
            alt="Hero Image"
            width={600}
            height={400}
            priority
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
