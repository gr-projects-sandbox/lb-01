import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Billboard, PointMaterial, Points } from '@react-three/drei'
import * as THREE from 'three'

function makeGlowTexture() {
  const s = 256, h = s / 2, c = document.createElement('canvas')
  c.width = s; c.height = s
  const ctx = c.getContext('2d')!
  ctx.clearRect(0, 0, s, s)
  const g = ctx.createRadialGradient(h, h, 0, h, h, h * 0.85)
  g.addColorStop(0, 'rgba(255,252,240,0.9)')
  g.addColorStop(0.1, 'rgba(255,240,200,0.5)')
  g.addColorStop(0.3, 'rgba(220,180,80,0.15)')
  g.addColorStop(0.6, 'rgba(200,160,60,0.03)')
  g.addColorStop(1, 'rgba(180,140,40,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, s, s)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

let _glowTex: THREE.CanvasTexture | null = null
function getGlowTexture() {
  if (!_glowTex) _glowTex = makeGlowTexture()
  return _glowTex
}

function makeParticles(count: number, innerR: number, outerR: number): Float32Array {
  const arr = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = innerR + Math.random() * (outerR - innerR)
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    arr[i * 3 + 2] = r * Math.cos(phi)
  }
  return arr
}

export function GalaxyNode({ position, size, locked, completed, pulsate, dark, onClick }: {
  position: [number, number, number]
  size: number
  locked?: boolean
  completed?: boolean
  pulsate?: boolean
  dark?: boolean
  onClick?: () => void
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const particlesRef = useRef<THREE.Points>(null!)
  const glowTex = useMemo(getGlowTexture, [])
  const currentScale = useRef(0)
  const particlePositions = useMemo(() => makeParticles(40, size * 1.2, size * 2.2), [size])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    currentScale.current += (1 - currentScale.current) * 0.08
    let s = currentScale.current
    if (pulsate) s *= 1 + Math.sin(clock.getElapsedTime() * 2.5) * 0.1
    meshRef.current.scale.setScalar(s)
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.3
      particlesRef.current.rotation.x = clock.getElapsedTime() * 0.15
    }
  })

  const glowScale = size * 6

  return (
    <group position={position}>
      {/* Invisible click target */}
      <mesh ref={meshRef} onClick={onClick ? (e) => { e.stopPropagation(); onClick() } : undefined} scale={0}>
        <sphereGeometry args={[size, 8, 8]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* 3-layer glow sprites */}
      {[0.3, 0.6, 1].map((factor, i) => (
        <Billboard key={i}>
          <sprite scale={[glowScale * factor, glowScale * factor, 1]}>
            <spriteMaterial
              map={glowTex}
              transparent
              opacity={locked ? [0.05, 0.03, 0.02][i] : completed ? [0.35, 0.2, 0.1][i] : [0.75, 0.45, 0.25][i]}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </sprite>
        </Billboard>
      ))}

      {/* Particles */}
      {!locked && (
        <Points ref={particlesRef} positions={particlePositions}>
          <PointMaterial
            color="#f0d070" size={0.04} transparent
            opacity={completed ? 0.3 : 0.7}
            blending={THREE.AdditiveBlending} depthWrite={false} sizeAttenuation
          />
        </Points>
      )}
    </group>
  )
}
