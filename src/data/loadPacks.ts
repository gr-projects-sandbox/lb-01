import type { DataPack } from '../../data_packs/types'

/**
 * Auto-discovers all data packs from data_packs/*.ts using Vite's import.meta.glob.
 * To add a new pack: just create a new .ts file in data_packs/ with `export default pack`.
 * The app will pick it up automatically — no index file needed.
 */
const modules = import.meta.glob<{ default: DataPack }>(
  ['../../data_packs/*.ts', '!../../data_packs/types.ts'],
  { eager: true },
)

// Collect all packs, sorted by petalIndex
const allPacks: DataPack[] = Object.values(modules)
  .map(m => m.default)
  .filter(Boolean)
  .sort((a, b) => a.petalIndex - b.petalIndex)

export function getDataPacks(): DataPack[] {
  return allPacks
}

export function getPackByPetalIndex(index: number): DataPack | undefined {
  return allPacks.find(p => p.petalIndex === index)
}
