import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Billboard, Points, PointMaterial } from '@react-three/drei'
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

let _tex: THREE.CanvasTexture | null = null
function getTex() { if (!_tex) _tex = makeGlowTexture(); return _tex }

function shellParticles(n: number, rIn: number, rOut: number): Float32Array {
  const a = new Float32Array(n * 3)
  for (let i = 0; i < n; i++) {
    const r = rIn + Math.random() * (rOut - rIn)
    const th = Math.random() * Math.PI * 2
    const ph = Math.acos(2 * Math.random() - 1)
    a[i * 3] = r * Math.sin(ph) * Math.cos(th)
    a[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th)
    a[i * 3 + 2] = r * Math.cos(ph)
  }
  return a
}

export function CenterOrb({ position, icon, name, percent, dark }: {
  position: [number, number, number]
  icon: string
  name: string
  percent: number
  color: string
  dark: boolean
}) {
  const coreRef = useRef<THREE.Mesh>(null!)
  const dustRef = useRef<THREE.Points>(null!)
  const tex = useMemo(getTex, [])
  const dust = useMemo(() => shellParticles(60, 0.15, 0.45), [])
  const scale = useRef(0)

  useFrame(({ clock }) => {
    scale.current += (1 - scale.current) * 0.06
    const t = clock.getElapsedTime()
    if (coreRef.current) coreRef.current.scale.setScalar(scale.current * (1 + Math.sin(t * 1.5) * 0.05))
    if (dustRef.current) {
      dustRef.current.rotation.y = t * 0.15
      dustRef.current.rotation.z = t * 0.08
    }
  })

  return (
    <group position={position}>
      <mesh ref={coreRef} scale={0}>
        <sphereGeometry args={[0.01, 4, 4]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      {[0.5, 1.2, 2.2].map((s, i) => (
        <Billboard key={i}>
          <sprite scale={[s, s, 1]}>
            <spriteMaterial map={tex} transparent opacity={[0.8, 0.5, 0.25][i]}
              blending={THREE.AdditiveBlending} depthWrite={false} />
          </sprite>
        </Billboard>
      ))}

      <Points ref={dustRef} positions={dust}>
        <PointMaterial color="#f0d070" size={0.05} transparent opacity={0.7}
          blending={THREE.AdditiveBlending} depthWrite={false} sizeAttenuation />
      </Points>

      {/* Card */}
      <Html center position={[0, -0.25, 0]} zIndexRange={[10000, 0]}
        style={{ pointerEvents: 'none', userSelect: 'none' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          whiteSpace: 'nowrap', fontFamily: '"Inter", system-ui, sans-serif',
          background: dark ? 'rgba(20,18,30,0.9)' : 'rgba(255,252,245,0.95)',
          backdropFilter: 'blur(12px)',
          border: `1.5px solid ${dark ? 'rgba(212,168,64,0.4)' : 'rgba(200,160,64,0.5)'}`,
          borderRadius: 14, padding: '10px 18px',
          boxShadow: dark ? '0 0 20px rgba(212,168,64,0.15)' : '0 0 12px rgba(0,0,0,0.08)',
        }}>
          <span style={{ fontSize: 22 }}>{icon}</span>
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: 0.5, color: dark ? '#e8dfc8' : '#2a2010' }}>{name}</span>
          <span style={{ fontSize: 18, fontWeight: 300, color: dark ? '#d4a840' : '#6a5020' }}>{percent}%</span>
        </div>
      </Html>
    </group>
  )
}
