import {
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Card as MUICard,
  Typography,
} from '@mui/material';
import Link from 'next/link';

type Props = {
  href: string;
  cover: string;
  title: string;
  summary: string;
  category: 'work' | 'travel' | 'leisure';
};

const chipSx = (cat: Props['category']) =>
  cat === 'work'
    ? { bgcolor: '#eff6ff', color: '#1d4ed8', borderColor: '#bfdbfe' }
    : cat === 'travel'
      ? { bgcolor: '#ecfeff', color: '#0f766e', borderColor: '#99f6e4' }
      : { bgcolor: '#fff7ed', color: '#b45309', borderColor: '#fde68a' };

export default function Card({ href, cover, title, summary, category }: Props) {
  return (
    <MUICard>
      <CardActionArea component={Link} href={href} sx={{ display: 'block' }}>
        <CardMedia
          component="img"
          height={180}
          image={cover}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Chip
            label={category.toUpperCase()}
            size="small"
            variant="outlined"
            sx={{ ...chipSx(category), borderRadius: 999, mb: 0.5 }}
          />
          <Typography variant="subtitle1" fontWeight={700}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
}
