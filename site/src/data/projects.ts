// Homepage summaries for the three projects.
// Every statement here is either confirmed by Rajkumar or visible in the
// design files. Unverified claims from the old site (research counts,
// ratings, speed or revenue outcomes, design-system counts) are not used.
import type { ImageMetadata } from 'astro';
import taggoLogo from '../assets/logos/taggo.png';
import theeventsLogo from '../assets/logos/theevents.png';
import { taggoSteps } from './taggo';
import eventsHome from '../assets/theevents/buyer/01-home.png';
import nomaBuilder from '../assets/noma/builder-en-04.png';

export type Screen = { image: ImageMetadata; alt: string };

export type ProjectSummary = {
  slug: 'taggo' | 'theevents' | 'noma';
  name: string;
  logo?: ImageMetadata;
  category: string;
  status: string;
  promise: string;
  role: string;
  decisions: string[];
  accent: string;
  onAccent: string;
  screens: Screen[];
  /** Taggo keeps the playing device the homepage already had */
  player?: boolean;
  transitionName: string;
};

export const projects: ProjectSummary[] = [
  {
    slug: 'taggo',
    name: 'Taggo',
    logo: taggoLogo,
    category: 'Mobility',
    status: 'Published on iOS and Android',
    promise: 'Booking, cancelling and recovering a car, with the cost clear before you commit.',
    role: 'UX/UI designer · customer and driver apps',
    decisions: [
      'Fare and payment shown before you book',
      'Cancellation fee and its reason shown before you cancel',
      'A recovery job pauses when the price changes, until the customer approves',
    ],
    accent: '#f0dd50',
    onAccent: '#17130f',
    screens: taggoSteps,
    player: true,
    transitionName: 'taggo-device',
  },
  {
    slug: 'theevents',
    name: 'TheEvents',
    logo: theeventsLogo,
    category: 'E-commerce',
    status: 'Published on iOS and Android',
    promise: 'One shopping app for buyers, vendors and the makeup artists who promote products.',
    role: 'Product designer · buyer app and vendor tools',
    decisions: [
      'Search and curated collections lead the home screen',
      'Artists’ looks link straight to the products used',
      'Vendor registration in seven clear steps',
    ],
    accent: '#f3a195',
    onAccent: '#17130f',
    screens: [
      {
        image: eventsHome,
        alt: 'TheEvents home screen with a search field, a featured perfume, occasions such as Wedding and Eid Mubarak, and curated collections.',
      },
    ],
    transitionName: 'theevents-device',
  },
  {
    slug: 'noma',
    name: 'Noma',
    category: 'Food ordering',
    status: 'Not yet released',
    promise: 'Order coffee ahead, or build a drink ingredient by ingredient, in English or Arabic.',
    role: 'UX/UI designer · English and Arabic',
    decisions: [
      'A drink builder with a live cup and a running price',
      'Pickup-first checkout: store, name and payment on one screen',
      'Every component built for both reading directions',
    ],
    accent: '#f3e9e1',
    onAccent: '#5b3a29',
    screens: [
      {
        image: nomaBuilder,
        alt: 'Noma drink builder for a flat white: a cup illustration fills with coffee and milk, with steps for milk and sugar and an Add to order button showing AED 31.',
      },
    ],
    transitionName: 'noma-device',
  },
];

export const experience = [
  { role: 'Senior UI/UX Designer', org: 'Kief Consultancies & Technologies', place: 'Abu Dhabi', when: 'May 2024 – present' },
  { role: 'UI/UX Designer', org: 'Hubble Web Technologies', place: 'Dubai', when: 'Dec 2022 – Dec 2023' },
  { role: 'UI/UX Designer', org: 'BitsnPixs', place: 'India', when: 'Feb 2019 – Jun 2022' },
];

export const education = [
  { title: 'MBA', org: 'Bharathiyar University', when: '2017' },
  { title: 'BCA, Computer Applications', org: '', when: '' },
];

export const skills = [
  'Information architecture',
  'User flows',
  'Interaction and interface design',
  'Prototyping',
  'Design systems',
  'English and Arabic (RTL) layouts',
  'Figma',
  'Developer handoff',
];

export const contact = {
  email: 'drajkumar13@gmail.com',
  linkedin: 'https://www.linkedin.com/in/draj-kumar',
  location: 'Abu Dhabi, UAE',
  phone: '+971 54 264 4838',
  phoneHref: 'tel:+971542644838',
  /** One-page PDF in public/ (generated outside this repo) */
  resume: 'Rajkumar-Dhasan-Resume.pdf',
};
