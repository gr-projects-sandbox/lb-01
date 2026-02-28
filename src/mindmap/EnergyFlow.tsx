import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 50

export function EnergyFlow({ target, color }: {
  target: [number, number, number]
  color: string
}) {
  const ref = useRef<THREE.Points>(null!)
  const center = useMemo(() => new THREE.Vector3(0, 0.3, 0), [])
  const petalPos = useMemo(() => new THREE.Vector3(...target), [target])

  const positions = useMemo(() => new Float32Array(COUNT * 3), [])
  const sizes = useMemo(() => new Float32Array(COUNT), [])

  // Each particle: speed, phase, lateral offset angle, lateral offset amount
  const params = useMemo(() => {
    const arr = new Float32Array(COUNT * 4)
    for (let i = 0; i < COUNT; i++) {
      arr[i * 4] = 0.08 + Math.random() * 0.18      // speed
      arr[i * 4 + 1] = Math.random()                  // phase (stagger)
      arr[i * 4 + 2] = (Math.random() - 0.5) * Math.PI * 2 // lateral angle
      arr[i * 4 + 3] = Math.random() * 0.5            // lateral spread radius
    }
    return arr
  }, [])

  const glowTex = useMemo(() => {
    const s = 64, h = s / 2, c = document.createElement('canvas')
    c.width = s; c.height = s
    const ctx = c.getContext('2d')!
    const g = ctx.createRadialGradient(h, h, 0, h, h, h)
    g.addColorStop(0, 'rgba(255,255,255,1)')
    g.addColorStop(0.2, 'rgba(255,230,160,0.8)')
    g.addColorStop(0.6, 'rgba(255,200,100,0.3)')
    g.addColorStop(1, 'rgba(255,180,80,0)')
    ctx.beginPath(); ctx.arc(h, h, h, 0, Math.PI * 2)
    ctx.fillStyle = g; ctx.fill()
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  }, [])

  // Pre-compute bezier midpoint and perpendicular basis (no per-frame allocs)
  const mid = useMemo(() => {
    const m = petalPos.clone().add(center).multiplyScalar(0.5)
    m.y += 0.5
    return m
  }, [petalPos, center])

  const basis = useMemo(() => {
    const dir = center.clone().sub(petalPos).normalize()
    const up = Math.abs(dir.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0)
    const perp1 = new THREE.Vector3().crossVectors(dir, up).normalize()
    const perp2 = new THREE.Vector3().crossVectors(dir, perp1).normalize()
    return { dir, perp1, perp2 }
  }, [center, petalPos])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    const pos = ref.current.geometry.attributes.position.array as Float32Array
    const sz = ref.current.geometry.attributes.size.array as Float32Array

    for (let i = 0; i < COUNT; i++) {
      const speed = params[i * 4]
      const phase = params[i * 4 + 1]
      const latAngle = params[i * 4 + 2]
      const latRadius = params[i * 4 + 3]

      // progress 0 = at petal, 1 = at center
      const progress = (t * speed + phase) % 1

      const inv = 1 - progress
      const bx = inv * inv * petalPos.x + 2 * inv * progress * mid.x + progress * progress * center.x
      const by = inv * inv * petalPos.y + 2 * inv * progress * mid.y + progress * progress * center.y
      const bz = inv * inv * petalPos.z + 2 * inv * progress * mid.z + progress * progress * center.z

      // Wide lateral spread that narrows toward center (funnel shape)
      const spread = latRadius * (1 - progress * 0.8) // wide at petal, narrow at center
      const offX = basis.perp1.x * Math.cos(latAngle) + basis.perp2.x * Math.sin(latAngle)
      const offY = basis.perp1.y * Math.cos(latAngle) + basis.perp2.y * Math.sin(latAngle)
      const offZ = basis.perp1.z * Math.cos(latAngle) + basis.perp2.z * Math.sin(latAngle)

      // Add some shimmer wobble
      const wobble = Math.sin(t * 3 + i * 7) * 0.02

      pos[i * 3] = bx + offX * spread + wobble
      pos[i * 3 + 1] = by + offY * spread
      pos[i * 3 + 2] = bz + offZ * spread + wobble

      // Size: bigger at start (petal), smaller arriving at center; pulse
      const pulse = 0.8 + 0.2 * Math.sin(t * 4 + i * 2)
      sz[i] = (0.12 + 0.16 * (1 - progress)) * pulse
    }

    ref.current.geometry.attributes.position.needsUpdate = true
    ref.current.geometry.attributes.size.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        map={glowTex} color={color} size={0.25}
        transparent opacity={0.85} sizeAttenuation
        depthWrite={false} blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
