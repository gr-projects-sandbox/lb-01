import * as THREE from 'three'
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

export function Scene({ dark, focus, onPetalClick }: {
  dark: boolean
  focus: { index: number; pos: THREE.Vector3 } | null
  onPetalClick: (index: number, pos: THREE.Vector3) => void
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
          const petalFill = li === 2 ? PETALS[i].value / 100 : undefined
          const petalValue = li === 2 ? PETALS[i].value : undefined
          return <PetalMesh key={`${li}-${i}`} angle={a} seg={L.seg} dark={dark} emissive={L.emissive}
            texArgs={[...L.tex, L.col(dark, i), L.rim(dark), L.rw]} tilt={L.tilt} twist={L.twist}
            wide={L.wide} tall={L.tall} opacity={L.opacity} tipFade={L.tipFade} layerOrder={li} scale={L.sc}
            speed={L.spd} amp={L.amp} offset={L.ofs(i, a)} fill={petalFill} value={petalValue}
            {...(li === 2 ? { onPetalClick, petalIndex: i } : {})} />
        }))}
        <CenterOrb dark={dark} />
        <PetalLabels dark={dark} hidden={focus !== null} />
      </group>
      {focus && <>
        <EnergyFlow target={[focus.pos.x, focus.pos.y, focus.pos.z]} color={dark ? PETALS[focus.index].light : PETALS[focus.index].hue} />
        <MindMap petalIndex={focus.index} dark={dark} position={[focus.pos.x, focus.pos.y, focus.pos.z]} />
      </>}
      <BreathingEffects dark={dark} />
    </>
  )
}
