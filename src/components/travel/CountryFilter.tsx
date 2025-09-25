'use client';
import { Chip, Stack } from '@mui/material';
import { useState } from 'react';

const filters = [
  'All',
  'Europe',
  'Asia',
  'India North',
  'India Northeast',
] as const;

export default function CountryFilter() {
  const [active, setActive] = useState<(typeof filters)[number]>('All');

  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {filters.map(f => (
        <Chip
          key={f}
          label={f}
          onClick={() => setActive(f)}
          sx={{
            borderRadius: 999,
            ...(active === f
              ? {
                  bgcolor: 'primary.main',
                  color: '#fff',
                  borderColor: 'primary.main',
                }
              : { bgcolor: '#fff' }),
          }}
          variant="outlined"
          clickable
        />
      ))}
    </Stack>
  );
}
