'use client';
import GradientText from '@/components/GradientText';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/travel', label: 'Travel' },
  //   { href: '/leisure', label: 'Leisure' },
];

export default function Nav() {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ p: 2 }}>
        <GradientText variant="h6">Monsoon.dev</GradientText>
      </Box>
      <List>
        {links.map(link => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton
              component={Link}
              href={link.href}
              sx={{
                textAlign: 'center',
                py: 1.5,
                bgcolor: isActive(link.href)
                  ? 'rgba(14,165,233,.12)'
                  : 'transparent',
                color: isActive(link.href) ? 'text.primary' : 'text.secondary',
              }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar>
        <Container maxWidth={false} sx={{ maxWidth: 1200 }}>
          <Toolbar
            disableGutters
            sx={{ height: 64, justifyContent: 'space-between' }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <GradientText variant="h6">Monsoon.dev</GradientText>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
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
                      color: isActive(l.href)
                        ? 'text.primary'
                        : 'text.secondary',
                    }}
                  >
                    {l.label}
                  </Button>
                ))}
              </Stack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
