import type { QuestWidget } from '../../data_packs/types'
import type { Lang } from '../i18n/LangContext'

export interface WidgetProps {
  config: QuestWidget
  value: unknown
  onChange: (value: unknown) => void
  onComplete: () => void
  accent: string
  dark: boolean
  lang: Lang
}
