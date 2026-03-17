import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { getDataPacks } from '../data/loadPacks'

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
    const packs = getDataPacks()
    return {
      lang,
      ui: UI_STRINGS[lang] as UIStrings,
      petalName: (i: number) => {
        const pack = packs.find(p => p.petalIndex === i)
        return pack ? pack.name[lang] : ''
      },
    }
  }, [])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
