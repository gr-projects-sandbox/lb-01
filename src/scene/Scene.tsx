import { PETALS, LAYERS } from '../data/petals'
import { PetalMesh } from '../petal/PetalMesh'
import { CenterOrb } from '../center/CenterOrb'
import { PetalLabels } from '../labels/PetalLabels'
import { Stars } from '../effects/Stars'
import { GoldDust } from '../effects/GoldDust'
import { FloorShadow } from '../effects/FloorShadow'
import { BreathingEffects } from '../effects/BreathingEffects'
import { MindMap } from '../mindmap/MindMap'
import { EnergyFlow } from '../mindmap/EnergyFlow'
import { DynamicLight } from './DynamicLight'
import { SceneBackground } from './SceneBackground'
import type { FocusState } from '../App'
import type { useDailyProgress } from '../data/useDailyChallenge'

export function Scene({ dark, focus, onPetalClick, daily }: {
  dark: boolean
  focus: FocusState | null
  onPetalClick: (index: number) => void
  daily: ReturnType<typeof useDailyProgress>
}) {
  return (
    <>
      <SceneBackground dark={dark} />
      <ambientLight intensity={0.15} />
      <hemisphereLight args={['#fff5e0', '#3a5530', 0.6]} />
      <DynamicLight />
      <Stars dark={dark} />
      <GoldDust dark={dark} />
      {!dark && <FloorShadow />}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {LAYERS.map((L, li) => Array.from({ length: L.n }, (_, i) => {
          const a = (i / L.n) * Math.PI * 2 + L.off
          const done3 = li === 2 ? daily.petalDone(i) === 3 : false
          const petalFill = li === 2 ? (done3 ? 1 : daily.petalDone(i) / 3 * 0.6 + 0.1) : undefined
          const petalValue = li === 2 ? (done3 ? 100 : Math.round(daily.petalDone(i) / 3 * 100)) : undefined
          return <PetalMesh key={`${li}-${i}`} angle={a} seg={L.seg} dark={dark} emissive={L.emissive}
            texArgs={[...L.tex, L.col(dark, i), L.rim(dark), L.rw]} tilt={L.tilt} twist={L.twist}
            wide={L.wide} tall={L.tall} opacity={L.opacity} tipFade={L.tipFade} layerOrder={li} scale={L.sc}
            speed={L.spd} amp={L.amp} offset={L.ofs(i, a)} fill={petalFill} value={petalValue}
            {...(li === 2 ? { onPetalClick, petalIndex: i } : {})} />
        }))}
        <CenterOrb dark={dark} />
        <PetalLabels dark={dark} hidden={focus !== null} daily={daily} />
      </group>
      {focus && <>
        <EnergyFlow target={[focus.pos.x, focus.pos.y, focus.pos.z]} color={dark ? PETALS[focus.index].light : PETALS[focus.index].hue} />
        <MindMap petalIndex={focus.index} dark={dark}
          position={[focus.pos.x, focus.pos.y, focus.pos.z]}
          date={daily.date}
          isSlotDone={s => daily.isSlotDone(focus.index, s)}
          petalDone={daily.petalDone(focus.index)}
          onSlotDone={s => daily.markSlotDone(focus.index, s)}
          getWidgetValue={s => daily.getWidgetValue(focus.index, s)}
          onWidgetChange={(s, v) => daily.setWidgetValue(focus.index, s, v)} />
      </>}
      <BreathingEffects dark={dark} />
    </>
  )
}
