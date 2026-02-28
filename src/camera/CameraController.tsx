import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// IDLE:   autoRotate, OrbitControls owns camera (flower view)
// FLYING: lerp toward goal, controls disabled
// FREE:   OrbitControls owns camera, zero lerping (petal view)
type CamState = 'IDLE' | 'FLYING' | 'FREE'

const HOME_POS = new THREE.Vector3(0, 12, 5)
const HOME_TARGET = new THREE.Vector3(0, 0, 0)
const LERP = 0.08
const THRESHOLD = 0.15

export function CameraController({ focus }: { focus: { pos: THREE.Vector3 } | null }) {
  const controlsRef = useRef<any>(null!)
  const { camera } = useThree()

  const state = useRef<CamState>('IDLE')
  const goalPos = useRef(HOME_POS.clone())
  const goalTarget = useRef(HOME_TARGET.clone())
  const prevFocusKey = useRef<string | null>(null)

  useFrame(() => {
    const ctrl = controlsRef.current
    if (!ctrl) return

    // Detect change → start FLYING
    const key = focus ? `${focus.pos.x},${focus.pos.z}` : null
    if (key !== prevFocusKey.current) {
      prevFocusKey.current = key
      if (focus) {
        goalPos.current.set(focus.pos.x * 0.5, 6, focus.pos.z * 0.5 + 1)
        goalTarget.current.copy(focus.pos)
      } else {
        goalPos.current.copy(HOME_POS)
        goalTarget.current.copy(HOME_TARGET)
      }
      state.current = 'FLYING'
    }

    switch (state.current) {
      case 'IDLE':
        break

      case 'FLYING':
        ctrl.autoRotate = false
        ctrl.enableRotate = false
        ctrl.enableZoom = false
        camera.position.lerp(goalPos.current, LERP)
        ctrl.target.lerp(goalTarget.current, LERP)

        if (camera.position.distanceTo(goalPos.current) < THRESHOLD) {
          camera.position.copy(goalPos.current)
          ctrl.target.copy(goalTarget.current)
          ctrl.enableRotate = true
          ctrl.enableDamping = true

          if (focus) {
            // Petal view: free orbit, no autoRotate
            ctrl.autoRotate = false
            ctrl.enableZoom = true
            state.current = 'FREE'
          } else {
            // Back to flower: autoRotate
            ctrl.autoRotate = true
            ctrl.enableZoom = false
            state.current = 'IDLE'
          }
        }
        break

      case 'FREE':
        // OrbitControls owns camera — never touch position or target here
        break
    }

    ctrl.update()
  })

  return (
    <OrbitControls ref={controlsRef} autoRotate autoRotateSpeed={0.3} enablePan={false} enableZoom={false}
      enableDamping dampingFactor={0.1} minPolarAngle={0.2} maxPolarAngle={1.2} minDistance={1} maxDistance={20} />
  )
}
