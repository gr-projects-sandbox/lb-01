import * as THREE from 'three'

export function createPetalGeo(segX = 20, segY = 28, wide = 1, tall = 1, tipFade = 0) {
  const geo = new THREE.PlaneGeometry(1, 1, segX, segY)
  const pos = geo.attributes.position, uv = geo.attributes.uv
  const alphas = new Float32Array(pos.count)
  for (let i = 0; i < pos.count; i++) {
    const u = uv.getX(i), t = 1 - uv.getY(i)
    const baseBoost = Math.max(0, 0.3 * (1 - t * 4))
    const width = (Math.sin(t * Math.PI) + baseBoost) * (1 - t * 0.15 * tall) * 0.75 * wide
    const cup = (u - 0.5) * (u - 0.5) * 0.8 * (1 / wide)
    const rise = Math.pow(t, 2.5) * 0.7 * tall
    const dip = -Math.sin(t * Math.PI * 0.5) * 0.15
    pos.setXYZ(i, (u - 0.5) * width * 2.7, t * 3.1 * tall, cup + rise + dip)
    alphas[i] = tipFade > 0 ? Math.min(1, (1 - t) / tipFade) : 1
  }
  geo.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1))
  geo.computeVertexNormals()
  return geo
}
