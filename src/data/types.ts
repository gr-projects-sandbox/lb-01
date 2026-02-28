export interface Quest {
  id: string
  title: string
  description: string
  icon: string
  duration: string
  unlocks: string[]
}

export interface Category {
  id: string
  title: string
  description: string
  icon: string
  quests: [Quest, Quest, Quest]
}

export interface DataPack {
  petalIndex: number
  version: number
  rootId: string
  categories: [Category, Category, Category]
}
