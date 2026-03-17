import { getDataPacks } from './loadPacks'

const packs = getDataPacks()

/** PETALS array built from data packs — indexed by petalIndex */
export const PETALS = Array.from({ length: 6 }, (_, i) => {
  const pack = packs.find(p => p.petalIndex === i)
  if (!pack) return { name: '', icon: '', hue: '#888', light: '#aaa', dark: '#555' }
  return { name: pack.name.pl, icon: pack.icon, ...pack.color }
})

export const LAYERS = [
  { n: 6, seg: [10,16] as [number,number], off: Math.PI/4.5, tilt: -0.5, twist: 0.15, wide: 1, tall: 1.2, opacity: 1, tipFade: 0.3, emissive: true, sc: [0.7,0.95,1] as [number,number,number],
    tex: [350,500] as [number,number], rw: 3, spd: 0.7, amp: 0.008,
    col: (d: boolean) => [d?'#2a3a22':'#6a8a5a',d?'#152010':'#4a6a3a',d?'#0a0f08':'#c8c0a0'] as [string,string,string],
    rim: () => 'rgba(180,150,50,0.4)', ofs: (_i: number, a: number) => a * 3 },
  { n: 6, seg: [14,20] as [number,number], off: Math.PI/7.5, tilt: -0.15, twist: 0.1, wide: 1, opacity: 0.75, sc: [1.15,1.0,1] as [number,number,number],
    tex: [400,560] as [number,number], rw: 4, spd: 0.8, amp: 0.008,
    col: (d: boolean) => [d?'#3a5530':'#7a9a6a',d?'#1a2a18':'#5a7a4a',d?'#0d150b':'#d0c8a0'] as [string,string,string],
    rim: (d: boolean) => d ? 'rgba(180,150,60,0.4)' : 'rgba(160,130,50,0.35)', ofs: (i: number) => i },
  { n: 6, seg: [20,28] as [number,number], off: 0, tilt: 0.15, twist: 0.12, emissive: true, opacity: 0.7, sc: [1.4,1.15,1] as [number,number,number],
    tex: [512,700] as [number,number], rw: 6, spd: 1.2, amp: 0.01,
    col: (d: boolean, i: number) => { const p = PETALS[i]; return [d?p.hue:p.light,d?p.dark:p.hue,d?'#1a1510':'#e8dfd0'] as [string,string,string] },
    rim: (d: boolean) => d ? '#d4a840' : '#c8a040', ofs: (i: number) => i * 2 },
]
