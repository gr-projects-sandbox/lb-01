import type { DataPack } from './types'

const pack: DataPack = {
  id: 'rozwoj',
  petalIndex: 4,
  icon: '💡',
  name: { pl: 'Rozwój', en: 'Growth' },
  color: { hue: '#c88050', light: '#e8a070', dark: '#985830' },
  categories: [
    {
      id: 'roz.wiedza',
      icon: '📚',
      name: { pl: 'Wiedza', en: 'Knowledge' },
      quests: [
        {
          id: 'roz.wiedza.audiobook',
          icon: '🎧',
          title: { pl: 'Audiobook', en: 'Audiobook' },
          task: {
            pl: 'Posłuchaj 15 minut audiobooka rozwojowego. Podczas spaceru, w drodze do pracy, przy sprzątaniu.',
            en: 'Listen to 15 minutes of a personal development audiobook. While walking, commuting, or cleaning.',
          },
          duration: { pl: '15 min', en: '15 min' },
        },
        {
          id: 'roz.wiedza.ebook',
          icon: '📖',
          title: { pl: 'Czytanie', en: 'Reading' },
          task: {
            pl: 'Przeczytaj 10 stron książki rozwojowej. Zaznacz jedno zdanie które chcesz zapamiętać.',
            en: 'Read 10 pages of a personal development book. Highlight one sentence you want to remember.',
          },
          duration: { pl: '15 min', en: '15 min' },
        },
        {
          id: 'roz.wiedza.konsultacja',
          icon: '🗣️',
          title: { pl: 'Konsultacja', en: 'Consultation' },
          task: {
            pl: 'Umów się na rozmowę z kimś kto Cię inspiruje — mentor, coach, terapeuta. Jeden krok.',
            en: 'Schedule a talk with someone who inspires you — mentor, coach, therapist. One step.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
      ],
    },
    {
      id: 'roz.journaling',
      icon: '📝',
      name: { pl: 'Journaling', en: 'Journaling' },
      quests: [
        {
          id: 'roz.journaling.wizja',
          icon: '🎯',
          title: { pl: 'Wizja wieczorna', en: 'Evening vision' },
          task: {
            pl: 'Przed snem napisz jedno zdanie: "Jutro chcę..." — konkretne, osiągalne, ważne dla Ciebie.',
            en: 'Before bed, write one sentence: "Tomorrow I want to..." — specific, achievable, important to you.',
          },
          duration: { pl: '3 min', en: '3 min' },
        },
        {
          id: 'roz.journaling.list',
          icon: '✉️',
          title: { pl: 'List do siebie', en: 'Letter to yourself' },
          task: {
            pl: 'Napisz list do siebie za rok. Co chcesz żeby było inaczej? Co chcesz powiedzieć sobie z przyszłości?',
            en: 'Write a letter to yourself one year from now. What do you want to be different? What would future-you say?',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
        {
          id: 'roz.journaling.emocje',
          icon: '🪞',
          title: { pl: 'Dziennik emocji', en: 'Emotion journal' },
          task: {
            pl: 'Nazwij 3 emocje które dziś czułeś. Dla każdej napisz: co ją wywołało i gdzie ją czujesz w ciele.',
            en: 'Name 3 emotions you felt today. For each, write: what caused it and where you feel it in your body.',
          },
          duration: { pl: '7 min', en: '7 min' },
          widget: { type: 'journal' },
        },
      ],
    },
    {
      id: 'roz.nawyki',
      icon: '🔄',
      name: { pl: 'Nawyki', en: 'Habits' },
      quests: [
        {
          id: 'roz.nawyki.krok',
          icon: '🔥',
          title: { pl: 'Jeden mały krok', en: 'One small step' },
          task: {
            pl: 'Wybierz jeden cel który odkładasz. Zrób NAJMNIEJSZY możliwy krok w jego stronę. Teraz.',
            en: 'Pick one goal you have been putting off. Take the SMALLEST possible step toward it. Now.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
        {
          id: 'roz.nawyki.stacking',
          icon: '🔄',
          title: { pl: 'Habit stacking', en: 'Habit stacking' },
          task: {
            pl: 'Po porannej kawie (nawyk stary) → 2 min planowania dnia (nawyk nowy). Dołącz nowe do starego.',
            en: 'After morning coffee (old habit) → 2 min of planning your day (new habit). Attach new to old.',
          },
          duration: { pl: '2 min', en: '2 min' },
        },
        {
          id: 'roz.nawyki.swietuj',
          icon: '🎉',
          title: { pl: 'Świętuj postęp', en: 'Celebrate progress' },
          task: {
            pl: 'Wymień 3 rzeczy w których jesteś lepszy niż rok temu. Serio. Napisz je i przeczytaj na głos.',
            en: 'Name 3 things you are better at than a year ago. Seriously. Write them down and read aloud.',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
      ],
    },
  ],
}

export default pack
