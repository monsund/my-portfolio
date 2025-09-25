import leisure from '../content/leisure'
import travel from '../content/travel'
import work from '../content/work'
import { BaseItem } from './types'

export function allItems() {
  return ([...work, ...travel, ...leisure] as BaseItem[]).sort((a, b) =>
    b.date.localeCompare(a.date)
  )
}

export function byCategory(cat: BaseItem['category']) {
  return allItems().filter(i => i.category === cat)
}

export function getBySlug(cat: BaseItem['category'], slug: string) {
  const source = cat === 'work' ? work : cat === 'travel' ? travel : leisure
  return source.find(i => i.slug === slug)
}
