export type BaseItem = {
  id: string
  title: string
  slug: string
  category: 'work' | 'travel' | 'leisure'
  date: string
  summary: string
  cover: string
  tags?: string[]
}

export type WorkItem = BaseItem & {
  role: string
  stack: string[]
  problem?: string
  approach?: string[]
  outcomes?: { metric: string; before?: string; after?: string }[]
}

export type TravelItem = BaseItem & {
  location: { city: string; country: string }
  highlights?: string[]
}

export type LeisureItem = BaseItem & {
  type: 'micro-post' | 'playlist' | 'book' | 'photo-set'
}
