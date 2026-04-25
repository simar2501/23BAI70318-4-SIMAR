# Simar.dev — Portfolio Website

> Experiment 3 + Experiment 4 | Chandigarh University | B.E. CSE (AI/ML) 2023–2027

## Live Demo
`23bai70318-4-simar-saini.vercel.app`

---

## Experiment 4 Changes

### New Features Added

#### 1. `useContext` — Global Theme State
- Created `AppContext.jsx` with a global `AppProvider`
- Stores `theme` (light/dark) and `toggleTheme` function
- Used in **Navbar** (theme toggle button) and **About** + **Skills** pages

#### 2. `useReducer` — Structured State Management
- `appReducer.js` handles **favorites** state on the Home page
- Actions: `ADD_FAVORITE`, `REMOVE_FAVORITE`, `CLEAR_FAVORITES` (3 actions ✅)
- Skills page has its own local reducer with `SET_FILTER`, `TOGGLE_PINNED`, `CLEAR_PINNED`

#### 3. `useMemo` — Performance Optimization
- Skills page uses `useMemo` to compute:
  - `filteredSkills` — filtered by category + search query
  - `stats` — total, advanced count, intermediate count, average proficiency
- Prevents recalculation on every render

#### 4. New Page — `Skills & Experience`
- Route: `/skills` (added to Navbar)
- Demonstrates all three hooks together: context (theme), reducer (filter/pin), memo (filtered list)
- Includes skill cards with progress bars, category filter, search, and pin feature
- Experience section with internship timeline

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero + Projects with bookmark (useReducer) |
| About | `/about` | Bio + highlights (useContext) |
| Projects | `/projects` | Full project list with tags |
| **Skills** | `/skills` | **NEW — Exp 4 page** |
| Contact | `/contact` | Contact form |

---

## Tech Stack
- React 18 + Vite
- React Router v6
- useContext, useReducer, useMemo
- Pure CSS (no UI library)

---

## Screenshots
See `/screenshots` folder.

---

## Folder Structure
```
src/
├── components/
│   └── Navbar.jsx
├── context/
│   └── AppContext.jsx
├── reducer/
│   └── appReducer.js
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx       ← New (Exp 4)
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Setup
```bash
pnpm install
pnpm dev
```
