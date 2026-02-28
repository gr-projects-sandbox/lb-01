import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing'

export function BreathingEffects({ dark }: { dark: boolean }) {
  return (
    <EffectComposer>
      <Bloom
        intensity={dark ? 0.8 : 0.5}
        luminanceThreshold={dark ? 0.35 : 0.5}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <Noise opacity={dark ? 0.08 : 0.04} />
      <Vignette eskil={false} offset={0.15} darkness={dark ? 1.2 : 0.8} />
    </EffectComposer>
  )
}
