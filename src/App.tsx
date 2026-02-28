import { useState, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { CameraController } from './camera/CameraController'
import { Scene } from './scene/Scene'
import './index.css'

export default function App() {
  const [dark, setDark] = useState(true)
  const [focus, setFocus] = useState<{ index: number; pos: THREE.Vector3 } | null>(null)
  const handlePetalClick = useCallback((index: number, pos: THREE.Vector3) => {
    setFocus(prev => prev?.index === index ? null : { index, pos })
  }, [])
  const handleBack = useCallback(() => setFocus(null), [])
  return (
    <div style={{ width: '100vw', height: '100vh', background: dark ? '#08070d' : '#f0ebe0' }}>
      <Canvas
        camera={{ position: [0, 12, 5], fov: 32, near: 0.1, far: 100 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        shadows={{ type: THREE.PCFShadowMap }} style={{ width: '100%', height: '100%' }}
      >
        <CameraController focus={focus} />
        <Scene dark={dark} focus={focus} onPetalClick={handlePetalClick} />
      </Canvas>
      <button onClick={() => setDark(d => !d)} style={{
        position: 'fixed', top: 20, right: 20, zIndex: 100, width: 48, height: 48,
        borderRadius: '50%', border: '2px solid #c8a84e', cursor: 'pointer',
        background: dark ? 'rgba(30,25,35,0.7)' : 'rgba(240,235,225,0.8)',
        backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: 18,
      }}>{dark ? '🌙' : '☀️'}</button>

      {focus && (
        <button onClick={handleBack} style={{
          position: 'fixed', bottom: 30, left: '50%', transform: 'translateX(-50%)',
          zIndex: 100, padding: '10px 24px', borderRadius: 24,
          border: '1.5px solid rgba(200,168,78,0.5)', cursor: 'pointer',
          background: dark ? 'rgba(30,25,35,0.7)' : 'rgba(240,235,225,0.8)',
          backdropFilter: 'blur(8px)', color: dark ? '#e8dfc8' : '#2a2010',
          fontSize: 13, fontWeight: 500, fontFamily: '"Inter", system-ui, sans-serif',
          letterSpacing: 0.5,
        }}>← Wróć</button>
      )}
    </div>
  )
}
