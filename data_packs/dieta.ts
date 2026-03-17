import type { DataPack } from './types'

const pack: DataPack = {
  id: 'dieta',
  petalIndex: 3,
  icon: '🍏',
  name: { pl: 'Dieta', en: 'Diet' },
  color: { hue: '#6aaa8a', light: '#8acaaa', dark: '#3e7a5e' },
  categories: [
    {
      id: 'diet.woda',
      icon: '💧',
      name: { pl: 'Nawodnienie', en: 'Hydration' },
      quests: [
        {
          id: 'diet.woda.start',
          icon: '💧',
          title: { pl: 'Szklanka na start', en: 'Glass on waking' },
          task: {
            pl: 'Zaraz po wstaniu wypij szklankę ciepłej wody z cytryną. Przed kawą, przed telefonem.',
            en: 'Right after waking, drink a glass of warm water with lemon. Before coffee, before phone.',
          },
          duration: { pl: '2 min', en: '2 min' },
        },
        {
          id: 'diet.woda.licznik',
          icon: '🔢',
          title: { pl: 'Licznik wody', en: 'Water tracker' },
          task: {
            pl: 'Śledź ile szklanek wody wypijasz dzisiaj. Cel: 8 szklanek.',
            en: 'Track how many glasses of water you drink today. Goal: 8 glasses.',
          },
          duration: { pl: 'cały dzień', en: 'all day' },
          widget: { type: 'counter', target: 8, unit: { pl: 'szklanek', en: 'glasses' } },
        },
        {
          id: 'diet.woda.herbata',
          icon: '🍵',
          title: { pl: 'Herbaty ziołowe', en: 'Herbal teas' },
          task: {
            pl: 'Zamień dziś jedną kawę na herbatę ziołową. Mięta, kurkuma, imbir — wybierz swoją.',
            en: 'Replace one coffee with herbal tea today. Mint, turmeric, ginger — pick your favorite.',
          },
          duration: { pl: '5 min', en: '5 min' },
        },
      ],
    },
    {
      id: 'diet.jedzenie',
      icon: '🥗',
      name: { pl: 'Świadome jedzenie', en: 'Mindful eating' },
      quests: [
        {
          id: 'diet.jedzenie.koktajl',
          icon: '🥤',
          title: { pl: 'Koktajl owocowo-warzywny', en: 'Fruit & veggie smoothie' },
          task: {
            pl: 'Zrób dziś koktajl: szpinak + banan + jabłko + woda. Pij powoli, smakuj każdy łyk.',
            en: 'Make a smoothie today: spinach + banana + apple + water. Drink slowly, savor each sip.',
          },
          duration: { pl: '10 min', en: '10 min' },
        },
        {
          id: 'diet.jedzenie.tecza',
          icon: '🌈',
          title: { pl: 'Tęczowy posiłek', en: 'Rainbow meal' },
          task: {
            pl: 'W jednym posiłku dziś — minimum 3 kolory warzyw/owoców. Im więcej kolorów, tym lepiej.',
            en: 'In one meal today — at least 3 colors of veggies/fruits. The more colors, the better.',
          },
          duration: { pl: 'posiłek', en: 'meal' },
        },
        {
          id: 'diet.jedzenie.20min',
          icon: '🍽️',
          title: { pl: '20 minut na posiłek', en: '20-minute meal' },
          task: {
            pl: 'Ustaw timer. Jedz powoli przez min. 20 minut. Odłóż sztućce między kęsami. Bez ekranów.',
            en: 'Set a timer. Eat slowly for at least 20 minutes. Put down cutlery between bites. No screens.',
          },
          duration: { pl: '20 min', en: '20 min' },
        },
      ],
    },
    {
      id: 'diet.suple',
      icon: '💊',
      name: { pl: 'Suplementacja', en: 'Supplements' },
      quests: [
        {
          id: 'diet.suple.przypomnienie',
          icon: '⏰',
          title: { pl: 'Przypomnienie o suplementach', en: 'Supplement reminder' },
          task: {
            pl: 'Ustaw alarm na stałą porę. Weź swoje suplementy. Zaznacz w aplikacji że zrobione.',
            en: 'Set an alarm for a fixed time. Take your supplements. Mark as done in the app.',
          },
          duration: { pl: '1 min', en: '1 min' },
        },
        {
          id: 'diet.suple.fermentacja',
          icon: '🫐',
          title: { pl: 'Fermentacja', en: 'Fermented food' },
          task: {
            pl: 'Dodaj dziś do diety coś fermentowanego: kefir, kimchi, kiszone ogórki lub kombucha.',
            en: 'Add something fermented to your diet today: kefir, kimchi, pickles, or kombucha.',
          },
          duration: { pl: 'posiłek', en: 'meal' },
        },
        {
          id: 'diet.suple.kcal',
          icon: '📊',
          title: { pl: 'Świadome kalorie', en: 'Calorie awareness' },
          task: {
            pl: 'Zapisz co jesz i orientacyjną liczbę kcal. Nie chodzi o dietę — o świadomość.',
            en: 'Write down what you eat with approximate kcal. It\'s about awareness, not dieting.',
          },
          duration: { pl: 'cały dzień', en: 'all day' },
          widget: { type: 'journal' },
        },
      ],
    },
  ],
}

export default pack
