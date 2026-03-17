import type { DataPack } from './types'

const pack: DataPack = {
  id: 'rownowaga',
  petalIndex: 0,
  icon: '⚖️',
  name: { pl: 'Równowaga', en: 'Balance' },
  color: { hue: '#6b8f5e', light: '#8db87a', dark: '#3d5e34' },
  categories: [
    {
      id: 'row.oddech',
      icon: '🌬️',
      name: { pl: 'Oddychanie', en: 'Breathing' },
      quests: [
        {
          id: 'row.oddech.478',
          icon: '🌬️',
          title: { pl: 'Oddech 4-7-8', en: '4-7-8 Breathing' },
          task: {
            pl: 'Wdech przez nos 4s, zatrzymaj 7s, wydech ustami 8s. Powtórz 4 razy. Poczuj jak ciało się wycisza.',
            en: 'Inhale through nose 4s, hold 7s, exhale through mouth 8s. Repeat 4 times. Feel your body calm down.',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
        {
          id: 'row.oddech.box',
          icon: '📦',
          title: { pl: 'Box breathing', en: 'Box breathing' },
          task: {
            pl: '4s wdech, 4s pauza, 4s wydech, 4s pauza. 6 cykli. Używany przez Navy SEALs przed akcją.',
            en: '4s inhale, 4s hold, 4s exhale, 4s hold. 6 cycles. Used by Navy SEALs before action.',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
        {
          id: 'row.oddech.pauza',
          icon: '⏸️',
          title: { pl: 'Minutowa pauza', en: 'One-minute pause' },
          task: {
            pl: 'Przed każdym posiłkiem dziś — zatrzymaj się na 60 sekund. Trzy oddechy. Dopiero potem jedz.',
            en: 'Before every meal today — stop for 60 seconds. Three breaths. Only then eat.',
          },
          duration: { pl: 'cały dzień', en: 'all day' },
        },
      ],
    },
    {
      id: 'row.uwaznosc',
      icon: '🧘',
      name: { pl: 'Uważność', en: 'Mindfulness' },
      quests: [
        {
          id: 'row.uwaznosc.skan',
          icon: '🧘',
          title: { pl: 'Skanowanie ciała', en: 'Body scan' },
          task: {
            pl: 'Usiądź wygodnie. Zamknij oczy. Powoli przenieś uwagę od stóp do czubka głowy — zauważ napięcia i puść je.',
            en: 'Sit comfortably. Close your eyes. Slowly move your attention from feet to the top of your head — notice tensions and release them.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
        {
          id: 'row.uwaznosc.5zmyslow',
          icon: '👁️',
          title: { pl: '5 zmysłów', en: '5 senses' },
          task: {
            pl: 'Zatrzymaj się teraz. Znajdź: 5 rzeczy widzisz, 4 słyszysz, 3 czujesz dotykiem, 2 wąchasz, 1 smakujesz.',
            en: 'Stop right now. Find: 5 things you see, 4 you hear, 3 you feel by touch, 2 you smell, 1 you taste.',
          },
          duration: { pl: '3 min', en: '3 min' },
        },
        {
          id: 'row.uwaznosc.emocje',
          icon: '🪞',
          title: { pl: 'Dziennik emocji', en: 'Emotion journal' },
          task: {
            pl: 'Nazwij 3 emocje które dziś czułeś. Dla każdej napisz: co ją wywołało i gdzie ją czujesz w ciele.',
            en: 'Name 3 emotions you felt today. For each, write: what caused it and where you feel it in your body.',
          },
          duration: { pl: '7 min', en: '7 min' },
        },
      ],
    },
    {
      id: 'row.wdziecznosc',
      icon: '🙏',
      name: { pl: 'Wdzięczność', en: 'Gratitude' },
      quests: [
        {
          id: 'row.wdziecznosc.3rzeczy',
          icon: '🪞',
          title: { pl: 'Trzy wdzięczności', en: 'Three gratitudes' },
          task: {
            pl: 'Zapisz 3 konkretne rzeczy za które dziś jesteś wdzięczny. Nie ogólniki — detale.',
            en: 'Write down 3 specific things you are grateful for today. No generalities — details.',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
        {
          id: 'row.wdziecznosc.pozytyw',
          icon: '☀️',
          title: { pl: 'Pozytywna afirmacja', en: 'Positive affirmation' },
          task: {
            pl: 'Stań przed lustrem. Powiedz 3 dobre rzeczy o sobie na głos. Powtórz dwa razy.',
            en: 'Stand in front of a mirror. Say 3 good things about yourself out loud. Repeat twice.',
          },
          duration: { pl: '3 min', en: '3 min' },
        },
        {
          id: 'row.wdziecznosc.zyczliwosc',
          icon: '💛',
          title: { pl: 'Akt życzliwości', en: 'Act of kindness' },
          task: {
            pl: 'Zrób dziś jedną rzecz dla kogoś — bez oczekiwania czegokolwiek w zamian. Mała lub duża.',
            en: 'Do one thing for someone today — without expecting anything in return. Small or big.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
      ],
    },
  ],
}

export default pack
