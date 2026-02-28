import type { DataPack } from '../src/data/types'

const pack: DataPack = {
  petalIndex: 3,
  version: 1,
  rootId: 'die.jedzenie.1',
  categories: [
    {
      id: 'die.jedzenie',
      title: 'Świadome jedzenie',
      description: 'Praktyki uważnego spożywania posiłków',
      icon: '🍽️',
      quests: [
        {
          id: 'die.jedzenie.1',
          title: 'Posiłek w ciszy',
          description: 'Zjedz jeden posiłek bez telefonu, TV i rozmów. Skup się tylko na jedzeniu, smaku, teksturze.',
          icon: '🤫',
          duration: '20 min',
          unlocks: ['die.jedzenie.2', 'die.woda.1'],
        },
        {
          id: 'die.jedzenie.2',
          title: '30 gryźnień',
          description: 'Przy następnym posiłku żuj każdy kęs co najmniej 20-30 razy. Poczuj jak smak się zmienia.',
          icon: '🦷',
          duration: '20 min',
          unlocks: ['die.jedzenie.3'],
        },
        {
          id: 'die.jedzenie.3',
          title: 'Wdzięczność za posiłek',
          description: 'Przed jedzeniem zatrzymaj się na chwilę. Pomyśl skąd pochodzi to jedzenie. Podziękuj w myślach.',
          icon: '🙏',
          duration: '2 min',
          unlocks: ['die.odzywianie.1'],
        },
      ],
    },
    {
      id: 'die.woda',
      title: 'Nawadnianie',
      description: 'Świadome picie i nawadnianie ciała',
      icon: '💧',
      quests: [
        {
          id: 'die.woda.1',
          title: 'Poranny kubek wody',
          description: 'Zaraz po przebudzeniu wypij pełną szklankę letniej wody. Pij powoli, czując jak nawadniasz ciało.',
          icon: '🚰',
          duration: '2 min',
          unlocks: ['die.woda.2'],
        },
        {
          id: 'die.woda.2',
          title: 'Świadome picie',
          description: 'Za każdym razem gdy pijesz wodę, zrób 3 świadome łyki. Poczuj chłód, przepływ, nawodnienie.',
          icon: '🥤',
          duration: '1 min',
          unlocks: ['die.woda.3'],
        },
        {
          id: 'die.woda.3',
          title: 'Herbaciana medytacja',
          description: 'Zaparz herbatę od początku do końca z pełną uwagą. Obserwuj wodę, liście, parę, kolor.',
          icon: '🍵',
          duration: '10 min',
          unlocks: ['die.odzywianie.1'],
        },
      ],
    },
    {
      id: 'die.odzywianie',
      title: 'Odżywianie świadome',
      description: 'Głębsze połączenie z jedzeniem',
      icon: '🥗',
      quests: [
        {
          id: 'die.odzywianie.1',
          title: 'Kolorowy talerz',
          description: 'Przygotuj posiłek z 5 różnych kolorów warzyw i owoców. Zjedz go powoli, doceniając każdy kolor.',
          icon: '🌈',
          duration: '30 min',
          unlocks: ['die.odzywianie.2'],
        },
        {
          id: 'die.odzywianie.2',
          title: 'Słuchanie ciała',
          description: 'Przed sięgnięciem po jedzenie zapytaj: Czy jestem głodny? Czego potrzebuję? Zjedz to czego naprawdę potrzebujesz.',
          icon: '👂',
          duration: '5 min',
          unlocks: ['die.odzywianie.3'],
        },
        {
          id: 'die.odzywianie.3',
          title: 'Gotowanie medytacyjne',
          description: 'Ugotuj prosty posiłek od zera. Skupiaj się na krojeniu, mieszaniu, aromatach. Gotowanie jako medytacja.',
          icon: '👨‍🍳',
          duration: '30 min',
          unlocks: [],
        },
      ],
    },
  ],
}

export default pack
