import type { DataPack } from './types'

import rownowaga from '../../data_packs/rownowaga'
import relaks from '../../data_packs/relaks'
import sen from '../../data_packs/sen'
import dieta from '../../data_packs/dieta'
import rozwoj from '../../data_packs/rozwoj'
import aktywnosc from '../../data_packs/aktywnosc'

const PACKS: Record<number, DataPack> = {
  0: rownowaga,
  1: relaks,
  2: sen,
  3: dieta,
  4: rozwoj,
  5: aktywnosc,
}

export function getPack(petalIndex: number): DataPack | null {
  return PACKS[petalIndex] ?? null
}
