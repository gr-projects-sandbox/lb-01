import { createContext, useContext, useMemo, type ReactNode } from 'react'

export type Lang = 'pl' | 'en'

const UI_STRINGS = {
  pl: {
    back: '← Wróć',
    done: 'Zrobione!',
    today: 'Dziś:',
  },
  en: {
    back: '← Back',
    done: 'Done!',
    today: 'Today:',
  },
} as const

export type UIStrings = typeof UI_STRINGS['pl']

const PETAL_NAMES: Record<Lang, string[]> = {
  pl: ['Równowaga', 'Relaks', 'Sen', 'Dieta', 'Rozwój', 'Aktywność'],
  en: ['Balance', 'Relaxation', 'Sleep', 'Diet', 'Growth', 'Activity'],
}

interface LangContextValue {
  lang: Lang
  ui: UIStrings
  petalName: (index: number) => string
}

const LangContext = createContext<LangContextValue>(null!)

function detectLang(): Lang {
  const params = new URLSearchParams(window.location.search)
  const v = params.get('lang')
  if (v === 'en') return 'en'
  return 'pl'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const value = useMemo<LangContextValue>(() => {
    const lang = detectLang()
    return {
      lang,
      ui: UI_STRINGS[lang] as UIStrings,
      petalName: (i: number) => PETAL_NAMES[lang][i] ?? '',
    }
  }, [])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
