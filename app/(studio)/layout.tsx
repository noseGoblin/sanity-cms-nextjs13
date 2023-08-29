import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jay's Awesome Site",
  description: 'Generated by Next.js + Sanity.io',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}