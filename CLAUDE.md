# LOTOS-BALANCE

## Co to jest

Aplikacja mindfulness z 3D kwiatem lotosu. 6 płatków → każdy ma 3 kategorie → każda ma 3 questy. Nawigacja po grafie questów jak po galaktyce: klikasz, kamera leci, widzisz dzieci.

- React + TypeScript + Vite + Three.js (React Three Fiber + drei)
- Język UI: **polski**
- Target: iPhone SE (małe ekrany dotykowe)

## Dane

```
DataPack (6 płatków)
  └── Category[3]        ← dokładnie 3
        └── Quest[3]     ← dokładnie 3
```

- Pliki: `data_packs/*.ts` → importowane przez `src/data/loadPacks.ts`
- Typy: `src/data/types.ts` — `DataPack`, `Category`, `Quest`
- Każdy quest ma `unlocks: string[]` — graf odblokowania
- `DataPack.rootId` → pierwszy quest zawsze odblokowany
- Progress: `src/data/useProgress.ts` → localStorage (`lotos-progress-{petalIndex}`)

## Nawigacja — DOKŁADNIE 2 poziomy pod płatkiem

### Poziom 0: FLOWER (kwiat)
- Widok: 3D kwiat lotosu z 6 płatkami, autoRotate
- Interakcja: klik w płatek → leci kamera do poziomu 1
- Etykiety: `src/labels/PetalLabels.tsx` — nazwa + ikona + procent

### Poziom 1: 3 KATEGORIE
- Po kliknięciu płatka widzisz **DOKŁADNIE 3 węzły** — kategorie tego płatka
- Każdy węzeł = orb + **karta HTML** (ikona, tytuł, opis, postęp X/3, strzałka ▶)
- Center orb = nazwa płatka + procent ogólny
- Klik w kategorię → kamera leci do poziomu 2

### Poziom 2: 3 QUESTY
- Po kliknięciu kategorii widzisz **DOKŁADNIE 3 węzły** — questy tej kategorii
- Każdy węzeł = orb + **karta HTML** (ikona, tytuł, opis, czas, przycisk "Zrobione!")
- Center orb = nazwa kategorii + procent kategorii
- Quest zablokowany = karta przyciemniona + 🔒
- Quest ukończony = ✅
- Quest odblokowany = przycisk "Zrobione!" na karcie

### Cofanie
- **TYLKO przycisk "← Wróć"** na dole ekranu
- **NIGDY `onPointerMissed`** — to psuje obracanie kamery, to anty-UX
- **NIGDY handlery pointer na zewnętrznym div** — to łapie drag jako klik
- Wróć z poziomu 2 → poziom 1 (3 kategorie)
- Wróć z poziomu 1 → kwiat

## Stan nawigacji

```typescript
interface GalaxyState {
  zoom: 'FLOWER' | 'PETAL'
  petalIndex: number | null
  focusPath: string[]            // [] = kategorie, ['catId'] = questy
  selectedQuestId: string | null
}
```

- `focusPath: []` → pokazuj 3 kategorie
- `focusPath: ['bal.oddech']` → pokazuj 3 questy z kategorii oddech
- Klik w kategorię = push na stack
- Wróć = pop ze stack
- Wróć z pustego stack = wróć do kwiatu

## Kamera — maszyna stanów

```
IDLE ──(klik)──→ FLYING ──(dotarł)──→ FREE
  ↑                                      │
  └──────────(wróć do kwiatu)────────────┘
```

### Zasady ABSOLUTNE:
1. **OrbitControls jest JEDYNYM właścicielem kamery w FREE** — NIGDY nie ruszaj `camera.position` ani `ctrl.target` w stanie FREE
2. **FLYING**: `camera.position.lerp()` + `ctrl.target.lerp()`, controls wyłączone (`enableRotate=false`)
3. **Po dotarciu (ARRIVE_THRESHOLD)**: snap pozycję, przełącz na FREE, włącz controls
4. **Zmiana `galaxyKey`** → reset do FLYING (nowy cel)
5. **Camera target = focusCenter** — kamera ZAWSZE orbituje wokół aktualnego focus point
6. **focusCenter przesuwa się** wzdłuż kierunku płatka w miarę głębokości (`depth * DEPTH_STEP`)
7. **Powrót do FLOWER** → FLYING do home, potem IDLE z autoRotate

