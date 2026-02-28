import type { DataPack } from '../src/data/types'

const pack: DataPack = {
  petalIndex: 1,
  version: 1,
  rootId: 'rel.cialo.1',
  categories: [
    {
      id: 'rel.cialo',
      title: 'Rozluźnianie ciała',
      description: 'Techniki fizycznego rozluźnienia i relaksacji',
      icon: '💆',
      quests: [
        {
          id: 'rel.cialo.1',
          title: 'Progresywna relaksacja',
          description: 'Napinaj i rozluźniaj kolejno: stopy, łydki, uda, brzuch, klatę, ręce, twarz. Każda grupa 5 sekund.',
          icon: '💪',
          duration: '10 min',
          unlocks: ['rel.cialo.2', 'rel.medytacja.1'],
        },
        {
          id: 'rel.cialo.2',
          title: 'Body scan',
          description: 'Leżąc, przesuń uwagę od czubka głowy do palców stóp. W każdym miejscu oddaj napięcie z wydechem.',
          icon: '🫧',
          duration: '15 min',
          unlocks: ['rel.cialo.3'],
        },
        {
          id: 'rel.cialo.3',
          title: 'Masaż dłoni',
          description: 'Uciskaj kciukiem punkt między kciukiem a palcem wskazującym drugiej ręki. Masuj kolistymi ruchami.',
          icon: '🤲',
          duration: '5 min',
          unlocks: ['rel.rytual.1'],
        },
      ],
    },
    {
      id: 'rel.medytacja',
      title: 'Medytacja relaksacyjna',
      description: 'Guided meditation i wizualizacje',
      icon: '🪷',
      quests: [
        {
          id: 'rel.medytacja.1',
          title: 'Dźwięki natury',
          description: 'Włącz nagranie deszczu lub lasu. Zamknij oczy i pozwól dźwiękom cię otaczać.',
          icon: '🎵',
          duration: '10 min',
          unlocks: ['rel.medytacja.2'],
        },
        {
          id: 'rel.medytacja.2',
          title: 'Spokojne miejsce',
          description: 'Wyobraź sobie miejsce, w którym czujesz spokój. Zobacz kolory, poczuj temperaturę, usłysz dźwięki.',
          icon: '🏖️',
          duration: '10 min',
          unlocks: ['rel.medytacja.3'],
        },
        {
          id: 'rel.medytacja.3',
          title: 'Miłość i dobroć',
          description: 'Pomyśl o bliskiej osobie. Powtarzaj: Życzę ci szczęścia. Życzę ci zdrowia. Życzę ci spokoju.',
          icon: '💗',
          duration: '10 min',
          unlocks: ['rel.rytual.1'],
        },
      ],
    },
    {
      id: 'rel.rytual',
      title: 'Rytuały uspokojenia',
      description: 'Codzienne rytuały relaksacyjne',
      icon: '🍵',
      quests: [
        {
          id: 'rel.rytual.1',
          title: 'Ciepła herbata',
          description: 'Zaparz ulubioną herbatę ziołową. Pij ją powoli, czując ciepło, smak i aromat. Bądź przy niej w pełni.',
          icon: '☕',
          duration: '10 min',
          unlocks: ['rel.rytual.2'],
        },
        {
          id: 'rel.rytual.2',
          title: 'Kąpiel relaksacyjna',
          description: 'Napuść ciepłą kąpiel. Dodaj sól lub olejek. Oddychaj głęboko i poczuj jak woda wspiera twoje ciało.',
          icon: '🛁',
          duration: '20 min',
          unlocks: ['rel.rytual.3'],
        },
        {
          id: 'rel.rytual.3',
          title: 'Spacer w ciszy',
          description: 'Wyjdź na zewnątrz. Idź powoli, bez celu. Słuchaj, patrz, czuj powietrze na skórze.',
          icon: '🌿',
          duration: '15 min',
          unlocks: [],
        },
      ],
    },
  ],
}

export default pack
