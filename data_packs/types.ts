/** Bilingual string — every user-facing text has both languages */
export interface I18n {
  pl: string
  en: string
}

/** Widget config — determines which module renders in the quest card */
export interface QuestWidget {
  type: 'counter' | 'journal'
  /** For counter: target value (e.g. 8 glasses) */
  target?: number
  /** Label for the widget value */
  unit?: I18n
}

export interface Quest {
  id: string
  icon: string
  title: I18n
  task: I18n
  duration: I18n
  /** Optional interactive widget — if absent, shows default "Done!" button */
  widget?: QuestWidget
}

export interface Category {
  id: string
  icon: string
  name: I18n
  quests: Quest[]
}

export interface DataPack {
  /** Unique slug, e.g. 'aktywnosc' */
  id: string
  /** Petal position (0-5). Determines placement on the flower. */
  petalIndex: number
  icon: string
  name: I18n
  color: { hue: string; light: string; dark: string }
  categories: [Category, Category, Category]
}
