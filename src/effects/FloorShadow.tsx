import { useMemo } from 'react'
import * as THREE from 'three'

export function FloorShadow() {
  const tex = useMemo(() => {
    const s = 512, h = s / 2, c = document.createElement('canvas')
    c.width = s; c.height = s
    const ctx = c.getContext('2d')!
    const g = ctx.createRadialGradient(h, h, 0, h, h, h)
    g.addColorStop(0, 'rgba(40,30,15,0.35)')
    g.addColorStop(0.3, 'rgba(40,30,15,0.2)')
    g.addColorStop(0.7, 'rgba(40,30,15,0.06)')
    g.addColorStop(1, 'rgba(40,30,15,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, s, s)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  }, [])
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.15, 0]}>
      <planeGeometry args={[12, 12]} />
      <meshBasicMaterial map={tex} transparent depthWrite={false} />
    </mesh>
  )
}
