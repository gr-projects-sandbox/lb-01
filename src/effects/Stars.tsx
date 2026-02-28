import { useMemo } from 'react'
import * as THREE from 'three'

function makeGlowTexture() {
  const s = 128, h = s / 2, c = document.createElement('canvas')
  c.width = s; c.height = s
  const ctx = c.getContext('2d')!
  ctx.clearRect(0, 0, s, s)
  const g = ctx.createRadialGradient(h, h, 0, h, h, h)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.15, 'rgba(255,240,200,0.8)')
  g.addColorStop(0.4, 'rgba(255,220,150,0.3)')
  g.addColorStop(1, 'rgba(255,200,100,0)')
  ctx.beginPath(); ctx.arc(h, h, h, 0, Math.PI * 2)
  ctx.fillStyle = g; ctx.fill()
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace; t.premultiplyAlpha = false
  return t
}

export function Stars({ dark }: { dark: boolean }) {
  const glowTex = useMemo(() => makeGlowTexture(), [])
  const groups = useMemo(() => {
    const rng = (min: number, max: number) => min + Math.random() * (max - min)
    const result: { positions: Float32Array; size: number; color: string; opacity: number }[] = []
    const bigPos = new Float32Array(5 * 3)
    for (let i = 0; i < 5; i++) {
      const a = Math.random() * Math.PI * 2, r = 8 + Math.random() * 12
      bigPos[i * 3] = Math.cos(a) * r; bigPos[i * 3 + 1] = rng(-4, 6); bigPos[i * 3 + 2] = Math.sin(a) * r
    }
    result.push({ positions: bigPos, size: 0.8, color: '#ffe8a0', opacity: 1 })
    const medPos = new Float32Array(15 * 3)
    for (let i = 0; i < 15; i++) {
      const a = Math.random() * Math.PI * 2, r = 7 + Math.random() * 14
      medPos[i * 3] = Math.cos(a) * r; medPos[i * 3 + 1] = rng(-5, 7); medPos[i * 3 + 2] = Math.sin(a) * r
    }
    result.push({ positions: medPos, size: 0.4, color: '#ffd880', opacity: 0.8 })
    const smPos = new Float32Array(60 * 3)
    for (let i = 0; i < 60; i++) {
      const a = Math.random() * Math.PI * 2, r = 6 + Math.random() * 16
      smPos[i * 3] = Math.cos(a) * r; smPos[i * 3 + 1] = rng(-6, 8); smPos[i * 3 + 2] = Math.sin(a) * r
    }
    result.push({ positions: smPos, size: 0.15, color: '#e8dcc0', opacity: 0.5 })
    return result
  }, [])

  if (!dark) return null
  return (
    <>
      {groups.map((g, i) => (
        <points key={i}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[g.positions, 3]} />
          </bufferGeometry>
          <pointsMaterial map={glowTex} size={g.size} color={g.color} transparent opacity={g.opacity} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
        </points>
      ))}
    </>
  )
}
