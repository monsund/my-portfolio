'use client';
import { photos } from '@/lib/travel';
import { Box } from '@mui/material';
import Image from 'next/image';

// lightweight masonry using CSS columns
export default function PhotoMosaic() {
  return (
    <Box
      id="mosaic"
      sx={{
        columnCount: { xs: 1, sm: 2, md: 3 },
        columnGap: 16,
      }}
    >
      {photos.map((p, i) => (
        <Box
          key={i}
          sx={{
            breakInside: 'avoid',
            mb: 2,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 1,
          }}
        >
          <Image
            src={p.src}
            alt={p.alt ?? 'travel'}
            width={1080}
            height={720}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </Box>
      ))}
    </Box>
  );
}
