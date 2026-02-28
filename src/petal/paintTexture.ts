import * as THREE from 'three'

export function paintTexture(
  w: number, h: number,
  colors: [string, string, string],
  rimColor: string, rimWidth: number,
  fill?: number, dark = true,
): THREE.CanvasTexture {
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  const ctx = c.getContext('2d')!

  function path() {
    ctx.beginPath()
    ctx.moveTo(w * 0.5, h * 0.03)
    ctx.bezierCurveTo(w * 0.14, h * 0.23, w * 0.05, h * 0.56, w * 0.15, h * 0.83)
    ctx.bezierCurveTo(w * 0.25, h * 0.97, w * 0.75, h * 0.97, w * 0.85, h * 0.83)
    ctx.bezierCurveTo(w * 0.95, h * 0.56, w * 0.86, h * 0.23, w * 0.5, h * 0.03)
    ctx.closePath()
  }

  const hasFill = fill !== undefined && fill < 1

  if (hasFill) {
    path()
    const gVivid = ctx.createLinearGradient(0, 0, 0, h)
    gVivid.addColorStop(0, colors[0]); gVivid.addColorStop(0.6, colors[1]); gVivid.addColorStop(1, colors[2])
    ctx.fillStyle = gVivid; ctx.fill()

    const fillLine = 1 - fill
    const fadeZone = 0.15
    ctx.globalCompositeOperation = 'destination-in'
    const mask = ctx.createLinearGradient(0, 0, 0, h)
    mask.addColorStop(0, 'rgba(0,0,0,0)')
    mask.addColorStop(Math.max(0.01, fillLine - fadeZone), 'rgba(0,0,0,0)')
    mask.addColorStop(Math.min(0.99, fillLine + fadeZone), 'rgba(0,0,0,1)')
    mask.addColorStop(1, 'rgba(0,0,0,1)')
    ctx.fillStyle = mask
    ctx.fillRect(0, 0, w, h)

    ctx.globalCompositeOperation = 'destination-over'
    path()
    ctx.globalAlpha = 0.25
    ctx.fillStyle = gVivid; ctx.fill()
    ctx.globalAlpha = 1

    ctx.globalCompositeOperation = 'source-over'
  } else {
    path()
    const g = ctx.createLinearGradient(0, 0, 0, h)
    g.addColorStop(0, colors[0]); g.addColorStop(0.6, colors[1]); g.addColorStop(1, colors[2])
    ctx.fillStyle = g; ctx.fill()
  }

  // Golden glow at base
  path()
  const gb = ctx.createRadialGradient(w * 0.5, h * 0.9, 0, w * 0.5, h * 0.75, w * 0.45)
  gb.addColorStop(0, 'rgba(212,168,64,0.4)'); gb.addColorStop(0.4, 'rgba(180,140,50,0.15)'); gb.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = gb; ctx.fill()

  // Sheen at upper area
  path()
  const s = ctx.createRadialGradient(w * 0.45, h * 0.25, 0, w * 0.5, h * 0.35, w * 0.4)
  s.addColorStop(0, 'rgba(255,240,200,0.2)'); s.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = s; ctx.fill()

  // Outer glow rim (dark only)
  if (dark) {
    path()
    ctx.strokeStyle = 'rgba(212,168,64,0.15)'; ctx.lineWidth = rimWidth * 3; ctx.stroke()
  }
  // Sharp gold rim
  path()
  ctx.strokeStyle = dark ? rimColor : '#b89030'; ctx.lineWidth = rimWidth * (dark ? 1 : 2); ctx.stroke()

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}
