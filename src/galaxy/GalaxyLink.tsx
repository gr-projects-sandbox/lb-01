import { Line } from '@react-three/drei'
import * as THREE from 'three'

export function GalaxyLink({ from, to, color, locked, opacity = 0.25 }: {
  from: THREE.Vector3 | [number, number, number]
  to: THREE.Vector3 | [number, number, number]
  color: string
  locked?: boolean
  opacity?: number
}) {
  const a = from instanceof THREE.Vector3 ? from : new THREE.Vector3(...from)
  const b = to instanceof THREE.Vector3 ? to : new THREE.Vector3(...to)
  return (
    <Line
      points={[a, b]}
      color={color}
      lineWidth={locked ? 0.5 : 1}
      transparent
      opacity={locked ? 0.08 : opacity}
      dashed={locked}
      dashSize={0.1}
      gapSize={0.08}
    />
  )
}
