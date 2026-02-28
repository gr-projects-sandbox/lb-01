import type { DataPack } from '../src/data/types'

const pack: DataPack = {
  petalIndex: 2,
  version: 1,
  rootId: 'sen.rytual.1',
  categories: [
    {
      id: 'sen.rytual',
      title: 'Rytuały wieczorne',
      description: 'Przygotowanie do snu przez wieczorne praktyki',
      icon: '🌆',
      quests: [
        {
          id: 'sen.rytual.1',
          title: 'Dziennik przed snem',
          description: 'Zapisz 3 rzeczy z dzisiejszego dnia: co poszło dobrze, czego się nauczyłeś, co puszczasz.',
          icon: '📓',
          duration: '10 min',
          unlocks: ['sen.rytual.2', 'sen.higiena.1'],
        },
        {
          id: 'sen.rytual.2',
          title: 'Czytanie przed snem',
          description: 'Przeczytaj 10 stron książki papierowej. Bez ekranów. Pozwól słowom cię uspokoić.',
          icon: '📖',
          duration: '15 min',
          unlocks: ['sen.rytual.3'],
        },
        {
          id: 'sen.rytual.3',
          title: 'Wieczorne rozciąganie',
          description: 'Delikatne rozciąganie: skłon do przodu, pozycja dziecka, skręt tułowia w leżu. Oddychaj głęboko.',
          icon: '🧘',
          duration: '10 min',
          unlocks: ['sen.zasypianie.1'],
        },
      ],
    },
    {
      id: 'sen.higiena',
      title: 'Higiena snu',
      description: 'Optymalizacja warunków do dobrego snu',
      icon: '🛏️',
      quests: [
        {
          id: 'sen.higiena.1',
          title: 'Ciemność i chłód',
          description: 'Zasłoń okna, wyłącz wszystkie światła, ustaw temperaturę na 18-20 stopni. Przygotuj sypialnię na sen.',
          icon: '🌑',
          duration: '5 min',
          unlocks: ['sen.higiena.2'],
        },
        {
          id: 'sen.higiena.2',
          title: 'Stały rytm snu',
          description: 'Dziś połóż się i wstań o wyznaczonej godzinie. Nawet w weekend trzymaj się planu.',
          icon: '⏰',
          duration: 'cały dzień',
          unlocks: ['sen.higiena.3'],
        },
        {
          id: 'sen.higiena.3',
          title: 'Cyfrowy zachód słońca',
          description: 'Wyłącz wszystkie ekrany 60 minut przed snem. Zamień je na papier, rozmowę lub ciszę.',
          icon: '📴',
          duration: '60 min',
          unlocks: ['sen.zasypianie.1'],
        },
      ],
    },
    {
      id: 'sen.zasypianie',
      title: 'Techniki zasypiania',
      description: 'Metody ułatwiające zasypianie',
      icon: '😴',
      quests: [
        {
          id: 'sen.zasypianie.1',
          title: 'Oddech do snu',
          description: 'Leżąc w łóżku: wdech 4s, pauza 7s, wydech 8s. Powtórz 6 cykli z zamkniętymi oczami.',
          icon: '🌬️',
          duration: '5 min',
          unlocks: ['sen.zasypianie.2'],
        },
        {
          id: 'sen.zasypianie.2',
          title: 'Skanowanie ciała do snu',
          description: 'Od stóp do głowy, każda część ciała staje się ciężka i ciepła. Mów sobie: moje stopy są ciężkie...',
          icon: '🫧',
          duration: '10 min',
          unlocks: ['sen.zasypianie.3'],
        },
        {
          id: 'sen.zasypianie.3',
          title: 'Wizualizacja senna',
          description: 'Wyobraź sobie że lewiujesz na miękkiej chmurze. Chmura powoli obniża się. Jesteś bezpieczny i spokojny.',
          icon: '☁️',
          duration: '10 min',
          unlocks: [],
        },
      ],
    },
  ],
}

export default pack
