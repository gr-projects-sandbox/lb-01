export interface ContentItem {
  text: string
  author?: string
}

export interface MindMapBranch {
  label: string
  icon: string
  items: ContentItem[]
  apiSource?: string
}

export const PETAL_MINDMAP: Record<number, { branches: MindMapBranch[] }> = {
  // Równowaga
  0: {
    branches: [
      { label: 'Mindfulness', icon: '🧘', apiSource: 'https://zenquotes.io/api/random', items: [
        { text: 'Bądź obecny w tym momencie — to jedyny, który naprawdę masz.' },
        { text: 'Obserwuj myśli jak chmury — przychodzą i odchodzą.' },
      ]},
      { label: 'Oddychanie', icon: '🌬️', items: [
        { text: 'Technika 4-7-8: wdech 4s, zatrzymaj 7s, wydech 8s.' },
        { text: 'Box breathing: 4s wdech, 4s pauza, 4s wydech, 4s pauza.' },
        { text: '3 głębokie oddechy przed każdą decyzją.' },
      ]},
      { label: 'Refleksja', icon: '🪞', apiSource: 'https://www.affirmation.dev/', items: [
        { text: 'Jestem wystarczający dokładnie taki, jaki jestem.' },
        { text: 'Moje wewnętrzne spokój jest moją supermocą.' },
      ]},
    ]
  },
  // Relaks
  1: {
    branches: [
      { label: 'Medytacja', icon: '🪷', apiSource: 'https://zenquotes.io/api/random', items: [
        { text: 'Zacznij od 5 minut ciszy dziennie.' },
        { text: 'Skup się na oddechu — to naturalny kotwica uwagi.' },
      ]},
      { label: 'Techniki relaksu', icon: '🫧', items: [
        { text: 'Progresywna relaksacja mięśni: napnij → puść, od stóp do głowy.' },
        { text: 'Body scan: przeskanuj ciało od stóp do czubka głowy.' },
        { text: 'Wizualizacja: wyobraź sobie spokojne miejsce nad wodą.' },
      ]},
      { label: 'Natura', icon: '🌿', items: [
        { text: '20 minut w naturze obniża kortyzol o 20%.' },
        { text: 'Shinrin-yoku: kąpiel leśna — spacer wśród drzew.' },
        { text: 'Słuchaj dźwięków natury — deszcz, ocean, ptaki.' },
      ]},
    ]
  },
  // Sen
  2: {
    branches: [
      { label: 'Rytuały', icon: '🌛', items: [
        { text: 'Wyłącz ekrany 1h przed snem.' },
        { text: 'Herbata z melisy lub rumianku na dobranoc.' },
        { text: 'Zapisz 3 rzeczy, za które jesteś wdzięczny.' },
      ]},
      { label: 'Higiena snu', icon: '🛏️', items: [
        { text: 'Sypiaj w 18-20°C — chłodniej = głębszy sen.' },
        { text: 'Stały czas budzenia, nawet w weekendy.' },
        { text: 'Ciemność, cisza, komfort — trzy filary dobrego snu.' },
      ]},
      { label: 'Wieczór', icon: '🌙', apiSource: 'https://www.affirmation.dev/', items: [
        { text: 'Puszczam ten dzień — jutro jest nową szansą.' },
        { text: 'Moje ciało zasługuje na odpoczynek.' },
      ]},
    ]
  },
  // Dieta
  3: {
    branches: [
      { label: 'Nawodnienie', icon: '💧', items: [
        { text: 'Zacznij dzień szklanką ciepłej wody z cytryną.' },
        { text: '8 szklanek wody dziennie — ustaw przypomnienie.' },
        { text: 'Herbaty ziołowe liczą się do bilansu płynów.' },
      ]},
      { label: 'Superfood', icon: '🫐', items: [
        { text: 'Jagody, szpinak, orzechy — codzienne superfoods.' },
        { text: 'Kurkuma z pieprzem — naturalny przeciwzapalny duet.' },
        { text: 'Fermentowane jedzenie: kimchi, kefir, kombucha.' },
      ]},
      { label: 'Mindful eating', icon: '🍽️', items: [
        { text: 'Jedz powoli — 20 minut to minimum na posiłek.' },
        { text: 'Odłóż telefon podczas jedzenia.' },
        { text: 'Smakuj każdy kęs — angażuj wszystkie zmysły.' },
      ]},
    ]
  },
  // Rozwój
  4: {
    branches: [
      { label: 'Motywacja', icon: '🔥', apiSource: 'https://zenquotes.io/api/random', items: [
        { text: 'Małe kroki każdego dnia tworzą wielkie zmiany.' },
        { text: 'Porażka to informacja zwrotna, nie koniec drogi.' },
      ]},
      { label: 'Nawyki', icon: '🔄', items: [
        { text: 'Atomic habits: 1% lepiej każdego dnia = 37× lepiej w rok.' },
        { text: 'Habit stacking: dołącz nowy nawyk do istniejącego.' },
        { text: '21 dni tworzy nawyk, 90 dni czyni go stylem życia.' },
      ]},
      { label: 'Cele', icon: '🎯', apiSource: 'https://www.affirmation.dev/', items: [
        { text: 'Mam jasną wizję i podążam za nią z odwagą.' },
        { text: 'Każdy dzień przybliża mnie do mojego celu.' },
      ]},
    ]
  },
  // Aktywność
  5: {
    branches: [
      { label: 'Rozciąganie', icon: '🤸', items: [
        { text: '5 min rozciągania rano budzi ciało i umysł.' },
        { text: 'Cat-cow: na czworakach — wygięcie i zaokrąglenie kręgosłupa.' },
        { text: 'Rozciąganie bioder: gołąb, motyl, głęboki przysiad.' },
      ]},
      { label: 'Spacer', icon: '🚶', items: [
        { text: '10 000 kroków dziennie — złoty standard.' },
        { text: 'Spacer po obiedzie obniża cukier o 30%.' },
        { text: 'Walking meditation: świadomy spacer, krok za krokiem.' },
      ]},
      { label: 'Energia', icon: '⚡', items: [
        { text: '7-minutowy trening: jumping jacks, pompki, plank.' },
        { text: 'Taniec do ulubionej piosenki = natychmiastowa energia.' },
        { text: 'Power pose: 2 minuty w pozie mocy podnosi pewność.' },
      ]},
    ]
  },
}
