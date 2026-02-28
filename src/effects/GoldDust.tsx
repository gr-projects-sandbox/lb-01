import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function GoldDust({ dark }: { dark: boolean }) {
  const count = 200
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2, r = 2 + Math.random() * 5
      pos[i * 3] = Math.cos(a) * r
      pos[i * 3 + 1] = (Math.random() - 0.3) * 3
      pos[i * 3 + 2] = Math.sin(a) * r
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    const pos = ref.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(t * 0.3 + i) * 0.002
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  if (!dark) return null
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#d4a840" transparent opacity={0.6} sizeAttenuation depthWrite={false} />
    </points>
  )
}
