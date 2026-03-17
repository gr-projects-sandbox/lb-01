import { useState, useEffect } from 'react'
import { Html } from '@react-three/drei'
import { PETALS } from '../data/petals'
import { getDailyChallenges } from '../data/useDailyChallenge'
import { useLang } from '../i18n/LangContext'

const BRANCH_POS = [
  [-1, -0.6],
  [1, -0.6],
  [0, 0.8],
]

export function MindMap({ petalIndex, dark, position, date, isSlotDone, petalDone, onSlotDone }: {
  petalIndex: number
  dark: boolean
  position: [number, number, number]
  date: string
  isSlotDone: (slot: number) => boolean
  petalDone: number
  onSlotDone: (slot: number) => void
}) {
  const { lang, ui, petalName } = useLang()
  const petal = PETALS[petalIndex]
  const challenges = getDailyChallenges(petalIndex, date, lang)
  const accent = dark ? petal.light : petal.dark
  const textColor = dark ? '#e8dfc8' : '#2a2010'
  const [spread, setSpread] = useState(false)

  useEffect(() => {
    setSpread(false)
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setSpread(true))
    })
    return () => cancelAnimationFrame(raf)
  }, [petalIndex])

  return (
    <Html center position={position} zIndexRange={[10000, 0]}
      style={{ pointerEvents: 'auto', userSelect: 'none' }}>
      <div style={{
        position: 'relative',
        width: 'min(80vw, 600px)', height: 'min(65vh, 500px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* SVG lines */}
        <svg style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none',
          opacity: spread ? 1 : 0, transition: 'opacity 0.6s ease 0.3s',
        }}>
          {challenges.map((_, i) => {
            const [bx, by] = BRANCH_POS[i]
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
          zIndex: 10, pointerEvents: 'none',
        }}>
          <span style={{ fontSize: 'min(26px, 4vw)' }}>{petalDone === 3 ? '✅' : petal.icon}</span>
          <span style={{
            fontSize: 'min(14px, 2vw)', fontWeight: 500, letterSpacing: 1,
            color: textColor, fontFamily: '"Inter", system-ui, sans-serif',
          }}>{petalName(petalIndex)}</span>
          <span style={{
            fontSize: 'min(18px, 3vw)', fontWeight: 300, color: accent,
            fontFamily: '"Inter", system-ui, sans-serif',
          }}>{Math.round(petalDone / 3 * 100)}%</span>
        </div>

        {/* Challenge cards */}
        {challenges.map((ch, i) => {
          const [bx, by] = BRANCH_POS[i]
          const left = spread ? 50 + bx * 37 : 50
          const top = spread ? 50 + by * 40 : 50
          const done = isSlotDone(i)

          return (
            <div key={i} style={{
              position: 'absolute',
              left: `${left}%`, top: `${top}%`,
              transform: `translate(-50%, -50%) scale(${spread ? 1 : 0.5})`,
              opacity: spread ? 1 : 0,
              transition: `all 0.7s cubic-bezier(0.34,1.56,0.64,1) ${0.15 + i * 0.1}s`,
              zIndex: 5,
            }}>
              <div onClick={e => e.stopPropagation()} onPointerDown={e => e.stopPropagation()}
                style={{
                  background: dark ? 'rgba(25,22,35,0.88)' : 'rgba(255,250,240,0.92)',
                  backdropFilter: 'blur(10px)',
                  border: `1.5px solid ${done ? 'rgba(100,100,100,0.3)' : accent + '60'}`,
                  borderRadius: 'min(14px, 2vw)', padding: 'min(12px, 1.5vw) min(14px, 2vw)',
                  display: 'flex', flexDirection: 'column', gap: 'min(8px, 1vh)',
                  minWidth: 'min(160px, 28vw)', maxWidth: 'min(200px, 38vw)',
                  opacity: done ? 0.6 : 1,
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'min(6px, 1vw)' }}>
                  <span style={{ fontSize: 'min(18px, 3vw)' }}>{done ? '✅' : ch.icon}</span>
                  <span style={{
                    fontSize: 'min(12px, 2vw)', fontWeight: 600, color: textColor,
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}>{ch.title}</span>
                </div>
                <div style={{
                  fontSize: 'min(10px, 1.8vw)', lineHeight: 1.4, color: textColor,
                  opacity: 0.75, fontFamily: '"Inter", system-ui, sans-serif',
                  borderLeft: `2px solid ${accent}`, paddingLeft: 'min(8px, 1vw)',
                  display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>{ch.task}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 'min(9px, 1.5vw)', opacity: 0.4, color: textColor }}>{ch.duration}</span>
                  {!done && (
                    <button onClick={e => { e.stopPropagation(); onSlotDone(i) }}
                      style={{
                        marginLeft: 'auto', background: accent,
                        color: dark ? '#1a1510' : '#fff',
                        border: 'none', borderRadius: 8, padding: '5px 10px',
                        fontSize: 'min(11px, 1.8vw)', fontWeight: 600, cursor: 'pointer',
                        fontFamily: '"Inter", system-ui, sans-serif',
                      }}>{ui.done}</button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Html>
  )
}
