import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function DynamicLight() {
  const ref = useRef<THREE.DirectionalLight>(null!)
  const base = useMemo(() => new THREE.Vector3(2, 8, 4), [])
  const tmp = useMemo(() => new THREE.Vector3(), [])
  useFrame(({ camera }) => {
    if (!ref.current) return
    tmp.copy(camera.position).normalize().multiplyScalar(10)
    ref.current.position.copy(base).lerp(tmp, 0.3)
  })
  return (
    <directionalLight
      ref={ref} intensity={2.5} color="#fff5e0"
      castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024}
      shadow-camera-near={0.5} shadow-camera-far={20}
      shadow-camera-left={-6} shadow-camera-right={6}
      shadow-camera-top={6} shadow-camera-bottom={-6}
      shadow-bias={-0.002}
    />
  )
}
