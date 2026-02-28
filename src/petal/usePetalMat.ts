import { useMemo } from 'react'
import * as THREE from 'three'

export function usePetalMat(texture: THREE.CanvasTexture, dark: boolean, emissive = false, opacity = 1, useTipFade = false, value?: number) {
  return useMemo(() => {
    let finalOpacity = opacity
    let emissiveIntensity = dark ? 0.3 : 0.2
    if (value !== undefined) {
      if (value < 40) finalOpacity = Math.max(0.3, opacity - 0.15)
      if (value > 80) emissiveIntensity = dark ? 0.6 : 0.35
    }
    const mat = new THREE.MeshStandardMaterial({
      map: texture, transparent: true, alphaTest: 0.01, side: THREE.DoubleSide,
      roughness: 0.5, metalness: 0.2, opacity: finalOpacity,
      ...(emissive && { emissiveMap: texture, emissive: new THREE.Color('#d4a840'), emissiveIntensity }),
    })
    if (useTipFade) {
      mat.onBeforeCompile = (shader) => {
        shader.vertexShader = shader.vertexShader.replace(
          'void main() {',
          'attribute float alpha;\nvarying float vAlpha;\nvoid main() {\nvAlpha = alpha;'
        )
        shader.fragmentShader = shader.fragmentShader.replace(
          'void main() {',
          'varying float vAlpha;\nvoid main() {'
        )
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <dithering_fragment>',
          '#include <dithering_fragment>\ngl_FragColor.a *= vAlpha;'
        )
      }
    }
    return mat
  }, [texture, dark, opacity, useTipFade, value])
}
