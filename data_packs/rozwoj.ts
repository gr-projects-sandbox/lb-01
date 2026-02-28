import type { DataPack } from '../src/data/types'

const pack: DataPack = {
  petalIndex: 4,
  version: 1,
  rootId: 'roz.cele.1',
  categories: [
    {
      id: 'roz.cele',
      title: 'Świadome cele',
      description: 'Wyznaczanie intencji i celów z uważnością',
      icon: '🎯',
      quests: [
        {
          id: 'roz.cele.1',
          title: 'Intencja dnia',
          description: 'Rano zapisz jedną intencję na dziś. Nie cel, a sposób bycia: np. „Dziś będę cierpliwy".',
          icon: '🌅',
          duration: '3 min',
          unlocks: ['roz.cele.2', 'roz.nauka.1'],
        },
        {
          id: 'roz.cele.2',
          title: 'Mapa marzeń',
          description: 'Zapisz lub narysuj 3 marzenia. Przy każdym poczuj jak się czujesz wyobrażając sobie że jest już prawdziwe.',
          icon: '🗺️',
          duration: '15 min',
          unlocks: ['roz.cele.3'],
        },
        {
          id: 'roz.cele.3',
          title: 'Refleksja wieczorna',
          description: 'Wieczorem odpowiedz: Czego się dziś nauczyłem? Co mogę zrobić lepiej jutro? Z czego jestem dumny?',
          icon: '🌙',
          duration: '10 min',
          unlocks: ['roz.nawyki.1'],
        },
      ],
    },
    {
      id: 'roz.nauka',
      title: 'Nauka i ciekawość',
      description: 'Rozwijanie umysłu przez naukę i obserwację',
      icon: '📚',
      quests: [
        {
          id: 'roz.nauka.1',
          title: '10 minut czytania',
          description: 'Przeczytaj 10 minut książki rozwojowej. Zapisz jedno zdanie które cię poruszyło.',
          icon: '📖',
          duration: '10 min',
          unlocks: ['roz.nauka.2'],
        },
        {
          id: 'roz.nauka.2',
          title: 'Umysł początkującego',
          description: 'Wybierz coś co robisz codziennie. Zrób to tak jakbyś robił to pierwszy raz. Zauważ nowe detale.',
          icon: '👶',
          duration: '10 min',
          unlocks: ['roz.nauka.3'],
        },
        {
          id: 'roz.nauka.3',
          title: 'Rozmowa z ciekawością',
          description: 'W następnej rozmowie zadaj 3 pytania zanim wypowiesz swoje zdanie. Słuchaj naprawdę.',
          icon: '🗣️',
          duration: '15 min',
          unlocks: ['roz.nawyki.1'],
        },
      ],
    },
    {
      id: 'roz.nawyki',
      title: 'Nawyki rozwojowe',
      description: 'Budowanie małych nawyków wspierających rozwój',
      icon: '🔄',
      quests: [
        {
          id: 'roz.nawyki.1',
          title: 'Mikro-nawyk 2 min',
          description: 'Wybierz jeden mały nawyk (np. 5 przysiadów, 1 strona książki). Rób go codziennie przez 2 minuty.',
          icon: '⏱️',
          duration: '2 min',
          unlocks: ['roz.nawyki.2'],
        },
        {
          id: 'roz.nawyki.2',
          title: 'Łączenie nawyków',
          description: 'Dołącz nowy nawyk do istniejącego: po porannej kawie → 1 minuta głębokiego oddychania.',
          icon: '⛓️',
          duration: '1 min',
          unlocks: ['roz.nawyki.3'],
        },
        {
          id: 'roz.nawyki.3',
          title: 'Dzień bez narzekania',
          description: 'Przez cały dzień nie narzekaj. Gdy złapiesz się na narzekaniu, zamień je na wdzięczność.',
          icon: '🌟',
          duration: 'cały dzień',
          unlocks: [],
        },
      ],
    },
  ],
}

export default pack
