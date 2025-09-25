import Section from '@/components/Section';
import RegionSection from '@/components/travel/RegionSection';
import TravelHero from '@/components/travel/TravelHero';

export const metadata = { title: 'Travel — Journeys & Stories' };

// Travel regions configuration
const travelRegions = [
  {
    name: 'Europe',
    description:
      'Historic cities, diverse cultures, and stunning landscapes across the continent.',
    photos: [
      {
        src: '/images/travel/europe/Austria.jpg',
        alt: 'Hallstat village by the lake in Austria',
        title: 'Hallstat, Austria',
      },
      {
        src: '/images/travel/europe/Brussels.jpg',
        alt: 'Brussels historic city center in Belgium',
        title: 'Brussels, Belgium',
      },
      {
        src: '/images/travel/europe/Czech.jpg',
        alt: 'Prague historic architecture in Czech Republic',
        title: 'Prague, Czech Republic',
      },
      {
        src: '/images/travel/europe/Paris.jpg',
        alt: 'Paris cityscape in France',
        title: 'Paris, France',
      },
      {
        src: '/images/travel/europe/Germany.jpg',
        alt: 'Foothills of the Alps in Germany',
        title: 'Foothills of the Alps, Germany',
      },
      {
        src: '/images/travel/europe/Iceland.jpg',
        alt: 'Seljalandsfoss waterfall in Iceland',
        title: 'Seljalandsfoss, Iceland',
      },
      {
        src: '/images/travel/europe/Netherlands.jpg',
        alt: 'Canal houses in Amsterdam, Netherlands',
        title: 'Amsterdam, Netherlands',
      },
      {
        src: '/images/travel/europe/Norway.jpg',
        alt: 'Scenic bike ride through Norway',
        title: 'One with Bike Riders, Norway',
      },
      {
        src: '/images/travel/europe/zurich.jpg',
        alt: 'Zurich cityscape in Switzerland',
        title: 'Zurich, Switzerland',
      },
    ],
  },
  {
    name: 'Kazakhstan',
    description:
      'Vast steppes, modern cities, and rich nomadic heritage in Central Asia.',
    photos: [
      {
        src: '/images/travel/kazakhstan/kazaks-10.jpg',
        alt: 'Almaty city view',
        title: 'Almaty',
      },
      {
        src: '/images/travel/kazakhstan/kazaks-1.jpg',
        alt: 'Almaty cityscape',
        title: 'Kazakh Evenings with Family',
      },
      {
        src: '/images/travel/kazakhstan/kazaks-8.jpg',
        alt: 'Kaindy Lake with submerged trees',
        title: 'Kaindy Lake',
      },
      {
        src: '/images/travel/kazakhstan/kazaks-9.jpg',
        alt: 'Kaindy Lake pristine waters',
        title: 'Kaindy Lake',
      },
      {
        src: '/images/travel/kazakhstan/kazaks-2.jpg',
        alt: 'Scenic Kegen–Saty road through mountains',
        title: 'Kegen–Saty Road',
      },
      {
        src: '/images/travel/kazakhstan/kazaks-4.jpg',
        alt: 'Kolsai Lake mountain scenery',
        title: 'Kolsai Lake',
      },
      {
        src: '/images/travel/kazakhstan/kazaks-5.jpg',
        alt: 'Kolsai Lake crystal clear waters',
        title: 'Kolsai Lake',
      },
      {
        src: '/images/travel/kazakhstan/kazaks-6.jpg',
        alt: 'Kolsai Lake surrounded by mountains',
        title: 'Kolsai Lake',
      },
      {
        src: '/images/travel/kazakhstan/kazaks-7.jpg',
        alt: 'Kolsai Lake alpine landscape',
        title: 'Kolsai Lake',
      },
      {
        src: '/images/travel/kazakhstan/kazaks-11.jpg',
        alt: 'Trekking adventure at Kolsai Lake',
        title: 'Trekking at Kolsai Lake',
      },
      {
        src: '/images/travel/kazakhstan/kazaks-3.jpg',
        alt: 'Saty village in the mountains',
        title: 'Saty village',
      },
      {
        src: '/images/travel/kazakhstan/kazaks-12.jpg',
        alt: 'Singing Dune (Barkhan) desert landscape',
        title: 'Singing Dune (Barkhan)',
      },
    ],
  },
  {
    name: 'India',
    description:
      'Incredible diversity, ancient temples, vibrant markets, and spiritual journeys.',
    photos: [
      {
        src: '/images/travel/india/Ziro.jpg',
        alt: 'Ziro Valley in Arunachal Pradesh',
        title: 'Ziro Valley, Arunachal Pradesh',
      },
      {
        src: '/images/travel/india/Bir.jpg',
        alt: 'Bir Billing paragliding',
        title: 'Bir Billing, Himachal Pradesh',
      },
      {
        src: '/images/travel/india/Jalori-pass.jpg',
        alt: 'Jalori Pass in Himachal Pradesh',
        title: 'Jalori Pass, Himachal Pradesh',
      },
      {
        src: '/images/travel/india/Meghalaya.jpg',
        alt: 'Meghalaya hills and waterfalls',
        title: 'Cherrapungi, Meghalaya',
      },
      {
        src: '/images/travel/india/Rajasthan.jpg',
        alt: 'Rajasthan desert landscape',
        title: 'Jaipur, Rajasthan',
      },
      {
        src: '/images/travel/india/Auli.jpg',
        alt: 'Auli ski resort in Uttarakhand',
        title: 'Auli, Uttarakhand',
      },
    ],
  },
  {
    name: 'Vietnam',
    description:
      'Stunning natural beauty, rich history, delicious cuisine, and warm hospitality.',
    photos: [
      {
        src: '/images/travel/vietnam/vietnam-1.jpg',
        alt: 'Halong Bay limestone karsts',
        // title: 'Halong Bay',
      },
      {
        src: '/images/travel/vietnam/vietnam-2.jpg',
        alt: 'Hoi An lantern festival',
        // title: 'Hoi An Ancient Town',
      },
      {
        src: '/images/travel/vietnam/vietnam-3.jpg',
        alt: 'Ho Chi Minh City streets',
        // title: 'Ho Chi Minh City',
      },
      {
        src: '/images/travel/vietnam/vietnam-5.jpg',
        alt: 'Sapa rice terraces',
        // title: 'Sapa Rice Terraces',
      },
    ],
  },
];

export default function TravelPage() {
  return (
    <>
      <TravelHero />

      {travelRegions.map(region => (
        <Section
          key={region.name}
          title={region.name}
          description={region.description}
        >
          <RegionSection photos={region.photos} />
        </Section>
      ))}
    </>
  );
}
