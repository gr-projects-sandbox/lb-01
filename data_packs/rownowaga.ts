import type { DataPack } from '../src/data/types'

const pack: DataPack = {
  petalIndex: 0,
  version: 1,
  rootId: 'bal.oddech.1',
  categories: [
    {
      id: 'bal.oddech',
      title: 'Oddychanie',
      description: 'Techniki oddechowe przywracające równowagę',
      icon: '🌬️',
      quests: [
        {
          id: 'bal.oddech.1',
          title: 'Oddech 4-7-8',
          description: 'Wdech przez 4 sekundy, wstrzymaj na 7, wydech na 8. Powtórz 4 cykle.',
          icon: '🫁',
          duration: '5 min',
          unlocks: ['bal.oddech.2', 'bal.emocje.1'],
        },
        {
          id: 'bal.oddech.2',
          title: 'Oddech pudełkowy',
          description: 'Wdech 4s, pauza 4s, wydech 4s, pauza 4s. Skup się na równych proporcjach.',
          icon: '📦',
          duration: '5 min',
          unlocks: ['bal.oddech.3'],
        },
        {
          id: 'bal.oddech.3',
          title: 'Świadomy oddech',
          description: 'Połóż rękę na brzuchu. Oddychaj tak, by ręka unosiła się i opadała. Obserwuj bez oceniania.',
          icon: '🧘',
          duration: '10 min',
          unlocks: ['bal.umysl.1'],
        },
      ],
    },
    {
      id: 'bal.emocje',
      title: 'Uważność emocji',
      description: 'Rozpoznawanie i akceptacja emocji',
      icon: '💛',
      quests: [
        {
          id: 'bal.emocje.1',
          title: 'Skanowanie emocji',
          description: 'Zamknij oczy. Nazwij emocję, którą teraz czujesz. Gdzie ją czujesz w ciele? Obserwuj bez zmieniania.',
          icon: '🔍',
          duration: '5 min',
          unlocks: ['bal.emocje.2'],
        },
        {
          id: 'bal.emocje.2',
          title: 'Dziennik wdzięczności',
          description: 'Zapisz 3 rzeczy, za które dziś jesteś wdzięczny. Poczuj każdą z nich w ciele.',
          icon: '📝',
          duration: '10 min',
          unlocks: ['bal.emocje.3'],
        },
        {
          id: 'bal.emocje.3',
          title: 'Puść co nie służy',
          description: 'Wyobraź sobie emocje jako chmury na niebie. Obserwuj jak przepływają. Nie trzymaj żadnej.',
          icon: '☁️',
          duration: '10 min',
          unlocks: ['bal.umysl.1'],
        },
      ],
    },
    {
      id: 'bal.umysl',
      title: 'Równoważenie umysłu',
      description: 'Praktyki wyciszenia i równowagi mentalnej',
      icon: '🧠',
      quests: [
        {
          id: 'bal.umysl.1',
          title: 'Cisza wewnętrzna',
          description: 'Usiądź wygodnie. Przez 3 minuty nie rób nic. Pozwól myślom przychodzić i odchodzić.',
          icon: '🤫',
          duration: '3 min',
          unlocks: ['bal.umysl.2'],
        },
        {
          id: 'bal.umysl.2',
          title: 'Afirmacja dnia',
          description: 'Wybierz jedno zdanie, które cię wspiera. Powtórz je 10 razy, czując jego znaczenie.',
          icon: '🪞',
          duration: '5 min',
          unlocks: ['bal.umysl.3'],
        },
        {
          id: 'bal.umysl.3',
          title: 'Cyfrowy detoks',
          description: 'Odłóż telefon na 30 minut. Bądź obecny w tym co robisz bez żadnych ekranów.',
          icon: '📵',
          duration: '30 min',
          unlocks: [],
        },
      ],
    },
  ],
}

export default pack
