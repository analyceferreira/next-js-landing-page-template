import { AppConfig } from '@utils/AppConfig';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={AppConfig.locale}>
      <head />
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
