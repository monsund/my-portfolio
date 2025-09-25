'use client';
import GradientText from '@/components/GradientText';
import { AppBar, Button, Container, Stack, Toolbar } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/travel', label: 'Travel' },
  //   { href: '/leisure', label: 'Leisure' },
  //   { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <AppBar>
      <Container maxWidth={false} sx={{ maxWidth: 1200 }}>
        <Toolbar
          disableGutters
          sx={{ height: 64, justifyContent: 'space-between' }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <GradientText variant="h6">Monsoon.dev</GradientText>
          </Link>
          <Stack direction="row" spacing={1}>
            {links.map(l => (
              <Button
                key={l.href}
                component={Link}
                href={l.href}
                size="small"
                variant={isActive(l.href) ? 'outlined' : 'text'}
                sx={{
                  borderRadius: 2,
                  bgcolor: isActive(l.href)
                    ? 'rgba(14,165,233,.12)'
                    : 'transparent',
                  borderColor: isActive(l.href) ? '#cfe7fb' : 'transparent',
                  color: isActive(l.href) ? 'text.primary' : 'text.secondary',
                }}
              >
                {l.label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
