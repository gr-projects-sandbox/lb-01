import type { DataPack } from './types'

const pack: DataPack = {
  id: 'sen',
  petalIndex: 2,
  icon: '🌙',
  name: { pl: 'Sen', en: 'Sleep' },
  color: { hue: '#8878a8', light: '#a898c8', dark: '#5d4f80' },
  categories: [
    {
      id: 'sen.medytacja',
      icon: '🧘',
      name: { pl: 'Medytacja na sen', en: 'Sleep meditation' },
      quests: [
        {
          id: 'sen.medytacja.bodyscan',
          icon: '🌙',
          title: { pl: 'Body scan w łóżku', en: 'Bedtime body scan' },
          task: {
            pl: 'Leżąc na plecach, rozluźniaj po kolei: stopy, łydki, uda, brzuch, klatkę, ramiona, twarz.',
            en: 'Lying on your back, relax one by one: feet, calves, thighs, belly, chest, shoulders, face.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
        {
          id: 'sen.medytacja.oddech',
          icon: '🌬️',
          title: { pl: 'Oddech 4-7-8', en: '4-7-8 Breathing' },
          task: {
            pl: 'Leżąc w łóżku: wdech 4s, pauza 7s, wydech 8s. 4 cykle. Idealne do zasypiania.',
            en: 'In bed: inhale 4s, hold 7s, exhale 8s. 4 cycles. Perfect for falling asleep.',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
        {
          id: 'sen.medytacja.puszczam',
          icon: '🎬',
          title: { pl: 'Skanowanie dnia', en: 'Day review' },
          task: {
            pl: 'Leżąc w łóżku, przewiń dzień jak film. Bez oceniania. Potem powiedz sobie: "Puszczam ten dzień."',
            en: 'Lying in bed, rewind your day like a movie. No judgment. Then tell yourself: "I release this day."',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
      ],
    },
    {
      id: 'sen.analiza',
      icon: '📓',
      name: { pl: 'Analiza snu', en: 'Sleep analysis' },
      quests: [
        {
          id: 'sen.analiza.dziennik',
          icon: '📝',
          title: { pl: 'Dziennik snu', en: 'Sleep journal' },
          task: {
            pl: 'Rano zapisz: o której zasnąłeś, jak spałeś (1-10), ile razy się budziłeś, co śniłeś.',
            en: 'In the morning write: when you fell asleep, sleep quality (1-10), how many times you woke, what you dreamt.',
          },
          duration: { pl: '3 min', en: '3 min' },
          widget: { type: 'journal' },
        },
        {
          id: 'sen.analiza.ekrany',
          icon: '📵',
          title: { pl: 'Ekrany off', en: 'Screens off' },
          task: {
            pl: 'Dziś wyłącz wszystkie ekrany 1h przed snem. Zamiast scrollowania: książka, herbata, rozmowa.',
            en: 'Turn off all screens 1h before bed tonight. Instead of scrolling: a book, tea, conversation.',
          },
          duration: { pl: 'wieczór', en: 'evening' },
        },
        {
          id: 'sen.analiza.pora',
          icon: '⏰',
          title: { pl: 'Stała pora', en: 'Consistent bedtime' },
          task: {
            pl: 'Idź dziś spać dokładnie o tej samej porze co wczoraj. Stałość > ilość godzin.',
            en: 'Go to bed today at exactly the same time as yesterday. Consistency > number of hours.',
          },
          duration: { pl: 'wieczór', en: 'evening' },
        },
      ],
    },
    {
      id: 'sen.wdziecznosc',
      icon: '🙏',
      name: { pl: 'Dziennik wdzięczności', en: 'Gratitude journal' },
      quests: [
        {
          id: 'sen.wdziecznosc.3chwile',
          icon: '🌛',
          title: { pl: '3 dobre chwile', en: '3 good moments' },
          task: {
            pl: 'Przed zaśnięciem przypomnij sobie 3 dobre momenty z dziś. Uśmiechnij się do każdego.',
            en: 'Before falling asleep, recall 3 good moments from today. Smile at each one.',
          },
          duration: { pl: '3 min', en: '3 min' },
        },
        {
          id: 'sen.wdziecznosc.herbata',
          icon: '🍵',
          title: { pl: 'Herbata na dobranoc', en: 'Bedtime tea' },
          task: {
            pl: 'Zaparz melisę lub rumianek. Pij powoli, bez telefonu. Skup się na cieple kubka w dłoniach.',
            en: 'Brew chamomile or lemon balm. Sip slowly, no phone. Focus on the warmth of the cup in your hands.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
        {
          id: 'sen.wdziecznosc.chlod',
          icon: '🛏️',
          title: { pl: 'Chłodna sypialnia', en: 'Cool bedroom' },
          task: {
            pl: 'Ustaw temperaturę na 18-19°C. Otwórz okno na 10 min przed snem. Chłód = głębszy sen.',
            en: 'Set temperature to 18-19°C. Open the window 10 min before bed. Cool air = deeper sleep.',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
      ],
    },
  ],
}

export default pack
