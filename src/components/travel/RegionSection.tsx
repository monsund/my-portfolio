import { Box, Paper, Typography } from '@mui/material';
import Image from 'next/image';

type Photo = {
  src: string;
  alt: string;
  title?: string;
};

type RegionSectionProps = {
  photos: Photo[];
};

export default function RegionSection({ photos }: RegionSectionProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: 2,
      }}
    >
      {photos.map(photo => (
        <Paper
          key={photo.src}
          elevation={2}
          sx={{
            overflow: 'hidden',
            borderRadius: 2,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 4,
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/3',
              overflow: 'hidden',
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Box sx={{ p: 1.5 }}>
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{
                color: 'text.primary',
                textAlign: 'center',
              }}
            >
              {photo.title}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}
