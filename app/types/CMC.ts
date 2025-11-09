export interface Review {
  name: string
  rating: number
  text: string
}

export interface CMC {
  id: number
  slug: string
  title: string
  tier: number
  intensity: number
  durationMin: number
  priceCredits: number
  tags: string[]
  summary: string
  heroImage: string
  sensoryProfile: string[]
  riskNotes: string[]
  reviews: Review[]
}
