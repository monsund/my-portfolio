// lib/travel.ts
export type Region = 'Europe' | 'Asia' | 'India North' | 'India Northeast';
export type Story = {
  id: string;
  title: string;
  country: string;
  region: Region;
  year: number;
  cover: string;
  teaser: string;
  tags: string[];
  slug: string;
};
export type Photo = { src: string; alt?: string };
export type Trip = {
  title: string;
  days: number;
  region: Region;
  cover: string;
  highlights: string[];
  slug: string;
};

export const countries = [
  'Iceland',
  'Norway',
  'Austria',
  'Switzerland',
  'Netherlands',
  'Kazakhstan',
  'Vietnam',
  'India · Himachal',
  'India · Uttarakhand',
  'India · Arunachal',
  'India · Meghalaya',
];

export const stories: Story[] = [
  {
    id: 'ice-01',
    title: 'Iceland South Coast: Waterfalls & Black Sand',
    country: 'Iceland',
    region: 'Europe',
    year: 2023,
    cover: '/images/travel/iceland-south.jpg',
    teaser:
      'Ring Road (South) in 3 days—Seljalandsfoss, Skógafoss, Reynisfjara, and a glacier walk.',
    tags: ['ring road', 'waterfalls', 'glacier'],
    slug: 'iceland-south-coast',
  },
  {
    id: 'nor-01',
    title: 'Norway Fjords Weekend',
    country: 'Norway',
    region: 'Europe',
    year: 2023,
    cover: '/images/travel/norway-fjords.jpg',
    teaser:
      'A compact route through Aurlandsfjord & Nærøyfjord with scenic train + ferry combo.',
    tags: ['fjords', 'train', 'ferry'],
    slug: 'norway-fjords-weekend',
  },
  {
    id: 'vnm-01',
    title: 'Vietnam Street Food in Hanoi',
    country: 'Vietnam',
    region: 'Asia',
    year: 2022,
    cover: '/images/travel/vietnam-hanoi-food.jpg',
    teaser:
      'Pho, banh mi, egg coffee—walking the Old Quarter with a camera and an empty stomach.',
    tags: ['food', 'old quarter'],
    slug: 'vietnam-hanoi-food',
  },
  {
    id: 'uk-01',
    title: 'Uttarakhand: Valley Walks & Sunrises',
    country: 'India · Uttarakhand',
    region: 'India North',
    year: 2021,
    cover: '/images/travel/uttarakhand.jpg',
    teaser:
      'Ridge walks, misty mornings, and cosy stays—with a simple 2-day hill loop.',
    tags: ['hills', 'sunrise'],
    slug: 'uttarakhand-valley-walks',
  },
];

export const photos: Photo[] = [
  { src: '/images/travel/mosaic-1.jpg', alt: 'Fjord view' },
  { src: '/images/travel/mosaic-2.jpg', alt: 'Iceland waterfall' },
  { src: '/images/travel/mosaic-3.jpg', alt: 'Vietnam street' },
  { src: '/images/travel/mosaic-4.jpg', alt: 'Swiss Alps' },
  // add more
];

export const trips: Trip[] = [
  {
    title: '3 Days · Iceland South Coast',
    days: 3,
    region: 'Europe',
    cover: '/images/travel/iceland-itinerary.jpg',
    highlights: [
      'Seljalandsfoss',
      'Skógafoss',
      'Reynisfjara',
      'Sólheimajökull',
    ],
    slug: 'iceland-3-day-south',
  },
  {
    title: '2 Days · Norway Fjords',
    days: 2,
    region: 'Europe',
    cover: '/images/travel/norway-itinerary.jpg',
    highlights: ['Aurlandsfjord', 'Nærøyfjord', 'Flåm Railway'],
    slug: 'norway-2-day-fjords',
  },
  {
    title: '4 Days · Meghalaya Monsoon Loop',
    days: 4,
    region: 'India Northeast',
    cover: '/images/travel/meghalaya-itinerary.jpg',
    highlights: ['Living root bridges', 'Cherrapunji', 'Dawki River'],
    slug: 'meghalaya-4-day-loop',
  },
];
