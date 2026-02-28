import { Html } from '@react-three/drei'
import { PETALS, LAYERS } from '../data/petals'

export function PetalLabels({ dark, hidden }: { dark: boolean; hidden: boolean }) {
  const fade = { transition: 'opacity 0.6s ease', opacity: hidden ? 0 : 1 } as const
  const layer = LAYERS[2]
  const avg = Math.round(PETALS.reduce((s, p) => s + p.value, 0) / PETALS.length)
  return (
    <>
      {PETALS.map((p, i) => {
        const a = (i / layer.n) * Math.PI * 2 + layer.off
        const r = 1.8
        const x = -Math.sin(a) * r
        const y = Math.cos(a) * r
        return (
          <Html key={i} position={[x, y, 0.6]} center distanceFactor={10}
            style={{ pointerEvents: 'none', userSelect: 'none' }}>
            <div style={{
              ...fade,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
              color: dark ? '#e8dfc8' : '#2a2010',
              textShadow: dark ? '0 0 8px rgba(0,0,0,0.9)' : '0 1px 4px rgba(0,0,0,0.15)',
              fontFamily: '"Inter", "SF Pro", "Avenir", system-ui, sans-serif',
              whiteSpace: 'nowrap',
            }}>
              <span style={{ fontSize: 12, opacity: hidden ? 0 : 0.8, letterSpacing: 1, fontWeight: 400 }}>{p.name}</span>
              <span style={{ fontSize: 28, filter: dark ? 'grayscale(1) sepia(1) brightness(1.2)' : 'grayscale(1) sepia(0.6) brightness(0.5) contrast(1.2)' }}>{p.icon}</span>
              <span style={{ fontSize: 20, fontWeight: 300, color: dark ? '#d4a840' : '#6a5020' }}>{p.value}%</span>
            </div>
          </Html>
        )
      })}
      <Html position={[0, 0, 0.6]} center distanceFactor={10}
        style={{ pointerEvents: 'none', userSelect: 'none' }}>
        <div style={{
          ...fade,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          color: dark ? '#e8dfc8' : '#2a2010',
          textShadow: dark ? '0 0 10px rgba(0,0,0,0.9)' : '0 1px 4px rgba(0,0,0,0.15)',
          fontFamily: '"Inter", "SF Pro", "Avenir", system-ui, sans-serif',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ fontSize: 11, opacity: hidden ? 0 : 0.7 }}>Twoja równowaga dziś:</span>
          <span style={{ fontSize: 28, fontWeight: 300, color: dark ? '#d4a840' : '#6a5020' }}>{avg}%</span>
        </div>
      </Html>
    </>
  )
}
