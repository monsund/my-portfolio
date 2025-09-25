import { TravelItem } from '../lib/types';

const travel: TravelItem[] = [
  {
    id: 'travel-1',
    title: 'Dalat, Vietnam',
    slug: 'dalat-vietnam',
    category: 'travel',
    date: '2023-05-12',
    summary: 'Alpine coaster, waterfalls, coffee streets.',
    cover: '/images/travel/dalat.jpg',
    tags: ['Vietnam', 'Itinerary'],
    location: { city: 'Dalat', country: 'Vietnam' },
    highlights: ['Alpine coaster', 'Waterfalls', 'Night market'],
  },
];

export default travel;
