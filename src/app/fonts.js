import { Roboto, Anton, Bayon } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: 'variable',
});

export const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
  weight: ['400'],
});

export const bayon = Bayon({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bayon',
  weight: ['400'],
});