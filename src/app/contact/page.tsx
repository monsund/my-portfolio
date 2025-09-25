'use client';
import { Cloud, Email, GitHub, LinkedIn } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link as MLink,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FormEvent, useState } from 'react';

// export const metadata: Metadata = {
//   title: 'Contact — Monsoon Dibragede',
//   description:
//     'Get in touch about full-stack projects, AI agents, or collaborations. Email, LinkedIn, GitHub and a quick contact form.',
// };

export default function ContactPage() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // basic validation
    // if (!form.name || !form.email || !form.message) {
    //   setError('Please fill in your name, email, and a short message.');
    //   return;
    // }
    // setSubmitting(true);
    // try {
    //   const res = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   });
    //   if (!res.ok) throw new Error('Failed to send');
    //   setOpen(true);
    //   setForm({ name: '', email: '', message: '' });
    // } catch (err: any) {
    //   setError('Could not send your message. Please try again.');
    // } finally {
    //   setSubmitting(false);
    // }
  };

  const CTA = ({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: React.ReactNode;
    label: string;
  }) => (
    <Button
      variant="outlined"
      startIcon={icon}
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noopener noreferrer"
      sx={{
        borderRadius: 2,
        px: 2.2,
        py: 1.1,
        minWidth: 180,
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
      }}
    >
      {label}
    </Button>
  );

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        {/* Hero */}
        <Typography
          variant="h3"
          fontWeight={900}
          sx={{ letterSpacing: '-.01em' }}
        >
          Let’s work together
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ mt: 1, mb: 4, maxWidth: '78ch' }}
        >
          Have a problem worth solving or want to collaborate? I build resilient
          products and AI agents. Reach out via the form or any of the links
          below.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
            gap: 3,
          }}
        >
          {/* Contact form */}
          <Box>
            <Card
              variant="outlined"
              sx={{ boxShadow: '0 8px 24px rgba(16,24,40,.06)' }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                <Typography variant="h6" fontWeight={800} sx={{ mb: 1.5 }}>
                  Send a message
                </Typography>
                <Box component="form" onSubmit={onSubmit}>
                  <Stack spacing={2}>
                    <TextField
                      label="Your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      fullWidth
                    />
                    <TextField
                      label="Your email"
                      type="email"
                      value={form.email}
                      onChange={e =>
                        setForm({ ...form, email: e.target.value })
                      }
                      fullWidth
                    />
                    <TextField
                      label="Message"
                      value={form.message}
                      onChange={e =>
                        setForm({ ...form, message: e.target.value })
                      }
                      fullWidth
                      multiline
                      minRows={5}
                    />
                    {error && (
                      <Alert severity="warning" onClose={() => setError(null)}>
                        {error}
                      </Alert>
                    )}
                    <Stack direction="row" spacing={1.5}>
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={submitting}
                      >
                        {submitting ? 'Sending…' : 'Send'}
                      </Button>
                      <Button
                        type="button"
                        variant="outlined"
                        onClick={() =>
                          setForm({ name: '', email: '', message: '' })
                        }
                      >
                        Reset
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Direct links */}
          <Box>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                boxShadow: '0 8px 24px rgba(16,24,40,.06)',
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                <Typography variant="h6" fontWeight={800} sx={{ mb: 1.5 }}>
                  Connect
                </Typography>
                <Stack spacing={2} sx={{ mb: 2 }}>
                  <Typography color="text.secondary">
                    Prefer email or social? Pick one of these:
                  </Typography>
                  <CTA
                    href="mailto:monsoon.dibragede@gmail.com"
                    icon={<Email />}
                    label="Email Me"
                  />
                  <CTA
                    href="https://github.com/your-username"
                    icon={<GitHub />}
                    label="GitHub"
                  />
                  <CTA
                    href="https://www.linkedin.com/in/your-handle/"
                    icon={<LinkedIn />}
                    label="LinkedIn"
                  />
                  <CTA
                    href="https://your-projects.vercel.app"
                    icon={<Cloud />}
                    label="Live Projects"
                  />
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  Or book time directly via{' '}
                  <MLink
                    href="https://cal.com/your-handle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cal.com
                  </MLink>{' '}
                  (optional).
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* success toast */}
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
        >
          <Alert
            severity="success"
            variant="filled"
            onClose={() => setOpen(false)}
          >
            Thanks! I’ll get back to you shortly.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
