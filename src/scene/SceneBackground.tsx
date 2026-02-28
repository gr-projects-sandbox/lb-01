import { useMemo } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

export function SceneBackground({ dark }: { dark: boolean }) {
  const { scene, gl } = useThree()
  const color = dark ? '#08070d' : '#f0ebe0'
  useMemo(() => { scene.background = new THREE.Color(color) }, [scene, color])
  useMemo(() => { gl.toneMappingExposure = dark ? 1.2 : 1.5 }, [gl, dark])
  return null
}
