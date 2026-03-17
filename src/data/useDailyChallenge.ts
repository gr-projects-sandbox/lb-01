import { useState, useCallback } from 'react'
import { getPackByPetalIndex } from './loadPacks'
import type { Lang } from '../i18n/LangContext'
import type { Quest, QuestWidget } from '../../data_packs/types'

export interface Challenge {
  icon: string
  title: string
  task: string
  duration: string
  widget?: QuestWidget
}

const STORAGE_KEY = 'lotos-daily'

interface DayState {
  date: string
  done: string[] // "petalIndex:slotIndex" keys
  widgetData?: Record<string, unknown> // "petalIndex:slotIndex" → widget value
}

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10)
}

function load(date: string): DayState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const state: DayState = JSON.parse(raw)
      if (state.date === date) return state
    }
  } catch { /* ignore */ }
  return { date, done: [] }
}

function save(state: DayState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function dayNumber(date: string): number {
  return Math.floor(new Date(date).getTime() / 86400000)
}

/** Resolve a Quest from a data pack into a flat Challenge for the given language */
function resolveQuest(q: Quest, lang: Lang): Challenge {
  return {
    icon: q.icon,
    title: q.title[lang],
    task: q.task[lang],
    duration: q.duration[lang],
    widget: q.widget,
  }
}

/** Pick 3 challenges for a petal on a given day — one from each category, rotating daily */
export function getDailyChallenges(petalIndex: number, date: string, lang: Lang = 'pl'): Challenge[] {
  const pack = getPackByPetalIndex(petalIndex)
  if (!pack) return []

  const d = dayNumber(date)

  // One quest per category, rotating by day
  return pack.categories.map((cat, catIdx) => {
    const quests = cat.quests
    if (quests.length === 0) return null
    const idx = (d + catIdx) % quests.length
    return resolveQuest(quests[idx], lang)
  }).filter(Boolean) as Challenge[]
}

export function useDailyProgress() {
  const [date, setDate] = useState(() => formatDate(new Date()))
  const [state, setState] = useState<DayState>(() => load(date))

  const changeDate = useCallback((newDate: string) => {
    setDate(newDate)
    setState(load(newDate))
  }, [])

  const key = useCallback((petal: number, slot: number) => `${petal}:${slot}`, [])

  const isSlotDone = useCallback((petal: number, slot: number) => {
    return state.done.includes(key(petal, slot))
  }, [state, key])

  const petalDone = useCallback((petal: number) => {
    return [0, 1, 2].filter(s => state.done.includes(key(petal, s))).length
  }, [state, key])

  const markSlotDone = useCallback((petal: number, slot: number) => {
    setState(prev => {
      const k = key(petal, slot)
      if (prev.done.includes(k)) return prev
      const next = { ...prev, done: [...prev.done, k] }
      save(next)
      return next
    })
  }, [key])

  const getWidgetValue = useCallback((petal: number, slot: number): unknown => {
    return state.widgetData?.[key(petal, slot)]
  }, [state, key])

  const setWidgetValue = useCallback((petal: number, slot: number, value: unknown) => {
    setState(prev => {
      const k = key(petal, slot)
      const next = { ...prev, widgetData: { ...prev.widgetData, [k]: value } }
      save(next)
      return next
    })
  }, [key])

  const totalDone = state.done.length
  const percent = Math.round((totalDone / 18) * 100)

  return { date, changeDate, isSlotDone, petalDone, markSlotDone, getWidgetValue, setWidgetValue, totalDone, percent }
}
