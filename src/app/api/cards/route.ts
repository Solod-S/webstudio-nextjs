import { Card } from '@/app/components/portfolioPage/Gallery';
import { NextResponse } from 'next/server';

const cards: Card[] = [
  {
    id: 1,
    image: {
      desktop: './images/technocrack-desktop.jpg ',
      table: './images/technocrack-desktop.jpg',
      mobile: './images/technocrack-mobile.jpg',
      alt: 'Technoquack',
    },
    link: 'https://google.com/',
    title: 'Technoquack',
    category: 'Web-sites',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 2,
    image: {
      desktop: './images/new-orlean-vs-desktop.jpg ',
      table: './images/new-orlean-vs-desktop.jpg',
      mobile: './images/new-orlean-vs-mobile.jpg',
      alt: 'New Orlean vs Golden Star',
    },
    link: 'https://google.com/',
    title: 'New Orlean vs Golden Star',
    category: 'Design',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 3,
    image: {
      desktop: './images/seafood-desktop.jpg ',
      table: './images/seafood-desktop.jpg',
      mobile: './images/seafood-mobile.jpg',
      alt: 'Restaurant Seafood',
    },
    link: 'https://google.com/',
    title: 'Restaurant Seafood',
    category: 'Applications',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 4,
    image: {
      desktop: './images/prime-desktop.jpg ',
      table: './images/prime-desktop.jpg',
      mobile: './images/prime-mobile.jpg',
      alt: 'headphones',
    },
    link: 'https://google.com/',
    title: 'Project Prime',
    category: 'Marketing',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 5,
    image: {
      desktop: './images/boxes-desktop.jpg ',
      table: './images/boxes-desktop.jpg',
      mobile: './images/boxes-mobile.jpg',
      alt: 'boxes',
    },
    link: 'https://google.com/',
    title: 'Project Boxes',
    category: 'Applications',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 6,
    image: {
      desktop: './images/inspiration-has-no-borders-desktop.jpg ',
      table: './images/inspiration-has-no-borders-desktop.jpg',
      mobile: './images/inspiration-has-no-borders-mobile.jpg',
      alt: 'site',
    },
    link: 'https://google.com/',
    title: 'Inspiration has no Borders',
    category: 'Web-sites',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 7,
    image: {
      desktop: './images/limited-edition-desktop.jpg ',
      table: './images/limited-edition-desktop.jpg',
      mobile: './images/limited-edition-mobile.jpg',
      alt: 'limited edition',
    },
    link: 'https://google.com/',
    title: 'Limited Edition',
    category: 'Design',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 8,
    image: {
      desktop: './images/lab-desktop.jpg ',
      table: './images/lab-desktop.jpg',
      mobile: './images/lab-mobile.jpg',
      alt: 'Project LAB',
    },
    link: 'https://google.com/',
    title: 'Project LAB',
    category: 'Marketing',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
  {
    id: 9,
    image: {
      desktop: './images/growing-business-desktop.jpg ',
      table: './images/growing-business-desktop.jpg',
      mobile: './images/growing-business-mobile.jpg',
      alt: 'Growing Business',
    },
    link: 'https://google.com/',
    title: 'Growing Business',
    category: 'Applications',
    description:
      'The resource offers comprehensive offers with different levels of functionality and services. All this will allow the visitor to obtain comprehensive information about company or individual.',
  },
];
export async function GET() {
  return NextResponse.json(cards);
}
