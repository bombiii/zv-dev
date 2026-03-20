# Portfolio App - Fejlesztői Dokumentáció

## Áttekintés

Ez a dokumentáció a `app/` mappa architektúráját, komponenseit és fejlesztési gyakorlatait ismerteti a Portfolio Next.js alkalmazásához. A portfólió egy modern, témával támogatott webalkalmazás, amely a Next.js 16, React 19 és Tailwind CSS alapokon épül.

---

## Projekt Struktúra

```
app/
├── layout.tsx          # Gyökér layout komponens témakezeléssel és font beállítással
├── page.tsx            # Kezdőoldal technológia stack marquee-val
└── globals.css         # Globális stílusok és animációk
```

### Kapcsolódó Mappák

```
components/
├── theme-provider.tsx  # Next-themes wrapper gyorsbillentyű támogatással
└── ui/
    ├── aurora-background.tsx  # Animált háttér komponens
    └── button.tsx             # Újrafelhasználható gomb komponens

lib/
└── utils.ts            # Segédfunkciók (cn a className összefésüléshez)

hooks/                  # Egyéni React hookok (későbbi felhasználásra fenntartva)
```

---

## Fő Fájlok

### 1. `layout.tsx` - Gyökér Layout

**Célja:** Meghatározza a globális HTML struktúrát és alkalmazza a téma/font konfigurációt az egész alkalmazásra.

**Főbb Funkciók:**
- Geist és Geist Mono fontok importálása a Google Fonts-ból
- Az alkalmazás becsomagolása `ThemeProvider`-rel a sötét/világos téma támogatásához
- A nyelvzet beállítása magyarára (`lang="hu"`)
- Tailwind segédosztályok alkalmazása az antialiasing-hez és font változókhoz

**Fontok:**
- **Sans:** Geist (elsődleges betűtype)
- **Mono:** Geist Mono (kód/technikai szöveg)

**CSS Változók:**
- `--font-sans`: Geist font stack
- `--font-mono`: Geist Mono font stack

```tsx
// Használat a komponensekben
<div className="font-sans">Normál szöveg</div>
<div className="font-mono">Egyenletes szöveg</div>
```

### 2. `page.tsx` - Kezdőoldal

**Célja:** A fő kezdőoldal, amely az Ön technológia stackjét animált marquee-ként jeleníti meg.

**Fő Komponensek:**
- **AuroraBackground:** Animált gradiens háttér
- **Tech Stack Tömbök:** Technológia ikonok két sora
  - **1. sor:** JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS, CSS
  - **2. sor:** Python, Docker, Git, Linux, CI/CD, HTML5, Vite

**Technológia Stack Megjelenítés:**
Mindegyik technológia tartalmazza:
- `Icon`: React Icons komponens (az `react-icons/si`-ből)
- `label`: Technológia neve
- `color`: Tailwind szín osztály (pl. `text-yellow-400`)

**Alkomponensek:**
- `MarqueeContent`: Egyéni technológia elemek renderelése ikonokkal és címkékkel
- `MarqueeRow`: Görgetési sor animációval (fordított irány az alternatív sorokhoz)

**Stílus:**
- `animate-scroll-left` és `animate-scroll-right` osztályokat használ
- Ikonok: 3xl méret specifikus színekkel
- Szöveg: lg font, félkövér, szoros követés

### 3. `globals.css` - Globális Stílusok

**Tartalmaz:**
- Tailwind CSS direktívák (`@tailwind`)
- Egyéni animációk (pl. `animate-scroll-left`, `animate-scroll-right`)
- Globális szín sémák és segédeszközök
- CSS változók a témázáshoz

---

## Fő Komponensek

### ThemeProvider (`components/theme-provider.tsx`)

Az alkalmazás szintű témaváltást kezeli a `next-themes` segítségével.

**Funkciók:**
- Sötét/Világos mód váltás
- Rendszer preferencia észlelése
- Gyorsbillentyű támogatás a téma váltásához (Ctrl+Shift+L vagy Cmd+Shift+L)
- Állandó téma kiválasztás a localStorage-ban

**Használat:**
```tsx
// Komponensekben
"use client"
import { useTheme } from "next-themes"

export function MyComponent() {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
    Téma váltás
  </button>
}
```

### AuroraBackground (`components/ui/aurora-background.tsx`)

Animált gradiens háttér komponens, amely dinamikus vizuális hatást hoz létre.

**Használat:**
```tsx
import { AuroraBackground } from "@/components/ui/aurora-background"

export default function Page() {
  return (
    <AuroraBackground>
      {/* Tartalom */}
    </AuroraBackground>
  )
}
```

### Button (`components/ui/button.tsx`)

Újrafelhasználható gomb komponens, amely a Radix UI és Tailwind CSS alapokon épül.

---

## Stílus Architektúra

### Megközelítés: Tailwind CSS + shadcn/ui

