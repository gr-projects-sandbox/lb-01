import { Html } from '@react-three/drei'
import { PETALS, LAYERS } from '../data/petals'
import type { useDailyProgress } from '../data/useDailyChallenge'
import { useLang } from '../i18n/LangContext'

export function PetalLabels({ dark, hidden, daily }: {
  dark: boolean; hidden: boolean
  daily: ReturnType<typeof useDailyProgress>
}) {
  const { ui, petalName } = useLang()
  const fade = { transition: 'opacity 0.6s ease', opacity: hidden ? 0 : 1 } as const
  const layer = LAYERS[2]
  return (
    <>
      {PETALS.map((p, i) => {
        const a = (i / layer.n) * Math.PI * 2 + layer.off
        const x = -Math.sin(a) * 1.8
        const y = Math.cos(a) * 1.8
        const done = daily.petalDone(i)
        return (
          <Html key={i} position={[x, y, 0.6]} center
            style={{ pointerEvents: 'none', userSelect: 'none' }}>
            <div style={{
              ...fade,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
              color: dark ? '#e8dfc8' : '#2a2010',
              textShadow: dark ? '0 0 8px rgba(0,0,0,0.9)' : '0 1px 4px rgba(0,0,0,0.15)',
              fontFamily: '"Inter", system-ui, sans-serif',
              whiteSpace: 'nowrap',
            }}>
              <span style={{ fontSize: 12, opacity: hidden ? 0 : 0.8, letterSpacing: 1, fontWeight: 400 }}>{petalName(i)}</span>
              <span style={{ fontSize: 28 }}>{done === 3 ? '✅' : p.icon}</span>
              {done > 0 && done < 3 && (
                <span style={{ fontSize: 11, opacity: 0.6, color: dark ? '#d4a840' : '#6a5020' }}>{Math.round(done / 3 * 100)}%</span>
              )}
            </div>
          </Html>
        )
      })}
      <Html position={[0, 0, 0.6]} center
        style={{ pointerEvents: 'none', userSelect: 'none' }}>
        <div style={{
          ...fade,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          color: dark ? '#e8dfc8' : '#2a2010',
          textShadow: dark ? '0 0 10px rgba(0,0,0,0.9)' : '0 1px 4px rgba(0,0,0,0.15)',
          fontFamily: '"Inter", system-ui, sans-serif',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ fontSize: 11, opacity: hidden ? 0 : 0.7 }}>{ui.today}</span>
          <span style={{ fontSize: 28, fontWeight: 300, color: dark ? '#d4a840' : '#6a5020' }}>{daily.percent}%</span>
        </div>
      </Html>
    </>
  )
}
