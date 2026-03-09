export interface Challenge {
  icon: string
  title: string
  task: string
  duration: string
}

export const DAILY_CHALLENGES: Challenge[][] = [
  // 0: Równowaga
  [
    { icon: '🧘', title: 'Skanowanie ciała', task: 'Usiądź wygodnie. Zamknij oczy. Powoli przenieś uwagę od stóp do czubka głowy — zauważ napięcia i puść je.', duration: '10 min' },
    { icon: '🌬️', title: 'Oddech 4-7-8', task: 'Wdech przez nos 4s, zatrzymaj 7s, wydech ustami 8s. Powtórz 4 razy. Poczuj jak ciało się wycisza.', duration: '5 min' },
    { icon: '🪞', title: 'Trzy wdzięczności', task: 'Zapisz 3 konkretne rzeczy za które dziś jesteś wdzięczny. Nie ogólniki — detale. Np. "ciepła kawa o 7:00".', duration: '5 min' },
    { icon: '🧘', title: '5 zmysłów', task: 'Zatrzymaj się teraz. Znajdź: 5 rzeczy widzisz, 4 słyszysz, 3 czujesz dotykiem, 2 wąchasz, 1 smakujesz.', duration: '3 min' },
    { icon: '🌬️', title: 'Box breathing', task: '4s wdech, 4s pauza, 4s wydech, 4s pauza. 6 cykli. Używany przez Navy SEALs przed akcją.', duration: '5 min' },
    { icon: '🪞', title: 'Dziennik emocji', task: 'Nazwij 3 emocje które dziś czułeś. Dla każdej napisz: co ją wywołało i gdzie ją czujesz w ciele.', duration: '7 min' },
    { icon: '🧘', title: 'Minutowa pauza', task: 'Przed każdym posiłkiem dziś — zatrzymaj się na 60 sekund. Trzy oddechy. Dopiero potem jedz.', duration: 'cały dzień' },
  ],
  // 1: Relaks
  [
    { icon: '🪷', title: 'Cisza 5 minut', task: 'Znajdź ciche miejsce. Ustaw timer na 5 min. Siedź i oddychaj. Myśli przyjdą — pozwól im odejść.', duration: '5 min' },
    { icon: '🫧', title: 'Napnij i puść', task: 'Progresywna relaksacja: napnij stopy 5s → puść. Łydki → puść. Tak do góry aż do czoła.', duration: '10 min' },
    { icon: '🌿', title: 'Spacer w naturze', task: 'Wyjdź na 20 min bez słuchawek. Zwróć uwagę na kolory, dźwięki, zapach powietrza.', duration: '20 min' },
    { icon: '🪷', title: 'Medytacja oddechu', task: 'Skup się tylko na oddechu. Licz wydechy 1-10. Jak się zgubisz, zacznij od 1. Bez oceniania.', duration: '8 min' },
    { icon: '🫧', title: 'Skanowanie napięć', task: 'Przeglądnij ciało: szczęka zaciśnięta? Ramiona przy uszach? Ręce w pięści? Puść każde napięcie.', duration: '3 min' },
    { icon: '🌿', title: 'Dźwięki natury', task: 'Włącz nagranie deszczu, oceanu lub lasu. Zamknij oczy na 10 minut. Pozwól się ponieść.', duration: '10 min' },
    { icon: '🪷', title: 'Wizualizacja', task: 'Wyobraź sobie spokojne jezioro o świcie. Mgła, ciepło, cisza. Jesteś tam. Oddychaj tym miejscem.', duration: '7 min' },
  ],
  // 2: Sen
  [
    { icon: '🌛', title: 'Ekrany off', task: 'Dziś wyłącz wszystkie ekrany 1h przed snem. Zamiast scrollowania: książka, herbata, rozmowa.', duration: 'wieczór' },
    { icon: '🛏️', title: 'Chłodna sypialnia', task: 'Ustaw temperaturę na 18-19°C. Otwórz okno na 10 min przed snem. Chłód = głębszy sen.', duration: '5 min' },
    { icon: '🌙', title: 'Skanowanie dnia', task: 'Leżąc w łóżku, przewiń dzień jak film. Bez oceniania. Potem powiedz sobie: "Puszczam ten dzień."', duration: '5 min' },
    { icon: '🌛', title: 'Herbata na dobranoc', task: 'Zaparz melisę lub rumianek. Pij powoli, bez telefonu. Skup się na cieple kubka w dłoniach.', duration: '10 min' },
    { icon: '🛏️', title: 'Stała pora', task: 'Idź dziś spać dokładnie o tej samej porze co wczoraj. Stałość > ilość godzin.', duration: 'wieczór' },
    { icon: '🌙', title: 'Body scan w łóżku', task: 'Leżąc na plecach, rozluźniaj po kolei: stopy, łydki, uda, brzuch, klatkę, ramiona, twarz.', duration: '10 min' },
    { icon: '🌛', title: '3 dobre chwile', task: 'Przed zaśnięciem przypomnij sobie 3 dobre momenty z dziś. Uśmiechnij się do każdego.', duration: '3 min' },
  ],
  // 3: Dieta
  [
    { icon: '💧', title: 'Szklanka na start', task: 'Zaraz po wstaniu wypij szklankę ciepłej wody z cytryną. Przed kawą, przed telefonem.', duration: '2 min' },
    { icon: '🫐', title: 'Tęczowy posiłek', task: 'W jednym posiłku dziś — minimum 3 kolory warzyw/owoców. Im więcej kolorów, tym lepiej.', duration: 'posiłek' },
    { icon: '🍽️', title: 'Jedzenie bez ekranu', task: 'Jeden posiłek dziś zjedz BEZ telefonu i TV. Patrz na jedzenie. Czuj smak każdego kęsa.', duration: 'posiłek' },
    { icon: '💧', title: '8 szklanek', task: 'Postaw 8 gumek recepturek na butelce. Za każdą wypitą szklankę zdejmij jedną.', duration: 'cały dzień' },
    { icon: '🫐', title: 'Fermentacja', task: 'Dodaj dziś do diety coś fermentowanego: kefir, kimchi, kiszone ogórki lub kombucha.', duration: 'posiłek' },
    { icon: '🍽️', title: '20 minut na posiłek', task: 'Ustaw timer. Jedz powoli przez min. 20 minut. Odłóż sztućce między kęsami.', duration: '20 min' },
    { icon: '💧', title: 'Herbata zamiast kawy', task: 'Zamień dziś jedną kawę na herbatę ziołową. Mięta, kurkuma, imbir — wybierz swoją.', duration: '5 min' },
  ],
  // 4: Rozwój
  [
    { icon: '🔥', title: 'Jeden mały krok', task: 'Wybierz jeden cel który odkładasz. Zrób NAJMNIEJSZY możliwy krok w jego stronę. Teraz.', duration: '10 min' },
    { icon: '🔄', title: 'Habit stacking', task: 'Po porannej kawie (nawyk stary) → 2 min planowania dnia (nawyk nowy). Dołącz nowe do starego.', duration: '2 min' },
    { icon: '🎯', title: 'Wizja wieczorna', task: 'Przed snem napisz jedno zdanie: "Jutro chcę..." — konkretne, osiągalne, ważne dla Ciebie.', duration: '3 min' },
    { icon: '🔥', title: 'Strefa dyskomfortu', task: 'Zrób dziś jedną rzecz która Cię lekko stresuje. Rozmowa, pytanie, nowe miejsce. Małą.', duration: '15 min' },
    { icon: '🔄', title: 'Audit nawyków', task: 'Zapisz co robiłeś od rana do teraz co godzinę. Zaznacz: co było świadomą decyzją, a co automatem.', duration: '10 min' },
    { icon: '🎯', title: 'List do siebie', task: 'Napisz list do siebie za rok. Co chcesz żeby było inaczej? Co chcesz powiedzieć sobie z przyszłości?', duration: '10 min' },
    { icon: '🔥', title: 'Świętuj postęp', task: 'Wymień 3 rzeczy w których jesteś lepszy niż rok temu. Serio. Napisz je i przeczytaj na głos.', duration: '5 min' },
  ],
  // 5: Aktywność
  [
    { icon: '🧘', title: 'Powitanie słońca', task: 'Stań przy oknie. 3 cykle powitania słońca — w każdej pozycji jeden pełen oddech.', duration: '7 min' },
    { icon: '🚶', title: 'Świadomy spacer', task: 'Idź 15 minut skupiając się na stopach: podnoszenie, ruch, stawianie. Krok za krokiem.', duration: '15 min' },
    { icon: '⚡', title: 'Pobudka ciała', task: '5 minut: pajacyki, krążenia ramion, podskoki w miejscu. Obudź każdą część ciała.', duration: '5 min' },
    { icon: '🤸', title: 'Rozciąganie biurowe', task: 'Przy biurku: skręt tułowia, krążenia szyją, rozciągnij nadgarstki, prostuj plecy. Co 2 godziny.', duration: '3 min' },
    { icon: '🚶', title: 'Schody nie winda', task: 'Dziś za każdym razem wybierz schody. Wchodząc licz kroki. Poczuj siłę w nogach.', duration: 'cały dzień' },
    { icon: '⚡', title: 'Taniec 1 piosenki', task: 'Włącz ulubioną piosenkę i tańcz. Nie patrz jak wyglądasz. Ruszaj się jak ciało chce.', duration: '4 min' },
    { icon: '🧘', title: 'Plank oddechowy', task: 'Deska. Nie licz sekund — licz oddechy. Wdech, wydech = 1. Dociągnij do 10 oddechów.', duration: '3 min' },
  ],
]