**Tervezési Rendszer:**
- Segédprogramok prioritása a Tailwind CSS v4.2.1-gyel
- Előre épített UI komponensek az shadcn/ui-ből
- Osztály alapú összeállítás rugalmasságért

**Szín Paletta:**
- Palaszürke (semleges): `text-slate-100`, `text-slate-200`
- Technológia specifikus színek: Sárga, Kék, Cián, Zöld, Narancssárga, Lila
- Téma-sugallt (sötét/világos mód)

**Tipográfia:**
- **Fontok:** Geist (sans), Geist Mono (mono)
- **Font Segédeszközök:** `font-sans`, `font-mono`, `font-semibold`, `tracking-wide`

**Térköz és Elrendezés:**
- Rés segédeszközök: `gap-3`, `gap-8`
- Kitöltés: `pr-8`
- Szélesség: `w-max`, `w-52`, `w-full`
- Flexbox: `flex`, `items-center`, `shrink-0`

### Egyéni Animációk

**Görgetési Animációk** (meghatározva a `globals.css`-ben):
- `animate-scroll-left`: Folyamatos bal görgetés marquee-hoz
- `animate-scroll-right`: Folyamatos jobb görgetés marquee sorokhoz

```css
/* Animáció definíció példája */
@keyframes scroll-left {
  to {
    transform: translateX(-100%);
  }
}
```

---

## Fejlesztési Munkafolyamat

### Telepítés és Beállítás

```bash
# Függőségek telepítése
npm install

# Fejlesztési szerver indítása Turbopackkal
npm run dev
# A szerver a http://localhost:3000 címen fut
```

### Elérhető Parancsfájlok

| Parancs | Célja |
|---------|-------|
| `npm run dev` | Fejlesztési szerver indítása (Turbopack engedélyezve) |
| `npm run build` | Szerkesztés termeléshez |
| `npm start` | Termelési szerver indítása |
| `npm run lint` | ESLint futtatása |
| `npm run format` | Kód formázása Prettier-rel |
| `npm run typecheck` | TypeScript típus ellenőrzés |

### Új Oldalak Hozzáadása

1. Új fájl létrehozása az `app/` mappában (pl. `app/about/page.tsx`)
2. Automatikusan útvonalon jelenik meg a `/about`
3. Az elrendezést a `layout.tsx`-ből örökli

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <div>Rólunk szekció</div>
}
```

### Új UI Komponensek Hozzáadása

1. Komponens létrehozása a `components/ui/` mappában
2. Szerkesztés Radix UI + Tailwind CSS-sel
3. Exportálás és importálás az oldalakon

```tsx
// components/ui/my-component.tsx
export function MyComponent() {
  return <div className="...">Egyéni komponens</div>
}

// app/page.tsx
import { MyComponent } from "@/components/ui/my-component"
```

### Technológia Stack Módosítása

**Új technológia hozzáadása a marquee-hoz:**

1. Ikon importálása az `react-icons/si`-ből
2. Hozzáadás az `row1` vagy `row2` tömbhöz az `app/page.tsx`-ben
3. Tartalmazza: `Icon`, `label`, és `color`

```tsx
import { SiMyTech } from "react-icons/si"

