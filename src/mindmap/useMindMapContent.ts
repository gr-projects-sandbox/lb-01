import { useState, useEffect, useRef } from 'react'
import { PETAL_MINDMAP, type MindMapBranch, type ContentItem } from '../data/content'

interface MindMapState {
  branches: MindMapBranch[]
  loading: boolean
}

const cache = new Map<string, ContentItem>()

async function fetchApiItem(url: string): Promise<ContentItem | null> {
  if (cache.has(url)) return cache.get(url)!
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const data = await res.json()
    let item: ContentItem
    if (url.includes('zenquotes')) {
      item = { text: data[0]?.q || '', author: data[0]?.a }
    } else if (url.includes('affirmation')) {
      item = { text: data?.affirmation || '' }
    } else {
      return null
    }
    if (item.text) cache.set(url, item)
    return item.text ? item : null
  } catch {
    return null
  }
}

export function useMindMapContent(petalIndex: number | null): MindMapState {
  const [state, setState] = useState<MindMapState>({ branches: [], loading: false })
  const lastIndex = useRef<number | null>(null)

  useEffect(() => {
    if (petalIndex === null) {
      setState({ branches: [], loading: false })
      lastIndex.current = null
      return
    }
    if (petalIndex === lastIndex.current) return
    lastIndex.current = petalIndex

    const map = PETAL_MINDMAP[petalIndex]
    if (!map) return

    // Set local data immediately
    setState({ branches: map.branches, loading: true })

    // Fetch API content for branches that have apiSource
    const fetchAll = async () => {
      const updated = await Promise.all(
        map.branches.map(async (branch) => {
          if (!branch.apiSource) return branch
          const apiItem = await fetchApiItem(branch.apiSource)
          if (!apiItem) return branch
          return { ...branch, items: [apiItem, ...branch.items] }
        })
      )
      setState({ branches: updated, loading: false })
    }
    fetchAll()
  }, [petalIndex])

  return state
}
