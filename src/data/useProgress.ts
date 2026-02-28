import { useState, useCallback, useMemo, useEffect } from 'react'
import { getPack } from './loadPacks'

interface Progress {
  level: number
  completed: string[]
}

function load(petalIndex: number): Progress {
  try {
    const raw = localStorage.getItem(`lotos-progress-${petalIndex}`)
    if (raw) return JSON.parse(raw)
  } catch { /* ignore */ }
  return { level: 1, completed: [] }
}

function save(petalIndex: number, progress: Progress) {
  localStorage.setItem(`lotos-progress-${petalIndex}`, JSON.stringify(progress))
}

export function useProgress(petalIndex: number) {
  const [progress, setProgress] = useState<Progress>(() => load(petalIndex))

  // Reload when petalIndex changes
  useEffect(() => {
    setProgress(load(petalIndex))
  }, [petalIndex])

  const pack = getPack(petalIndex)

  // Build quest lookup map from pack
  const questMap = useMemo(() => {
    if (!pack) return new Map<string, { unlocks: string[] }>()
    const map = new Map<string, { unlocks: string[] }>()
    for (const cat of pack.categories) {
      for (const q of cat.quests) {
        map.set(q.id, q)
      }
    }
    return map
  }, [pack])

  const total = questMap.size
  const completedSet = useMemo(() => new Set(progress.completed), [progress.completed])

  // Graph traversal: compute unlocked quests
  const unlocked = useMemo(() => {
    if (!pack) return new Set<string>()
    const set = new Set<string>()
    // Root is always unlocked
    set.add(pack.rootId)
    // Walk completed quests and add their unlocks
    for (const id of progress.completed) {
      const q = questMap.get(id)
      if (q) for (const u of q.unlocks) set.add(u)
    }
    // Remove already completed
    for (const id of progress.completed) set.delete(id)
    return set
  }, [pack, questMap, progress.completed])

  const percent = total > 0 ? Math.round((progress.completed.length / total) * 100) : 0

  const categoryDone = useCallback((categoryId: string): number => {
    if (!pack) return 0
    const cat = pack.categories.find(c => c.id === categoryId)
    if (!cat) return 0
    return cat.quests.filter(q => completedSet.has(q.id)).length
  }, [pack, completedSet])

  const complete = useCallback((questId: string) => {
    setProgress(prev => {
      if (prev.completed.includes(questId)) return prev
      const next = { ...prev, completed: [...prev.completed, questId] }
      if (next.completed.length >= total) {
        const levelUp = { level: prev.level + 1, completed: [] }
        save(petalIndex, levelUp)
        return levelUp
      }
      save(petalIndex, next)
      return next
    })
  }, [petalIndex, total])

  return {
    completed: completedSet,
    unlocked,
    level: progress.level,
    percent,
    categoryDone,
    complete,
    total,
  }
}
