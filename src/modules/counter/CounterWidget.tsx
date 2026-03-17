import type { WidgetProps } from '../types'

export function CounterWidget({ config, value, onChange, onComplete, accent, dark, lang }: WidgetProps) {
  const count = typeof value === 'number' ? value : 0
  const target = config.target ?? 8
  const unit = config.unit?.[lang] ?? ''
  const textColor = dark ? '#e8dfc8' : '#2a2010'

  const set = (n: number) => {
    const clamped = Math.max(0, Math.min(n, target))
    onChange(clamped)
    if (clamped >= target) onComplete()
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <button onClick={e => { e.stopPropagation(); set(count - 1) }}
        style={{
          width: 26, height: 26, borderRadius: '50%',
          border: `1.5px solid ${accent}50`, background: 'transparent',
          color: textColor, fontSize: 14, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: count === 0 ? 0.3 : 1,
        }}>−</button>
      <span style={{
        fontSize: 'min(13px, 2vw)', fontWeight: 600, color: accent,
        fontFamily: '"Inter", system-ui, sans-serif', minWidth: 40, textAlign: 'center',
      }}>
        {count}/{target}
      </span>
      <button onClick={e => { e.stopPropagation(); set(count + 1) }}
        style={{
          width: 26, height: 26, borderRadius: '50%',
          border: `1.5px solid ${accent}`, background: count >= target ? accent : 'transparent',
          color: count >= target ? (dark ? '#1a1510' : '#fff') : textColor,
          fontSize: 14, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>+</button>
      {unit && (
        <span style={{
          fontSize: 'min(9px, 1.5vw)', opacity: 0.5, color: textColor,
          fontFamily: '"Inter", system-ui, sans-serif',
        }}>{unit}</span>
      )}
    </div>
  )
}
