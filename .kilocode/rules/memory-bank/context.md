# Active Context: НАЙТ-СИТИ — киберпанк сайт ТГ-канала

## Current State

**Project Status**: ✅ Cyberpunk landing for Telegram channel "НАЙТ-СИТИ" is built and working. Telegram link and author photo updated to real channel.

Одностраничный сайт в киберпанк-стиле для телеграм-канала «НАЙТ-СИТИ»: автор делится путём к корпорации-единорогу и учит делать приложения, автоматизацию, ботов и нейросети. Сайт на русском языке. Ссылка Telegram заменена на `https://t.me/aleksei_hunt`, фото автора добавлено в секцию About.

## Recently Completed

- [x] Киберпанк-тема в `globals.css`: неоновая палитра (void/neon/magenta/acid/violet), глитч-эффект, сканлайны, перспективная сетка, clip-path углы, reveal-анимации
- [x] Самохостинг шрифтов (woff2 в `public/fonts/`): Unbounded (display), JetBrains Mono (mono), Press Start 2P (pixel) — кириллица + латиница, подключены через `@font-face` (next/font/google не работает в песочнице — нет доступа к Google Fonts из Node)
- [x] Hero: матричный дождь на canvas (`CyberRain`), глитч-заголовок, ротация фраз (`Typewriter`), HUD-декор
- [x] Бегущая строка `Ticker`, секция «О канале» с печатающимся `Terminal`
- [x] `Features` — 4 направления контента с SVG-иконками
- [x] `Roadmap` — «Путь к единорогу» как RPG-прокачка: XP-бар, кликабельные уровни LVL 1→99, карточка деталей
- [x] `Stats` — анимированные счётчики при скролле
- [x] Мини-игра `BreachGame` — взлом терминала (breach-протокол: матрица 6×6, маршрут, буфер, таймер; маршрут генерируется гарантированно проходимым)
- [x] Мини-игра `ReactionGame` — тест реакции с рекордом в localStorage
- [x] `CTA` + `Footer`, фиксированный `Header` с якорной навигацией
- [x] typecheck / lint / build — все зелёные

## Key Files

| File/Directory | Purpose |
|----------------|---------|
| `public/images/author.jpg` | Author photo displayed in About section |
| `src/lib/site.ts` | TG_LINK / TG_HANDLE — real channel: `https://t.me/aleksei_hunt` |
| `src/app/globals.css` | Тема, keyframes, утилиты (.glitch, .panel-cyber, .btn-cyber, .grid-floor и др.) |
| `src/components/*.tsx` | Все секции и игры |
| `public/fonts/` | woff2 шрифты (не удалять) |

## Conventions

- Цвета/шрифты только через theme-токены Tailwind (`text-neon`, `font-display`, `font-pixel`...)
- Интерактивные компоненты — `"use client"`; секции-обёртки — server components
- Без эмодзи в UI; декоративные символы: ▸ ✦ ▌ //
- Пакетный менеджер: `bun`; проверки перед коммитом: `bun typecheck && bun lint && bun run build`

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| 2026-07-16 | Построен киберпанк-лендинг «НАЙТ-СИТИ»: hero с матричным дождём, терминал, roadmap-прокачка, 2 мини-игры, самохостинг шрифтов |
| 2026-07-16 | Добавлено фото автора в About; ссылка Telegram обновлена на `https://t.me/aleksei_hunt` |
