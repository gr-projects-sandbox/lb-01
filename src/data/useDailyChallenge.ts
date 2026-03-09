import { useState, useCallback, useMemo } from 'react'
import { DAILY_CHALLENGES, type Challenge } from './content'

const STORAGE_KEY = 'lotos-daily'

interface DayState {
  date: string
  done: string[] // "petalIndex:slotIndex" keys
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

/** Pick 3 challenges for a petal on a given day */
export function getDailyChallenges(petalIndex: number, date: string): Challenge[] {
  const pool = DAILY_CHALLENGES[petalIndex]
  if (!pool || pool.length === 0) return []
  const d = dayNumber(date)
  const start = (d * 3) % pool.length
  return [0, 1, 2].map(i => pool[(start + i) % pool.length])
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

  const totalDone = state.done.length
  const percent = Math.round((totalDone / 18) * 100)

  return { date, changeDate, isSlotDone, petalDone, markSlotDone, totalDone, percent }
}
