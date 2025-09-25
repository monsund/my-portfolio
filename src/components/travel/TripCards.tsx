'use client';
import { trips } from '@/lib/travel';
import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function TripCards() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        },
        gap: 3,
      }}
    >
      {trips.map(t => (
        <Paper
          key={t.slug}
          component={Link}
          href={`/travel/itinerary/${t.slug}`}
          sx={{
            textDecoration: 'none',
            overflow: 'hidden',
            transition: 'transform .15s ease, box-shadow .2s ease',
            '&:hover': { transform: 'translateY(-3px)', boxShadow: 3 },
          }}
        >
          <Box
            sx={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}
          >
            <Image
              src={t.cover}
              alt={t.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" fontWeight={700}>
              {t.title}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ my: 0.5 }}>
              <Chip label={`${t.days} days`} size="small" />
              <Chip label={t.region} size="small" />
            </Stack>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {t.highlights.map(h => (
                <Chip key={h} label={h} size="small" variant="outlined" />
              ))}
            </Stack>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}
