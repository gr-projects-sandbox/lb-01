import { useState, useEffect } from 'react'
import { Html } from '@react-three/drei'
import { PETALS } from '../data/petals'
import { useMindMapContent } from './useMindMapContent'

const BRANCH_ANGLES = [
  [-1, -0.6],  // top-left
  [1, -0.6],   // top-right
  [0, 0.8],    // bottom-center
]

export function MindMap({ petalIndex, dark, position }: {
  petalIndex: number
  dark: boolean
  position: [number, number, number]
}) {
  const petal = PETALS[petalIndex]
  const { branches, loading } = useMindMapContent(petalIndex)
  const accent = dark ? petal.light : petal.dark
  const [spread, setSpread] = useState(false)

  useEffect(() => {
    setSpread(false)
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setSpread(true))
    })
    return () => cancelAnimationFrame(raf)
  }, [petalIndex])

  return (
    <Html center distanceFactor={6} position={position} style={{ pointerEvents: 'none', userSelect: 'none' }}>
      <div style={{
        position: 'relative',
        width: 'min(80vw, 600px)', height: 'min(65vh, 500px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* SVG lines connecting center to branches */}
        <svg style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none',
          opacity: spread ? 1 : 0, transition: 'opacity 0.6s ease 0.3s',
        }}>
          {branches.map((_, i) => {
            const [bx, by] = BRANCH_ANGLES[i] || [0, 0]
            return <line key={i} x1="50%" y1="50%"
              x2={`${50 + bx * 37}%`} y2={`${50 + by * 40}%`}
              stroke={accent} strokeWidth={1.5} strokeOpacity={0.4} />
          })}
        </svg>

        {/* Center node */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: `translate(-50%, -50%) scale(${spread ? 1 : 0.8})`,
          opacity: spread ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)',
          background: dark ? 'rgba(20,18,30,0.85)' : 'rgba(255,252,245,0.9)',
          backdropFilter: 'blur(12px)',
          border: `2px solid ${accent}`,
          borderRadius: 'min(20px, 3vw)', padding: 'min(14px, 2vw) min(22px, 3vw)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'min(4px, 0.5vh)',
          zIndex: 10,
        }}>
          <span style={{ fontSize: 'min(26px, 4vw)' }}>{petal.icon}</span>
          <span style={{
            fontSize: 'min(14px, 2vw)', fontWeight: 500, letterSpacing: 1,
            color: dark ? '#e8dfc8' : '#2a2010',
            fontFamily: '"Inter", system-ui, sans-serif',
          }}>{petal.name}</span>
          <span style={{
            fontSize: 'min(22px, 3.5vw)', fontWeight: 300, color: accent,
            fontFamily: '"Inter", system-ui, sans-serif',
          }}>{petal.value}%</span>
        </div>

        {/* Branch nodes */}
        {branches.map((branch, i) => {
          const [bx, by] = BRANCH_ANGLES[i] || [0, 0]
          const left = spread ? 50 + bx * 37 : 50
          const top = spread ? 50 + by * 40 : 50
          return (
            <div key={i} style={{
              position: 'absolute',
              left: `${left}%`, top: `${top}%`,
              transform: `translate(-50%, -50%) scale(${spread ? 1 : 0.5})`,
              opacity: spread ? 1 : 0,
              transition: `all 0.7s cubic-bezier(0.34,1.56,0.64,1) ${0.15 + i * 0.1}s`,
              zIndex: 5,
            }}>
              <div style={{
                background: dark ? 'rgba(25,22,35,0.8)' : 'rgba(255,250,240,0.88)',
                backdropFilter: 'blur(10px)',
                border: `1.5px solid ${dark ? 'rgba(212,168,64,0.3)' : 'rgba(160,130,50,0.3)'}`,
                borderRadius: 'min(14px, 2vw)', padding: 'min(10px, 1.5vw) min(16px, 2vw)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'min(6px, 1vh)',
                minWidth: 'min(140px, 25vw)', maxWidth: 'min(180px, 35vw)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'min(6px, 1vw)' }}>
                  <span style={{ fontSize: 'min(18px, 3vw)' }}>{branch.icon}</span>
                  <span style={{
                    fontSize: 'min(12px, 2vw)', fontWeight: 500, color: accent, letterSpacing: 0.5,
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}>{branch.label}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'min(4px, 0.5vh)' }}>
                  {branch.items.slice(0, 2).map((item, j) => (
                    <div key={j} style={{
                      fontSize: 'min(10px, 1.8vw)', lineHeight: 1.4,
                      color: dark ? 'rgba(232,223,200,0.75)' : 'rgba(42,32,16,0.7)',
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontWeight: 300,
                      borderLeft: `2px solid ${accent}`,
                      paddingLeft: 'min(6px, 1vw)',
                    }}>
                      {item.text}
                      {item.author && <span style={{ opacity: 0.5, display: 'block', fontSize: 'min(9px, 1.5vw)' }}>— {item.author}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}

        {loading && <div style={{
          position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
          fontSize: 'min(10px, 1.8vw)', opacity: 0.4, color: dark ? '#e8dfc8' : '#2a2010',
          fontFamily: '"Inter", system-ui, sans-serif',
        }}>loading...</div>}
      </div>
    </Html>
  )
}
