import * as THREE from 'three'
import { LAYERS } from '../data/petals'

// --- Petal anchors (world space) ---
const PETAL_LAYER = LAYERS[2]
export const PETAL_ANCHORS: THREE.Vector3[] = Array.from({ length: 6 }, (_, i) => {
  const a = (i / PETAL_LAYER.n) * Math.PI * 2 + PETAL_LAYER.off
  return new THREE.Vector3(-Math.sin(a) * 1.8, 0.6, -Math.cos(a) * 1.8)
})

// --- Node sizes ---
export const NODE_SIZE = 0.3

// --- Camera ---
export const CAM_HOME_POS = new THREE.Vector3(0, 12, 5)
export const CAM_HOME_TARGET = new THREE.Vector3(0, 0, 0)
export const CAM_PETAL_HEIGHT = 3
export const CAM_PETAL_DIST = 2
export const LERP_SPEED = 0.12
export const ARRIVE_THRESHOLD = 0.3

// --- Galaxy state ---
export type ZoomLevel = 'FLOWER' | 'PETAL'

export interface GalaxyState {
  zoom: ZoomLevel
  petalIndex: number | null
  focusPath: string[]            // [] = 3 categories, ['catId'] = 3 quests
  selectedQuestId: string | null
}

export const GALAXY_INITIAL: GalaxyState = {
  zoom: 'FLOWER',
  petalIndex: null,
  focusPath: [],
  selectedQuestId: null,
}
