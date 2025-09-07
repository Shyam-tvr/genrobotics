import { Roboto, Anton, Bayon } from 'next/font/google';

// Use 'variable' to load all available weights (100–900) for Roboto.
export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: 'variable',
});

// Define other fonts with their respective weights.
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
