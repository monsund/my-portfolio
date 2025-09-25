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
      <body>
        <ThemeRegistry>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
