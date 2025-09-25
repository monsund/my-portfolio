import Card from '../../components/Card';
import Section from '../../components/Section';
import { byCategory } from '../../lib/content';

export default function LeisurePage() {
  const items = byCategory('leisure');
  return (
    <Section title="Leisure — Now & Hobbies">
      <div className="container grid">
        {items.map(i => (
          <Card
            key={i.id}
            href={`/leisure/${i.slug}`}
            cover={i.cover}
            title={i.title}
            summary={i.summary}
            category={i.category as 'work' | 'travel' | 'leisure'}
          />
        ))}
      </div>
    </Section>
  );
}
