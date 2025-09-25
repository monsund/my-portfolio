'use client';
import { countries } from '@/lib/travel';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';

export default function TravelHero() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f6f8fb 100%)',
      }}
    >
      <Container>
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{ letterSpacing: '-.01em', mb: 1 }}
        >
          Journeys & Explorations
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2, maxWidth: '72ch' }}>
          Stories and snapshots from my journeys across{' '}
          <strong>10+ countries</strong> — from the fjords of Iceland and Norway
          to the Alps of Austria and Switzerland, and vibrant cultures of
          Vietnam, Kazakhstan, and India’s Himalayan & Northeast regions.
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
          sx={{ mb: 2 }}
        >
          {countries.map(c => (
            <Chip key={c} label={c} size="small" />
          ))}
        </Stack>

        <Stack direction="row" spacing={1.5}>
          <Button variant="contained" href="#stories">
            View Stories
          </Button>
          <Button variant="outlined" href="#mosaic">
            See Photos
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
