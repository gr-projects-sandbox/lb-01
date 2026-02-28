import { useEffect, useMemo } from 'react'
import { Html } from '@react-three/drei'
import { PETALS } from '../data/petals'
import { getPack } from '../data/loadPacks'
import { useProgress } from '../data/useProgress'
import type { GalaxyState } from './constants'
import { NODE_SIZE } from './constants'
import { layoutChildren, focusCenter } from './useGalaxyLayout'
import { GalaxyNode } from './GalaxyNode'
import { CenterOrb } from './GalaxyCenterOrb'
import { GalaxyLink } from './GalaxyLink'

export function GalaxyNavigation({ galaxy, dark, onProgressChange }: {
  galaxy: GalaxyState
  dark: boolean
  onProgressChange: (petalIndex: number, percent: number) => void
}) {
  if (galaxy.petalIndex === null) return null
  return (
    <GalaxyContent petalIndex={galaxy.petalIndex} dark={dark}
      onProgressChange={onProgressChange} />
  )
}

function GalaxyContent({ petalIndex, dark, onProgressChange }: {
  petalIndex: number; dark: boolean
  onProgressChange: (petalIndex: number, percent: number) => void
}) {
  const petal = PETALS[petalIndex]
  const pack = getPack(petalIndex)
  const { completed, unlocked, percent, complete } = useProgress(petalIndex)
  const accent = dark ? petal.light : petal.dark

  useEffect(() => { onProgressChange(petalIndex, percent) }, [percent, petalIndex, onProgressChange])

  if (!pack) return null

  const center = useMemo(() => focusCenter(petalIndex, 0), [petalIndex])
  const positions = layoutChildren(3, petalIndex, 0)

  // All quests flat, pick the 3 available (unlocked + not completed)
  const allQuests = pack.categories.flatMap(c => c.quests)
  const available = allQuests.filter(q => unlocked.has(q.id))

  // If fewer than 3 available, also show completed (most recent first) to fill 3 slots
  const visible = [...available]
  if (visible.length < 3) {
    const doneQuests = allQuests.filter(q => completed.has(q.id) && !visible.find(v => v.id === q.id))
    visible.push(...doneQuests.slice(-(3 - visible.length)))
  }
  // If still fewer than 3 (beginning of game), just show what we have
  const show = visible.slice(0, 3)

  return (
    <group>
      <CenterOrb position={[center.x, center.y, center.z]}
        icon={petal.icon} name={petal.name} percent={percent} color={accent} dark={dark} />

      {show.map((quest, i) => {
        const pos = positions[i]
        const isDone = completed.has(quest.id)
        const isAvailable = unlocked.has(quest.id)

        return (
          <group key={quest.id}>
            <GalaxyLink from={center} to={pos} color="#d4a840" opacity={0.15} />
            <GalaxyNode position={[pos.x, pos.y, pos.z]} size={NODE_SIZE}
              completed={isDone} pulsate={isAvailable} dark={dark} />
            <NodeCard
              position={[pos.x, pos.y - 0.25, pos.z]}
              icon={isDone ? '✅' : quest.icon}
              title={quest.title} description={quest.description}
              meta={`⏱ ${quest.duration}`}
              action={isAvailable ? 'complete' : undefined}
              dark={dark} color={accent}
              onComplete={isAvailable ? () => complete(quest.id) : undefined}
            />
          </group>
        )
      })}
    </group>
  )
}

/* ── One card component ── */

function NodeCard({ position, icon, title, description, meta, action, dark, color, onComplete }: {
  position: [number, number, number]
  icon: string
  title: string
  description: string
  meta: string
  action?: 'complete'
  dark: boolean
  color: string
  onComplete?: () => void
}) {
  return (
    <Html center position={position} zIndexRange={[10000, 0]}
      style={{ pointerEvents: onComplete ? 'auto' : 'none', userSelect: 'none' }}>
      <div
        style={{
          width: 180,
          background: dark ? 'rgba(20,18,30,0.9)' : 'rgba(255,252,245,0.95)',
          backdropFilter: 'blur(12px)',
          border: `1.5px solid ${color}`,
          borderRadius: 14,
          padding: '12px 14px',
          display: 'flex', flexDirection: 'column', gap: 6,
          boxShadow: `0 0 20px ${color}30`,
          fontFamily: '"Inter", system-ui, sans-serif',
        }}>

        {/* Header: icon + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 18 }}>{icon}</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: dark ? '#e8dfc8' : '#2a2010', flex: 1 }}>
            {title}
          </span>
        </div>

        {/* Description (max 2 lines) */}
        <div style={{
          fontSize: 11, lineHeight: 1.4, opacity: 0.7,
          color: dark ? '#e8dfc8' : '#2a2010',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {description}
        </div>

        {/* Meta + action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
          <span style={{ fontSize: 10, opacity: 0.5, color: dark ? '#e8dfc8' : '#2a2010' }}>
            {meta}
          </span>
          {action === 'complete' && onComplete && (
            <button
              onClick={(e) => { e.stopPropagation(); onComplete() }}
              style={{
                marginLeft: 'auto', background: color,
                color: dark ? '#1a1510' : '#fff',
                border: 'none', borderRadius: 8, padding: '5px 10px',
                fontSize: 11, fontWeight: 600, cursor: 'pointer',
                fontFamily: '"Inter", system-ui, sans-serif',
              }}>
              Zrobione!
            </button>
          )}
        </div>
      </div>
    </Html>
  )
}
