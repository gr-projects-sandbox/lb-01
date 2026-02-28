import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { paintTexture } from './paintTexture'
import { createPetalGeo } from './createPetalGeo'
import { usePetalMat } from './usePetalMat'

export function PetalMesh({ angle, seg, texArgs, emissive, tilt = 0, twist = 0, wide = 1, tall = 1, opacity = 1, tipFade = 0, layerOrder = 0, scale: s, speed, amp, offset, dark, fill, value, onPetalClick, petalIndex }: {
  angle: number; seg: [number, number]; dark: boolean; emissive?: boolean
  texArgs: [number, number, [string, string, string], string, number]
  tilt?: number; twist?: number; wide?: number; tall?: number; opacity?: number; tipFade?: number; layerOrder?: number; scale?: [number, number, number]
  speed: number; amp: number; offset: number; fill?: number; value?: number
  onPetalClick?: (index: number, pos: THREE.Vector3) => void; petalIndex?: number
}) {
  const ref = useRef<THREE.Group>(null!)
  const meshRef = useRef<THREE.Mesh>(null!)
  const pointerDown = useRef<{ x: number; y: number } | null>(null)
  const geo = useMemo(() => createPetalGeo(...seg, wide, tall, tipFade), [])
  const tex = useMemo(() => paintTexture(...texArgs, fill, dark), [dark, fill])
  const mat = usePetalMat(tex, dark, emissive, opacity, tipFade > 0, value)
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = angle + Math.sin(clock.getElapsedTime() * speed + offset) * amp
  })
  const handlePointerDown = onPetalClick ? (e: any) => {
    pointerDown.current = { x: e.clientX ?? 0, y: e.clientY ?? 0 }
  } : undefined
  const handleClick = onPetalClick ? (e: any) => {
    e.stopPropagation()
    if (pointerDown.current) {
      const dx = (e.clientX ?? 0) - pointerDown.current.x
      const dy = (e.clientY ?? 0) - pointerDown.current.y
      pointerDown.current = null
      if (dx * dx + dy * dy > 64) return // >8px = drag, not tap
    }
    const pos = meshRef.current.localToWorld(new THREE.Vector3(0, 1.6, 0.2))
    onPetalClick(petalIndex!, pos)
  } : undefined
  return (
    <group ref={ref} rotation={[0, 0, angle]} renderOrder={layerOrder}>
      <group rotation={[tilt, twist, 0]}><mesh ref={meshRef} onPointerDown={handlePointerDown} onClick={handleClick} geometry={geo} material={mat} scale={s} renderOrder={layerOrder} castShadow receiveShadow /></group>
    </group>
  )
}
