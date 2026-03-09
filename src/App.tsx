import { useState, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { CameraController } from './camera/CameraController'
import { Scene } from './scene/Scene'
import { focusCenter } from './camera/focusCenter'
import { useDailyProgress } from './data/useDailyChallenge'
import './index.css'

export interface FocusState {
  index: number
  pos: THREE.Vector3
}

export default function App() {
  const [dark, setDark] = useState(true)
  const [focus, setFocus] = useState<FocusState | null>(null)
  const daily = useDailyProgress()

  const handlePetalClick = useCallback((index: number) => {
    setFocus(prev => {
      if (prev?.index === index) return null
      return { index, pos: focusCenter(index, 0) }
    })
  }, [])

  const handleBack = useCallback(() => { setFocus(null) }, [])
  const textColor = dark ? '#e8dfc8' : '#2a2010'

  return (
    <div style={{ width: '100vw', height: '100vh', background: dark ? '#08070d' : '#f0ebe0' }}>
      <Canvas
        camera={{ position: [0, 12, 5], fov: 32, near: 0.1, far: 100 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        shadows={{ type: THREE.PCFShadowMap }} style={{ width: '100%', height: '100%' }}
      >
        <CameraController focus={focus} />
        <Scene dark={dark} focus={focus} onPetalClick={handlePetalClick} daily={daily} />
      </Canvas>

      {/* Dark mode toggle */}
      <button onClick={() => setDark(d => !d)} style={{
        position: 'fixed', top: 20, right: 20, zIndex: 100, width: 48, height: 48,
        borderRadius: '50%', border: '2px solid #c8a84e', cursor: 'pointer',
        background: dark ? 'rgba(30,25,35,0.7)' : 'rgba(240,235,225,0.8)',
        backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: 18,
      }}>{dark ? '🌙' : '☀️'}</button>

      {/* Back button */}
      {focus && (
        <button onClick={handleBack} style={{
          position: 'fixed', bottom: 30, left: '50%', transform: 'translateX(-50%)',
          zIndex: 100, padding: '10px 24px', borderRadius: 24,
          border: '1.5px solid rgba(200,168,78,0.5)', cursor: 'pointer',
          background: dark ? 'rgba(30,25,35,0.7)' : 'rgba(240,235,225,0.8)',
          backdropFilter: 'blur(8px)', color: textColor,
          fontSize: 13, fontWeight: 500, fontFamily: '"Inter", system-ui, sans-serif',
          letterSpacing: 0.5,
        }}>← Wróć</button>
      )}

      {/* Daily counter + calendar */}
      <div style={{
        position: 'fixed', top: 20, left: 20, zIndex: 100,
        background: dark ? 'rgba(30,25,35,0.7)' : 'rgba(240,235,225,0.8)',
        backdropFilter: 'blur(8px)', borderRadius: 14,
        border: '1.5px solid rgba(200,168,78,0.3)',
        padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10,
        fontFamily: '"Inter", system-ui, sans-serif', color: textColor,
      }}>
        <span style={{ fontSize: 16 }}>{daily.totalDone === 6 ? '🌸' : '🪷'}</span>
        <span style={{ fontSize: 13, fontWeight: 500 }}>{daily.totalDone}/6</span>
        <input type="date" value={daily.date}
          onChange={e => daily.changeDate(e.target.value)}
          style={{
            background: 'transparent', border: 'none', color: textColor,
            fontSize: 11, opacity: 0.6, fontFamily: '"Inter", system-ui, sans-serif',
            cursor: 'pointer', width: 95,
          }} />
      </div>
    </div>
  )
}