const row1 = [
  // ... meglévő
  { Icon: SiMyTech, label: "Saját Tech", color: "text-color-500" },
]
```

---

## Témarendszer

### Konfiguráció

**Téma Beállítások** (a `components/theme-provider.tsx`-ben):
- `attribute="class"`: Osztály alapú témázást használ
- `defaultTheme="system"`: Tiszteletben tartja a rendszer preferenciáját
- `enableSystem`: Automatikusan vált az operációs rendszer témájával

### Témák Váltása

**Billentyűparancs:**
- **macOS:** `Cmd + Shift + L`
- **Windows/Linux:** `Ctrl + Shift + L`

**Programozottan:**
```tsx
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return <button onClick={toggleTheme}>Váltás</button>
}
```

---

## Függőségek Áttekintése

### Fő Függőségek

| Csomag | Verzió | Célja |
|--------|--------|-------|
| next | 16.1.7 | React keretrendszer |
| react | 19.2.4 | UI könyvtár |
| react-dom | 19.2.4 | DOM renderelés |
| react-icons | 5.6.0 | Ikon könyvtár |
| next-themes | 0.4.6 | Témakezelés |

### Stílus Függőségek

| Csomag | Verzió | Célja |
|--------|--------|-------|
| tailwindcss | 4.2.1 | Segédprogram CSS |
| radix-ui | 1.4.3 | Akadálymentes komponensek |
| tailwind-merge | 3.5.0 | Tailwind osztályok összefésülése |
| clsx | 2.1.1 | Feltételes osztályok |

### Fejlesztési Függőségek

| Csomag | Verzió | Célja |
|--------|--------|-------|
| typescript | 5.9.3 | Típusbiztonság |
| eslint | 9.39.4 | Kód ellenőrzés |
| prettier | 3.8.1 | Kód formázás |

---

## Legjobb Gyakorlatok

### 1. Komponens Szervezés

✅ **Érdemes:**
- UI komponenseket a `components/` mappában tartani
- `"use client"` direktívát csak ha szükséges használni
- Nagy komponenseket kisebbekre felosztani

❌ **Nem érdemes:**
- UI komponenseket közvetlenül az `app/` mappában elhelyezni
- Egyszerű komponenseket túlméretezni

### 2. Stílus

✅ **Érdemes:**
- Tailwind segédosztályokat használni
- `cn()` segédeszközt feltételes osztályokhoz
- Téma-tudatos színeket használni (palaszürke, szöveg-opacitás)

❌ **Nem érdemes:**
- Beágyazott stílusokat és Tailwindot keverni
- Egyéni CSS-t létrehozni, amikor a Tailwind ezt lefedi

### 3. Témázás

✅ **Érdemes:**
- `next-themes` használata a témakezeléshez
- Tesztelés sötét és világos módban egyaránt
- Szemantikus szín neveket használni

❌ **Nem érdemes:**
- Szineket nem módosíthatóan beégtetni
- Rendszer preferenciákat figyelmen kívül hagyni

### 4. Teljesítmény

✅ **Érdemes:**
- `suppressHydrationWarning` használata téma-tudatos componenseknél
- Next.js kép optimalizálást kihasználni
- Komponenseket karcsúnak tartani

❌ **Nem érdemes:**
- A Turbopackot letiltani
- Szükségtelen újra-rendereléseket létrehozni

### 5. Típusbiztonság

✅ **Érdemes:**
- TypeScript-et minden fájlra használni
- Komponensek prop típusait meghatározni
- `npm run typecheck` futtatása a commit előtt

❌ **Nem érdemes:**
- `any` típusokat használni
- Típus ellenőrzést kihagyni

---

## Gyakori Feladatok

### Feladat: Új Technológia Hozzáadása a Stack-hez

1. Ikon keresése a [react-icons](https://react-icons.github.io/react-icons/search) webhelyen
2. Import hozzáadása: `import { SiTechName } from "react-icons/si"`
3. Hozzáadás a megfelelő sor tömbhöz
4. Tailwind szín osztály kiválasztása

### Feladat: Téma Színek Megváltoztatása

1. CSS változók szerkesztése a `globals.css`-ben
2. Tailwind téma config frissítése ha szükséges
3. Tesztelés világos és sötét módban egyaránt

### Feladat: Új Oldal Szekció Létrehozása

1. Mappa létrehozása: `app/section-name/`
2. `page.tsx` hozzáadása
3. Komponensek importálása és használata

### Feladat: Betűcsalád Frissítése

1. Font importok módosítása a `layout.tsx`-ben
2. CSS változók frissítése
3. Tailwind config frissítése ha szükséges

---

## Hibaelhárítás

### Téma Nem Vált

**Probléma:** A téma váltás nem működik
**Megoldás:**
- Ellenőrizze, hogy a `suppressHydrationWarning` az `<html>` elemen van
- Ellenőrizze, hogy a `next-themes` telepítve van
- Fejlesztési szerver újraindítása

### Animációk Nem Játszódnak Le

**Probléma:** A marquee animációk nem láthatóak
**Megoldás:**
- Ellenőrizze, hogy a `globals.css` animáció definíciókat tartalmaz
- Ellenőrizze, hogy a Tailwind CSS importálva van
- Ellenőrizze az animációs osztály neveket a sablonban

### Ikonok Nem Jelennek Meg

**Probléma:** A React ikonok üresnek tűnnek
**Megoldás:**
- Ellenőrizze az ikon import útvonalat: `react-icons/si`
- Ellenőrizze, hogy az ikon neve létezik a könyvtárban
- Védje meg, hogy a `react-icons` csomag telepítve van

### TypeScript Hibák

**Probléma:** Típus hibák a komponensekben
**Megoldás:**
```bash
npm run typecheck
npm run format
```

---

## Erőforrások

- **Next.js Dokumentáció:** https://nextjs.org/docs
- **React Dokumentáció:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **shadcn/ui:** https://ui.shadcn.com
- **React Ikonok:** https://react-icons.github.io
- **next-themes:** https://github.com/pacocoursey/next-themes

---

## Hozzájárulási Irányelvek

Új funkciók hozzáadásakor az alkalmazáshoz:

1. Kövesse a TypeScript legjobb gyakorlatokat
2. Kódot formázza Prettier-rel
3. Ellenőrizze az ESLint-tel
4. Tesztelje a téma váltást
5. Ellenőrizze az érzékeny kialakítást
6. Frissítse ezt a dokumentációt

---

**Utolsó Frissítés:** Március 2026  
**Portfólió Verzió:** 0.0.1  
**Next.js Verzió:** 16.1.7
