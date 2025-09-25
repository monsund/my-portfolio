import Image from 'next/image'
import Section from '../../../components/Section'
import { getBySlug } from '../../../lib/content'

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = getBySlug('work', slug)
  if (!item)
    return (
      <div className="container" style={{ padding: '64px 0' }}>
        Not found
      </div>
    )

  return (
    <Section title={item.title}>
      <div className="container" style={{ display: 'grid', gap: '16px' }}>
        <div
          className="relative"
          style={{
            position: 'relative',
            height: '260px',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
          }}
        >
          <Image
            src={item.cover}
            alt={item.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p style={{ color: 'var(--muted)' }}>{item.summary}</p>
        {/* Extend: Problem → Approach → Outcome */}
      </div>
    </Section>
  )
}
