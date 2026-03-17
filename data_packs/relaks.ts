import type { DataPack } from './types'

const pack: DataPack = {
  id: 'relaks',
  petalIndex: 1,
  icon: '🪷',
  name: { pl: 'Relaks', en: 'Relaxation' },
  color: { hue: '#7a9ab8', light: '#9bbad8', dark: '#4a6a88' },
  categories: [
    {
      id: 'rel.mantry',
      icon: '🕉️',
      name: { pl: 'Mantry & medytacja', en: 'Mantras & meditation' },
      quests: [
        {
          id: 'rel.mantry.om',
          icon: '🕉️',
          title: { pl: 'Mantra Om', en: 'Om mantra' },
          task: {
            pl: 'Usiądź wygodnie. Powtarzaj "Om" na wydechu — 5 minut. Poczuj wibrację w klatce piersiowej.',
            en: 'Sit comfortably. Repeat "Om" on each exhale — 5 minutes. Feel the vibration in your chest.',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
        {
          id: 'rel.mantry.cisza',
          icon: '🤫',
          title: { pl: 'Cisza 5 minut', en: '5 minutes of silence' },
          task: {
            pl: 'Znajdź ciche miejsce. Ustaw timer na 5 min. Siedź i oddychaj. Myśli przyjdą — pozwól im odejść.',
            en: 'Find a quiet place. Set a timer for 5 min. Sit and breathe. Thoughts will come — let them go.',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
        {
          id: 'rel.mantry.wizualizacja',
          icon: '🌅',
          title: { pl: 'Wizualizacja', en: 'Visualization' },
          task: {
            pl: 'Wyobraź sobie spokojne jezioro o świcie. Mgła, ciepło, cisza. Jesteś tam. Oddychaj tym miejscem.',
            en: 'Imagine a calm lake at dawn. Mist, warmth, silence. You are there. Breathe that place.',
          },
          duration: { pl: '7 min', en: '7 min' },
        },
      ],
    },
    {
      id: 'rel.dzwieki',
      icon: '🎵',
      name: { pl: 'Muzyka & dźwięki', en: 'Music & sounds' },
      quests: [
        {
          id: 'rel.dzwieki.deszcz',
          icon: '🌧️',
          title: { pl: 'Dźwięki deszczu', en: 'Rain sounds' },
          task: {
            pl: 'Włącz nagranie deszczu. Zamknij oczy na 10 minut. Pozwól dźwiękom zmyć napięcie.',
            en: 'Play a rain recording. Close your eyes for 10 minutes. Let the sounds wash away tension.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
        {
          id: 'rel.dzwieki.las',
          icon: '🌲',
          title: { pl: 'Dźwięki lasu', en: 'Forest sounds' },
          task: {
            pl: 'Włącz nagranie lasu — ptaki, wiatr w liściach, strumień. Zamknij oczy. Jesteś w lesie.',
            en: 'Play a forest recording — birds, wind in leaves, a stream. Close your eyes. You are in the forest.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
        {
          id: 'rel.dzwieki.morze',
          icon: '🌊',
          title: { pl: 'Dźwięki morza', en: 'Ocean sounds' },
          task: {
            pl: 'Włącz szum fal. Oddychaj w rytm morza — wdech gdy fala nadchodzi, wydech gdy się cofa.',
            en: 'Play the sound of waves. Breathe with the ocean — inhale as the wave comes, exhale as it retreats.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
      ],
    },
    {
      id: 'rel.cialo',
      icon: '🫧',
      name: { pl: 'Relaksacja ciała', en: 'Body relaxation' },
      quests: [
        {
          id: 'rel.cialo.napnij',
          icon: '🫧',
          title: { pl: 'Napnij i puść', en: 'Tense and release' },
          task: {
            pl: 'Progresywna relaksacja: napnij stopy 5s → puść. Łydki → puść. Tak do góry aż do czoła.',
            en: 'Progressive relaxation: tense feet 5s → release. Calves → release. Work upward to your forehead.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
        {
          id: 'rel.cialo.muzyka',
          icon: '🎶',
          title: { pl: 'Muzyka relaksacyjna', en: 'Relaxation music' },
          task: {
            pl: 'Włącz spokojną muzykę instrumentalną. Połóż się. Skup na melodii — pozwól ciału opaść.',
            en: 'Play calm instrumental music. Lie down. Focus on the melody — let your body sink.',
          },
          duration: { pl: '15 min', en: '15 min' },
        },
        {
          id: 'rel.cialo.spacer',
          icon: '🌿',
          title: { pl: 'Spacer w naturze', en: 'Nature walk' },
          task: {
            pl: 'Wyjdź na 20 min bez słuchawek. Zwróć uwagę na kolory, dźwięki, zapach powietrza.',
            en: 'Go out for 20 min without headphones. Pay attention to colors, sounds, the smell of the air.',
          },
          duration: { pl: '20 min', en: '20 min' },
        },
      ],
    },
  ],
}

export default pack
