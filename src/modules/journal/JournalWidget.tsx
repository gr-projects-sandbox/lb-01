import { useState } from 'react'
import type { WidgetProps } from '../types'

const LABELS = {
  pl: { save: 'Zapisz', placeholder: 'Napisz tutaj...' },
  en: { save: 'Save', placeholder: 'Write here...' },
} as const

export function JournalWidget({ value, onChange, onComplete, accent, dark, lang }: WidgetProps) {
  const saved = typeof value === 'string' ? value : ''
  const [text, setText] = useState(saved)
  const textColor = dark ? '#e8dfc8' : '#2a2010'
  const l = LABELS[lang]

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (text.trim().length === 0) return
    onChange(text)
    onComplete()
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        onClick={e => e.stopPropagation()}
        onPointerDown={e => e.stopPropagation()}
        placeholder={l.placeholder}
        rows={2}
        style={{
          width: '100%', resize: 'vertical',
          background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
          border: `1px solid ${accent}40`, borderRadius: 6,
          padding: '6px 8px', color: textColor,
          fontSize: 'min(10px, 1.8vw)', fontFamily: '"Inter", system-ui, sans-serif',
          outline: 'none',
        }}
      />
      <button onClick={handleSave}
        style={{
          alignSelf: 'flex-end', background: accent,
          color: dark ? '#1a1510' : '#fff',
          border: 'none', borderRadius: 8, padding: '4px 10px',
          fontSize: 'min(10px, 1.8vw)', fontWeight: 600, cursor: 'pointer',
          fontFamily: '"Inter", system-ui, sans-serif',
          opacity: text.trim().length === 0 ? 0.4 : 1,
        }}>{l.save}</button>
    </div>
  )
}
