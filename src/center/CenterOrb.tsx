import { useMemo } from 'react'
import * as THREE from 'three'

export function CenterOrb({ dark }: { dark: boolean }) {
  const tex = useMemo(() => {
    const S = 512, cx = S / 2, c = document.createElement('canvas')
    c.width = S; c.height = S
    const ctx = c.getContext('2d')!
    const g = ctx.createRadialGradient(cx, cx, 0, cx, cx, cx)
    g.addColorStop(0, dark ? '#3a2e1a' : '#f8f0e0')
    g.addColorStop(0.5, dark ? '#2a2010' : '#ede0c8')
    g.addColorStop(0.85, dark ? '#1a1508' : '#d8c8a8')
    g.addColorStop(1, dark ? '#0a0805' : '#c0b090')
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cx, S * 0.46, 0, Math.PI * 2); ctx.fill()
    const rings = [0.15, 0.28, 0.38, 0.44]
    rings.forEach((r, i) => {
      ctx.beginPath(); ctx.arc(cx, cx, S * r, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(212,168,64,${dark ? 0.12 + i * 0.03 : 0.08 + i * 0.02})`
      ctx.lineWidth = 1.5; ctx.stroke()
    })
    ctx.beginPath(); ctx.arc(cx, cx, S * 0.46, 0, Math.PI * 2)
    ctx.strokeStyle = dark ? '#c8a040' : '#b89838'; ctx.lineWidth = 7; ctx.stroke()
    ctx.beginPath(); ctx.arc(cx, cx, S * 0.48, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(212,168,64,0.25)'; ctx.lineWidth = 14; ctx.stroke()
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t
  }, [dark])

  return (
    <mesh position={[0, 0, 0.3]}>
      <circleGeometry args={[1.1, 64]} />
      <meshStandardMaterial map={tex} transparent roughness={0.35} metalness={0.45} />
    </mesh>
  )
}
