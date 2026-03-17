import type { DataPack } from './types'

const pack: DataPack = {
  id: 'aktywnosc',
  petalIndex: 5,
  icon: '🏃',
  name: { pl: 'Aktywność', en: 'Activity' },
  color: { hue: '#c06058', light: '#e08078', dark: '#903838' },
  categories: [
    {
      id: 'akt.poranne',
      icon: '🌅',
      name: { pl: 'Poranne rytuały', en: 'Morning rituals' },
      quests: [
        {
          id: 'akt.poranne.medytacja',
          icon: '🧘',
          title: { pl: 'Medytacja poranna', en: 'Morning meditation' },
          task: {
            pl: 'Usiądź wygodnie zaraz po przebudzeniu. 10 minut ciszy — skup się na oddechu. Zanim sięgniesz po telefon.',
            en: 'Sit comfortably right after waking. 10 minutes of silence — focus on your breath. Before you reach for your phone.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
        {
          id: 'akt.poranne.joga',
          icon: '🧘‍♀️',
          title: { pl: 'Powitanie słońca', en: 'Sun salutation' },
          task: {
            pl: 'Stań przy oknie. 3 cykle powitania słońca — w każdej pozycji jeden pełen oddech. Poczuj jak ciało się budzi.',
            en: 'Stand by the window. 3 cycles of sun salutation — one full breath in each position. Feel your body waking up.',
          },
          duration: { pl: '7 min', en: '7 min' },
        },
        {
          id: 'akt.poranne.prysznic',
          icon: '🚿',
          title: { pl: 'Zimny prysznic', en: 'Cold shower' },
          task: {
            pl: 'Zakończ poranny prysznic 30 sekundami zimnej wody. Oddychaj głęboko. Z każdym dniem wydłużaj o 10s.',
            en: 'End your morning shower with 30 seconds of cold water. Breathe deeply. Extend by 10s each day.',
          },
          duration: { pl: '1 min', en: '1 min' },
        },
      ],
    },
    {
      id: 'akt.ruch',
      icon: '💃',
      name: { pl: 'Ruch & taniec', en: 'Movement & dance' },
      quests: [
        {
          id: 'akt.ruch.taniec',
          icon: '💃',
          title: { pl: 'Taniec', en: 'Dance' },
          task: {
            pl: 'Włącz ulubioną piosenkę i tańcz. Nie patrz jak wyglądasz. Ruszaj się jak ciało chce. Uwolnij energię.',
            en: 'Play your favorite song and dance. Don\'t care how you look. Move as your body wants. Release the energy.',
          },
          duration: { pl: '4 min', en: '4 min' },
        },
        {
          id: 'akt.ruch.limfa',
          icon: '🫨',
          title: { pl: 'Wytrząsanie limfatyczne', en: 'Lymphatic shaking' },
          task: {
            pl: 'Stań luźno. Zacznij delikatnie potrząsać całym ciałem — od stóp do ramion. Wytrząśnij napięcie i toksyny.',
            en: 'Stand loose. Start gently shaking your whole body — from feet to shoulders. Shake out tension and toxins.',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
        {
          id: 'akt.ruch.spacer',
          icon: '🚶',
          title: { pl: 'Świadomy spacer', en: 'Mindful walk' },
          task: {
            pl: 'Idź 15 minut skupiając się na stopach: podnoszenie, ruch, stawianie. Krok za krokiem. Bez słuchawek.',
            en: 'Walk for 15 minutes focusing on your feet: lifting, moving, placing. Step by step. No headphones.',
          },
          duration: { pl: '15 min', en: '15 min' },
        },
      ],
    },
    {
      id: 'akt.sila',
      icon: '⚡',
      name: { pl: 'Siła & rozciąganie', en: 'Strength & stretching' },
      quests: [
        {
          id: 'akt.sila.pobudka',
          icon: '⚡',
          title: { pl: 'Pobudka ciała', en: 'Body wake-up' },
          task: {
            pl: '5 minut: pajacyki, krążenia ramion, podskoki w miejscu. Obudź każdą część ciała.',
            en: '5 minutes: jumping jacks, arm circles, jumping in place. Wake up every part of your body.',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
        {
          id: 'akt.sila.plank',
          icon: '🧘',
          title: { pl: 'Plank oddechowy', en: 'Breathing plank' },
          task: {
            pl: 'Deska. Nie licz sekund — licz oddechy. Wdech, wydech = 1. Dociągnij do 10 oddechów.',
            en: 'Plank position. Don\'t count seconds — count breaths. Inhale, exhale = 1. Reach 10 breaths.',
          },
          duration: { pl: '3 min', en: '3 min' },
        },
        {
          id: 'akt.sila.rozciaganie',
          icon: '🤸',
          title: { pl: 'Rozciąganie biurowe', en: 'Desk stretching' },
          task: {
            pl: 'Przy biurku: skręt tułowia, krążenia szyją, rozciągnij nadgarstki, prostuj plecy. Co 2 godziny.',
            en: 'At your desk: torso twist, neck circles, stretch wrists, straighten your back. Every 2 hours.',
          },
          duration: { pl: '3 min', en: '3 min' },
        },
      ],
    },
  ],
}

export default pack
