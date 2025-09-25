import ThemeRegistry from '@/app/ThemeRegistry';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monsoon Dibragede — Build · Explore · Unwind',
  description: 'Work, Travel, Leisure — Portfolio of Monsoon Dibragede',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>
      <body>
        <ThemeRegistry>
          <Nav />
          <main
            style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}
          >
            {children}
          </main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