### galaxyKey
```typescript
`${zoom}:${petalIndex}:${focusPath.join('/')}`
```
Każda zmiana klucza → FLYING do nowego celu.

## Węzły 3D — orby

- Orb = **layered glow sprites** (additive blending), NIE solid geometry
- 3 warstwy: core, mid, outer — każda to `<sprite>` z `CanvasTexture` (radialGradient)
- Gradient kończy się na `h * 0.85` (nie na krawędzi canvas!) żeby nie było ostrej krawędzi
- `fillRect` zamiast `arc` żeby gradient szedł do zera
- Particles: 40 punktów w powłoce blisko orba, złote (#f0d070)
- Invisible mesh (`opacity: 0`) jako click target
- Locked orb = przyciemniony, bez particles, bez pulsowania

## Karty HTML — JEDNOLITY styl

**Jedna karta, jeden komponent, jeden styl** — NIE rób osobnych komponentów CategoryCard i QuestCard. Jeden `NodeCard` z propsami.

### Struktura karty (zawsze taka sama)
```
┌─────────────────────┐
│ 🌬️  Oddychanie      │  ← ikona + tytuł (bold 14px)
│ Techniki oddechowe   │  ← opis (11px, opacity 0.7, max 2 linijki)
│ ⏱ 5 min    [Zrobione!] │  ← meta + akcja
└─────────────────────┘
```

### Zawartość meta wiersza (dolny):
- **Kategoria**: „X/3 ukończone" + strzałka ▶
- **Quest odblokowany**: „⏱ czas" + przycisk "Zrobione!"
- **Quest ukończony**: „⏱ czas" + ✅
- **Quest zablokowany**: „⏱ czas" + 🔒 (cała karta opacity 0.4)

### Styl (stały, nie zmieniający się między poziomami)
```css
width: 180px
background: dark ? rgba(20,18,30,0.9) : rgba(255,252,245,0.95)
backdropFilter: blur(12px)
border: 1.5px solid ${locked ? 'rgba(100,100,100,0.3)' : accentColor}
borderRadius: 14px
padding: 12px 14px
boxShadow: 0 0 20px ${accentColor}30
fontFamily: "Inter", system-ui, sans-serif
```

### Zasady:
- `<Html center>` BEZ `distanceFactor` — stały rozmiar px
- Karta BLISKO orba: offset Y = **-0.25** (nie -0.55, nie -0.7)
- Emoji ikona **WEWNĄTRZ** karty w nagłówku, **NIE** osobno nad orbem
- `zIndexRange={[10000, 0]}`
- `stopPropagation` na click i pointerDown
- GalaxyNode z `icon=""` — orb nie renderuje tekstu, tylko glow

## Pozycjonowanie orbów — geometria wachlarza

Płatek rośnie od centrum kwiatu na zewnątrz i KU GÓRZE. Orby kontynuują ten kierunek.

### Kierunek płatka
```
petalAngle = (petalIndex / 6) * PI * 2 + LAYERS[2].off
dirX = -sin(petalAngle)    // kierunek radialny (outward) w XZ
dirZ = -cos(petalAngle)
perpX = -dirZ               // prostopadły (tangent) do rozłożenia na boki
perpZ = dirX
```

### Focus center (środek aktualnego widoku)
```
focusCenter(petalIndex, depth):
  x = anchor.x + dirX * depth * DEPTH_STEP
  y = anchor.y + depth * RISE_PER_DEPTH     ← KU GÓRZE z każdym poziomem
  z = anchor.z + dirZ * depth * DEPTH_STEP
```
- `depth=0` → na kotwicy płatka (petal anchor)
- `depth=1` → jeden krok dalej wzdłuż płatka i wyżej
- DEPTH_STEP ≈ 1.5, RISE_PER_DEPTH ≈ 0.4

### Layout 3 dzieci (wachlarz)
```
layoutChildren(3, petalIndex, depth):
  center = focusCenter(petalIndex, depth)
  childDistance ≈ 1.3        ← jak daleko od center wzdłuż kierunku płatka
  lateralGap ≈ 1.0          ← odstęp między dziećmi prostopadle
  childRise ≈ 0.3           ← lekkie uniesienie dzieci nad center

  dziecko[i]:
    lateral = -1.0, 0.0, +1.0  (3 dzieci symetrycznie)
    x = center.x + dirX * childDistance + perpX * lateral
    y = center.y + childRise
    z = center.z + dirZ * childDistance + perpZ * lateral
```

Wizualnie: center orb w środku, 3 orby z kartami rozłożone wachlarzem dalej wzdłuż płatka, lekko na boki.

## Kamera — konkretne pozycje

### FLOWER (home)
- Pozycja: `[0, 12, 5]` — wysoko nad kwiatem
- Target: `[0, 0, 0]` — centrum kwiatu
- autoRotate włączony, enableZoom wyłączony

### PETAL (kategorie / questy)
```
center = focusCenter(petalIndex, depth)
dir = normalize(center.xz)    ← kierunek radialny w XZ

camPos:
  x = center.x - dir.x * CAM_PETAL_DIST   ← ZA focus center (bliżej kwiatu)
  y = center.y + CAM_PETAL_HEIGHT          ← NAD focus center
  z = center.z - dir.z * CAM_PETAL_DIST

lookAt = center                             ← kamera patrzy NA focus center
```
- CAM_PETAL_HEIGHT ≈ 3, CAM_PETAL_DIST ≈ 2
- Kamera jest ZA i NAD orbami, patrzy w kierunku wachlarza
- Po dotarciu OrbitControls obraca wokół `center` — orby są na środku ekranu
- Klik w dziecko → nowy depth → nowy center → kamera PŁYNNIE leci (lerp) do nowej pozycji

### Płynność
- Każda zmiana poziomu = FLYING z lerp, NIE teleportacja
- Lerp speed ≈ 0.05 — wystarczająco wolno żeby widać animację
- Po dotarciu snap + FREE — zero dryfu

## Pliki — co jest co

### Kwiat (NIE RUSZAĆ bez potrzeby)
- `src/petal/PetalMesh.tsx` — mesh płatka
- `src/petal/createPetalGeo.ts` — geometria proceduralna
- `src/petal/paintTexture.ts` — tekstura płatka
- `src/petal/usePetalMat.ts` — materiał płatka
- `src/center/CenterOrb.tsx` — centralny orb kwiatu
- `src/data/petals.ts` — dane płatków + LAYERS

### Galaxy (nawigacja questów)
- `src/galaxy/constants.ts` — stałe, typy, PETAL_ANCHORS
- `src/galaxy/useGalaxyLayout.ts` — focusCenter(), layoutChildren()
- `src/galaxy/GalaxyNode.tsx` — orb ze sprite glow + particles
- `src/galaxy/GalaxyCenterOrb.tsx` — center orb z kartą
- `src/galaxy/GalaxyLink.tsx` — linia łącząca center → child
- `src/galaxy/GalaxyNavigation.tsx` — główny komponent: 3 kategorie LUB 3 questy
- `src/galaxy/QuestPopover.tsx` — (legacy, do usunięcia — karty są teraz inline)

### Reszta
- `src/App.tsx` — stan, handlery, Canvas
- `src/scene/Scene.tsx` — kompozycja sceny
- `src/camera/CameraController.tsx` — maszyna stanów kamery
- `src/labels/PetalLabels.tsx` — etykiety na płatkach
- `src/effects/` — Bloom, Stars, GoldDust, FloorShadow, BreathingEffects

## Anty-wzorce — NIGDY tego nie rób

1. **NIGDY `onPointerMissed` do cofania** — drag kamery triggeruje to jako klik
2. **NIGDY pointer handlers na zewnętrznym div** — łapie WSZYSTKIE dotknięcia
3. **NIGDY lerp w stanie FREE** — walczy z OrbitControls, kamera skacze
4. **NIGDY `distanceFactor` na Html** — karty zmieniają rozmiar z odległością, anty-UX
5. **NIGDY flat lista questów** — ZAWSZE 3 kategorie → 3 questy, dwa poziomy
6. **NIGDY emoji osobno od karty** — ikona musi być WEWNĄTRZ karty
7. **NIGDY cały graf naraz** — pokazuj TYLKO bezpośrednie dzieci aktualnego focusa
8. **NIGDY `import { Type }` dla interfejsów** — Vite/esbuild wymaga `import type { Type }`
9. **NIGDY nie zmieniaj kart w momencie kliknięcia** — karty zmieniają się DOPIERO gdy kamera doleci (onArrive). Klik → galaxy się zmienia (kamera leci) → displayGalaxy się NIE zmienia → kamera doleci → displayGalaxy = galaxy → karty się aktualizują. Inaczej user klika kartę i ona ZNIKA mu pod palcem.
10. **NIGDY onClick na mesh bez drag detection** — Three.js onClick = pointerup, więc orbit drag kończy się "kliknięciem". Zawsze porównuj pointerDown vs onClick pozycję (dist < 8px = tap, > 8px = drag)

## Instrukcje dla instancji — jak NIE powtórzyć błędów

### ZANIM napiszesz kod, odpowiedz sobie:
1. Ile węzłów będzie widocznych? (odpowiedź: ZAWSZE 3)
2. Co się stanie jak user dotknie ekran żeby obrócić kamerę? (odpowiedź: NIC, tylko OrbitControls)
3. Co się stanie jak user kliknie w pusty obszar? (odpowiedź: NIC, tylko przycisk Wróć cofa)
4. Czy kamera będzie na środku focusa? (odpowiedź: TAK, lookAt = focusCenter)
5. Czy karty wyglądają tak samo na każdym poziomie? (odpowiedź: TAK, jeden komponent)

### Błędy z poprzedniej sesji — NIE powtarzaj:
- **Spłaszczenie drzewa**: użyto `flatMap` → wszystkie questy na jednym poziomie → brak 3×3
- **Graf unlock jako drzewo nawigacji**: root ma 1-2 dzieci, nie 3. Nawigacja musi iść po KATEGORIACH (3) → QUESTACH (3), a unlock graf tylko kontroluje zablokowanie/odblokowanie
- **`onPointerMissed` do cofania**: drag = pointerMissed → user obraca kamerę → wyrzuca go z płatka
- **Pointer handlers na div opakowującym Canvas**: łapie WSZYSTKIE dotknięcia, krótki drag na płatku = wejście w płatek
- **Camera target nie podąża za focusem**: kamera orbitowała wokół starego punktu zamiast nowego center
- **Lerp w stanie FREE**: kamera skakała bo lerp walczył z OrbitControls
- **Emoji nad orbem + osobna karta pod spodem**: user widzi 2 elementy zamiast 1
- **Różne komponenty kart na różnych poziomach**: CategoryCard vs QuestCard z różnymi stylami
- **Ignorowanie wymagania "3 dzieci"**: user prosił 3+ razy, kod robił 1 lub 9
- **Karty zmieniające się pod palcem**: klik w kartę → React re-render → karta znika i pojawia się nowa treść ZANIM kamera doleciała. Fix: `displayGalaxy` aktualizuje się dopiero na `onArrive` z CameraController
- **Mesh onClick bez drag detection**: orbit drag na kwiatku triggerował onClick na płatku → user wchodził w płatek chcąc tylko obrócić kwiatek. Fix: porównaj pointerDown vs onClick (dist > 8px = drag, ignoruj)

### Kolejność pracy:
1. Przeczytaj CAŁY ten CLAUDE.md
2. Przeczytaj `src/data/types.ts` i jeden `data_packs/*.ts` żeby zrozumieć dane
3. Przeczytaj istniejący kod ZANIM cokolwiek zmienisz
4. Zrób plan, pokaż userowi, dopiero potem koduj
5. Po każdej zmianie: sprawdź `tsc --noEmit`, wyobraź sobie scenariusz użytkownika (tap, drag, back)

## Wzorce z EDYPLAY (referencja)

https://github.com/BrainEduPlay/ep-BRAIN-QUEST/tree/main/src/plugins/map-3d

- Węzły jako 3D meshe/sprite, NIE karty HTML
- `<Html center>` bez `distanceFactor` — stały rozmiar px
- Popovery: `<Html center>` z `zIndexRange`
- Widoczność sterowana stanem, nie skalowaniem
