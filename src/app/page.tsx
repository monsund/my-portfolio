import ExploreRows from '@/components/ExploreRows';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Skills from '@/components/Skills';
import { Cloud, Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';

const ctaSx = {
  borderRadius: 2,
  px: { xs: 1.5, sm: 2.2 },
  py: 1.1,
  minWidth: { xs: 140, sm: 180 }, // responsive uniform width
  borderColor: '#dfe7f5',
  bgcolor: '#ffffff',
  boxShadow: '0 8px 20px rgba(0,0,0,.06)',
  textTransform: 'none',
  fontWeight: 600,
  transition: 'transform .15s ease, box-shadow .2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 28px rgba(0,0,0,.10)',
    borderColor: '#cfe7fb',
    bgcolor: '#fff',
  },
};

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        title="Explore My World"
        description={
          <>
            Discover my professional work, travel adventures, and personal{' '}
            <strong>interests</strong> across three main areas.
          </>
        }
        dense
      >
        <ExploreRows />
      </Section>

      <Section title="Skills">
        <Skills />
      </Section>

      <Section title="Education">
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
            },
          }}
        >
          <Box
            sx={{
              p: 2.5,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              bgcolor: 'background.paper',
              boxShadow: 1,
            }}
          >
            <Box sx={{ fontWeight: 700, fontSize: '1.2rem', mb: 0.5 }}>
              B.Tech – Indian Institute of Technology (IIT) Bhubaneswar
            </Box>
            <Box sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
              Graduated with a strong engineering foundation, later
              transitioning into software development and product building.
            </Box>
          </Box>

          <Box
            sx={{
              p: 2.5,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              bgcolor: 'background.paper',
              boxShadow: 1,
            }}
          >
            <Box sx={{ fontWeight: 700, fontSize: '1.2rem', mb: 0.5 }}>
              M.Tech – Indian Institute of Technology (IIT) Madras
            </Box>
            <Box sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
              Advanced engineering education with a focus on problem-solving and
              automation, paving the path toward building scalable software
              systems.
            </Box>
          </Box>
        </Box>
      </Section>

      <Section
        title="Connect With Me"
        description="Explore my code, check live deployments, or say hello."
        dense
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            mt: 1,
            width: '100%',
            maxWidth: '100%',
            flexWrap: 'wrap',
          }}
        >
          <Button
            variant="outlined"
            startIcon={<GitHub sx={{ fontSize: 20 }} />}
            href="https://github.com/monsund/stock-pilot"
            target="_blank"
            rel="noopener noreferrer"
            sx={ctaSx}
          >
            GitHub
          </Button>

          <Button
            variant="outlined"
            startIcon={<LinkedIn sx={{ fontSize: 20 }} />}
            href="https://www.linkedin.com/in/monsoon-dibragede-22077149/"
            target="_blank"
            rel="noopener noreferrer"
            sx={ctaSx}
          >
            LinkedIn
          </Button>

          <Button
            variant="outlined"
            startIcon={<Cloud sx={{ fontSize: 20 }} />}
            href="https://stock-pilot-frontend.vercel.app/" // or your Vercel org
            target="_blank"
            rel="noopener noreferrer"
            sx={ctaSx}
          >
            Vercel
          </Button>

          <Button
            variant="outlined"
            startIcon={<Email sx={{ fontSize: 20 }} />}
            href="mailto:monsoon.dibragede@gmail.com"
            sx={ctaSx}
          >
            Email Me
          </Button>
        </Stack>
      </Section>
    </>
  );
}
