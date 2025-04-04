import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anurag Kumar | Frontend Developer',
  description:
    'Crafting responsive, accessible, and visually stunning websites using React, Next.js, and Tailwind CSS. Passionate about UI/UX design and delivering seamless user experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(josefinSans.className, 'bg-dark-voilet')}>
        {children}
      </body>
    </html>
  );
}
