export type Show = {
  id: number
  name: string
  image: {
    medium: string
    original: string
  } | null
  summary: string
  genres: string[]
  schedule?: {
    time: string
    days: string[]
  }
  _embedded?: {
    episodes: Episode[]
  }
}

export type Episode = {
  id: number
  season: number
  number: number
  name: string
  image: {
    medium: string
    original: string
  } | null
  summary: string
}
