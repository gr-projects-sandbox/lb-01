import * as THREE from 'three'
import { LAYERS } from '../data/petals'
import { PETAL_ANCHORS } from './constants'

const PETAL_LAYER = LAYERS[2]
const DEPTH_STEP = 1.5
const RISE_PER_DEPTH = 0.4
const CHILD_DISTANCE = 1.3
const LATERAL_GAP = 1.0
const CHILD_RISE = 0.3

function petalDirections(petalIndex: number) {
  const a = (petalIndex / PETAL_LAYER.n) * Math.PI * 2 + PETAL_LAYER.off
  const dirX = -Math.sin(a)
  const dirZ = -Math.cos(a)
  return { dirX, dirZ, perpX: -dirZ, perpZ: dirX }
}

/** Center point at given depth along the petal direction. */
export function focusCenter(petalIndex: number, depth: number): THREE.Vector3 {
  const anchor = PETAL_ANCHORS[petalIndex]
  const { dirX, dirZ } = petalDirections(petalIndex)
  return new THREE.Vector3(
    anchor.x + dirX * depth * DEPTH_STEP,
    anchor.y + depth * RISE_PER_DEPTH,
    anchor.z + dirZ * depth * DEPTH_STEP,
  )
}

/** Fan 3 children outward from center at given depth. */
export function layoutChildren(count: number, petalIndex: number, depth: number): THREE.Vector3[] {
  if (count === 0) return []
  const center = focusCenter(petalIndex, depth)
  const { dirX, dirZ, perpX, perpZ } = petalDirections(petalIndex)

  const totalWidth = (count - 1) * LATERAL_GAP
  const startLateral = -totalWidth / 2

  return Array.from({ length: count }, (_, i) => {
    const lateral = count === 1 ? 0 : startLateral + i * LATERAL_GAP
    return new THREE.Vector3(
      center.x + dirX * CHILD_DISTANCE + perpX * lateral,
      center.y + CHILD_RISE,
      center.z + dirZ * CHILD_DISTANCE + perpZ * lateral,
    )
  })
}
