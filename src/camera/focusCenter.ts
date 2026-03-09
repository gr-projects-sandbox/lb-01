import * as THREE from 'three'
import { LAYERS } from '../data/petals'

const PETAL_LAYER = LAYERS[2]
const DEPTH_STEP = 1.5
const RISE_PER_DEPTH = 0.4

const PETAL_ANCHORS: THREE.Vector3[] = Array.from({ length: 6 }, (_, i) => {
  const a = (i / PETAL_LAYER.n) * Math.PI * 2 + PETAL_LAYER.off
  return new THREE.Vector3(-Math.sin(a) * 1.8, 0.6, -Math.cos(a) * 1.8)
})

export function focusCenter(petalIndex: number, depth: number): THREE.Vector3 {
  const anchor = PETAL_ANCHORS[petalIndex]
  const a = (petalIndex / PETAL_LAYER.n) * Math.PI * 2 + PETAL_LAYER.off
  const dirX = -Math.sin(a)
  const dirZ = -Math.cos(a)
  return new THREE.Vector3(
    anchor.x + dirX * depth * DEPTH_STEP,
    anchor.y + depth * RISE_PER_DEPTH,
    anchor.z + dirZ * depth * DEPTH_STEP,
  )
}
