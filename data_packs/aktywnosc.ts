import type { DataPack } from '../src/data/types'

const pack: DataPack = {
  petalIndex: 5,
  version: 1,
  rootId: 'akt.ruch.1',
  categories: [
    {
      id: 'akt.ruch',
      title: 'Świadomy ruch',
      description: 'Ruch z pełną obecnością i uważnością',
      icon: '🏃',
      quests: [
        {
          id: 'akt.ruch.1',
          title: 'Joga powitania słońca',
          description: 'Wykonaj 3 cykle powitania słońca. W każdej pozycji zrób 1 pełen oddech. Czuj ciało.',
          icon: '🧘',
          duration: '10 min',
          unlocks: ['akt.ruch.2', 'akt.oddech.1'],
        },
        {
          id: 'akt.ruch.2',
          title: 'Świadomy spacer',
          description: 'Idź 15 minut zwracając uwagę na każdy krok: podnoszenie, ruch, stawianie stopy. Nic więcej.',
          icon: '🚶',
          duration: '15 min',
          unlocks: ['akt.ruch.3'],
        },
        {
          id: 'akt.ruch.3',
          title: 'Taniec swobodny',
          description: 'Włącz muzykę i tańcz 5 minut bez oceniania. Pozwól ciału poruszać się jak chce.',
          icon: '💃',
          duration: '5 min',
          unlocks: ['akt.energia.1'],
        },
      ],
    },
    {
      id: 'akt.oddech',
      title: 'Ciało i oddech',
      description: 'Ćwiczenia łączące ruch z oddechem',
      icon: '🌬️',
      quests: [
        {
          id: 'akt.oddech.1',
          title: 'Rozciąganie poranne',
          description: 'Rozciągnij: szyję, ramiona, plecy, biodra, nogi. W każdej pozycji 5 oddechów.',
          icon: '🤸',
          duration: '10 min',
          unlocks: ['akt.oddech.2'],
        },
        {
          id: 'akt.oddech.2',
          title: 'Pozycja drzewa',
          description: 'Stój na jednej nodze, ręce nad głową. Oddychaj spokojnie. Poczuj równowagę. Zmień nogę.',
          icon: '🌲',
          duration: '5 min',
          unlocks: ['akt.oddech.3'],
        },
        {
          id: 'akt.oddech.3',
          title: 'Plank medytacyjny',
          description: 'Utrzymaj pozycję deski. Skupiaj się na oddechu, nie na czasie. Zakończ gdy ciało poprosi.',
          icon: '🏗️',
          duration: '3 min',
          unlocks: ['akt.energia.1'],
        },
      ],
    },
    {
      id: 'akt.energia',
      title: 'Energia i witalność',
      description: 'Ćwiczenia dodające energii i witalności',
      icon: '⚡',
      quests: [
        {
          id: 'akt.energia.1',
          title: 'Pobudka ciała',
          description: '5 minut: pajacyki, krążenia ramion, podskoki. Obudź każdą część ciała. Poczuj energię.',
          icon: '🔥',
          duration: '5 min',
          unlocks: ['akt.energia.2'],
        },
        {
          id: 'akt.energia.2',
          title: 'Schody zamiast windy',
          description: 'Dziś wybieraj schody. Wchodząc, licz kroki. Czuj siłę w nogach z każdym stopniem.',
          icon: '🪜',
          duration: '5 min',
          unlocks: ['akt.energia.3'],
        },
        {
          id: 'akt.energia.3',
          title: 'Micro-trening HIIT',
          description: '30s pajacyków, 30s odpoczynku × 5 rund. Skup się na oddechu między seriami.',
          icon: '💥',
          duration: '5 min',
          unlocks: [],
        },
      ],
    },
  ],
}

export default pack
