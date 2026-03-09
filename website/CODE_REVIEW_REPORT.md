# Отчёт о ревью кода — РСК ГРУПП сайт

**Дата:** 2026-03-09  
**Охват:** globals.css, layout, Header, Footer, главная, каталог, карточка товара, заказчику, контакты, ContactForm, CallbackModal, API routes, ProductViewer, Product3DViewer

---

## CRITICAL (обязательно исправить)

### 1. API возвращает success при ошибке Telegram
**Файлы:** `src/app/api/contact/route.ts:43-50`, `src/app/api/callback/route.ts:39-46`  
**Проблема:** При ошибке отправки в Telegram API всё равно возвращается `{ ok: true }`. Пользователь видит «Заявка отправлена», а компания может её не получить.  
**Риск:** Потеря заявок, недоверие пользователей.  
**Исправление:**
```ts
if (!tgRes.ok) {
  console.error("Telegram error:", await tgRes.text());
  return NextResponse.json(
    { error: "Сервис временно недоступен. Позвоните нам: +7 960 079-68-53" },
    { status: 503 }
  );
}
```

### 2. Отсутствует rate limiting на API форм
**Файлы:** `src/app/api/contact/route.ts`, `src/app/api/callback/route.ts`  
**Проблема:** Нет ограничения частоты запросов — возможно спам и DoS.  
**Риск:** Перегрузка Telegram, спам в мессенджере.  
**Исправление:** Добавить rate limiting (например, `@upstash/ratelimit` или проверку по IP с in-memory/Redis) — максимум 5 запросов в 5 минут с одного IP.

---

## HIGH (желательно исправить)

### 3. Skip link — неверный z-index
**Файл:** `src/app/layout.tsx:107`  
**Проблема:** Используется `focus:z-100`, в Tailwind по умолчанию нет класса `z-100`. Header имеет `z-50`, skip link при фокусе может оказаться под шапкой.  
**Исправление:** Заменить на `focus:z-[100]` (arbitrary value).

### 4. CallbackModal — нет focus trap
**Файл:** `src/components/CallbackModal.tsx`  
**Проблема:** При открытой модалке фокус при Tab уходит «за» окно, нарушая доступность (WCAG 2.4.3).  
**Исправление:** Ловить фокус внутри модалки (например, `@radix-ui/react-dialog` или свой hook с `focus-trap-react`). При открытии переводить фокус на первый интерактивный элемент.

### 5. Остатки тёмной темы — glass-card
**Файлы:**  
- `src/components/product/ProductViewer.tsx`: 13, 41, 52, 66  
- `src/components/product/Product3DViewer.tsx`: 42, 64  
**Проблема:** Класс `glass-card` отсутствует в `globals.css`. Элементы без фона/бордера выглядят некорректно в светлой теме.  
**Примечание:** ProductViewer и Product3DViewer нигде не используются — это мёртвый код.  
**Исправление:** Либо добавить определение в `globals.css`:
```css
.glass-card {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 16px;
}
```
Либо удалить неиспользуемые компоненты.

### 6. Hero — пустые alt для изображений
**Файл:** `src/app/page.tsx:223`  
**Проблема:** `alt=""` у декоративных картинок в блоке «В фокусе». Картинки несут смысл, нужны описательные alt.  
**Исправление:** `alt={card.label}` или `alt={`${card.title} — ${card.label}`}`.

### 7. Ссылки на несуществующие страницы
**Файл:** `src/components/layout/Footer.tsx:14`  
**Проблема:** Ссылка `/garantii-ot-proizvoditelya` — страница есть (garantii-ot-proizvoditelya/page.tsx). Ссылка `/politika-konfidentsialnosti` — страница есть. Проверено — всё работает.  
**Уточнение:** В `Footer` есть ссылка `RSC GLOBE` на конкретный товар, остальные — на категории. Это может быть задумано.

### 8. ProductDetailClient — ссылка на "#" при отсутствии ref.url
**Файл:** `src/app/proektirovshchikam/katalog/[category]/[slug]/ProductDetailClient.tsx:424`  
**Проблема:** `href={ref.url ?? "#"}` — при отсутствии `url` получается мертвая ссылка.  
**Исправление:** Рендерить `<div>` вместо `<Link>` при отсутствии `ref.url`, либо использовать `href="/portfolio"` как fallback.

### 9. Контакты — социальные кнопки без aria-label
**Файл:** `src/components/layout/Footer.tsx:43-52`  
**Проблема:** Социальные ссылки показывают текст «ВК», «TG», «YT» без дополнительного описания для скринридеров.  
**Исправление:** Добавить `aria-label="ВКонтакте"`, `aria-label="Telegram"`, `aria-label="YouTube"`.

---

## MEDIUM (желательно улучшить)

### 10. Telegram — Markdown injection
**Файлы:** `src/app/api/contact/route.ts:24-28`, `src/app/api/callback/route.ts:20-24`  
**Проблема:** Данные из формы подставляются в Markdown. Ввод вроде `*test*` или `[x](url)` искажает сообщение в Telegram.  
**Исправление:** Экранировать спецсимволы Markdown (`*`, `_`, `` ` ``, `[`, `]`, `(`, `)`, `~`, `` ` ``) перед отправкой.

### 11. SEO — неполные metadata на некоторых страницах
**Файлы:** `src/app/zakazchiku/page.tsx:5`, `src/app/kontakty/page.tsx:4`, `src/app/portfolio/page.tsx:4`  
**Проблема:** Используется `export const metadata = {` без типа `Metadata`, template `%s — РСК ГРУПП` не применяется.  
**Исправление:** Использовать `Metadata` и при необходимости `metadataBase` для корректных канонических URL.

### 12. Несогласованность YouTube URL
**Файлы:** `src/components/layout/Footer.tsx:19` vs `src/app/layout.tsx:85`  
**Проблема:** Footer: `https://youtube.com/@rscgroupp`, layout JSON-LD: `https://www.youtube.com/@rscgroupp`.  
**Исправление:** Привести к одному варианту: `https://www.youtube.com/@rscgroupp`.

### 13. Images с unoptimized
**Файлы:** page.tsx, ProductDetailClient, ProductCard, katalog/page.tsx и др.  
**Проблема:** Для внешних изображений используется `unoptimized`, хотя в `next.config.ts` заданы `remotePatterns` для xn--c1anqabcet.xn--p1ai и Unsplash.  
**Исправление:** Убрать `unoptimized` там, где Next.js может оптимизировать, и проверить загрузку. Для Unsplash оставить без изменений при необходимости.

### 14. ContactForm — нет focus:ring
**Файл:** `src/components/forms/ContactForm.tsx:74`  
**Проблема:** У полей есть `focus:ring-2 focus:ring-amber-500`, но CallbackForm (79) — только `focus:border-amber-500`, без focus ring.  
**Исправление:** Добавить `focus:outline-none focus:ring-2 focus:ring-amber-500/30` в CallbackForm для единообразия.

### 15. Header — handleClickOutside и мобильное меню
**Файл:** `src/components/layout/Header.tsx:48-57`  
**Проблема:** Слушатель вешается на `document`. При клике по ссылке в меню навигация срабатывает, но меню не закрывается до перехода. На практике это может быть приемлемо.  
**Рекомендация:** Оставить как есть; при желании закрывать меню в `onClick` у `Link` (уже есть на строках 151–152).

---

## LOW (опционально)

### 16. Мёртвый код — ProductViewer и Product3DViewer
**Файлы:** `src/components/product/ProductViewer.tsx`, `Product3DViewer.tsx`  
**Проблема:** Компоненты не импортируются, ProductDetailClient использует свою галерею.  
**Рекомендация:** Удалить или подключить к карточке товара, если нужна 3D-модель.

### 17. globals.css — дублирование цветов
**Файл:** `src/app/globals.css`  
**Проблема:** В `.section-label`, `.amber-btn`, `.light-card` и др. используются хардкодные HEX (#b45309, #d97706), а в Tailwind есть `amber-600`, `amber-700`.  
**Рекомендация:** Перейти на CSS‑переменные или Tailwind‑классы для единообразия.

### 18. catalog — лишний импорт type
**Файл:** `src/data/catalog.ts:1`  
**Проблема:** `import type { Product, Category }` — всё корректно, замечаний нет.

### 19. Sitemap — lastModified = now
**Файл:** `src/app/sitemap.ts:31`  
**Проблема:** Все страницы получают `lastModified: now` при каждой генерации.  
**Рекомендация:** Для статических страниц можно задать фиксированную дату или вычислять дату по файлам.

### 20. Год в Footer
**Файл:** `src/components/layout/Footer.tsx:130`  
**Проблема:** Захардкожено «© 2026».  
**Рекомендация:** Использовать `new Date().getFullYear()`.

---

## Итог

| Категория     | Количество |
|---------------|------------|
| CRITICAL      | 2          |
| HIGH          | 7          |
| MEDIUM        | 6          |
| LOW           | 5          |

**Общая оценка:** хорошо  
Критических проблем немного, основное — логика API форм и доступность модального окна.

---

## Отсутствие проблем

- Нет хардкода секретов (Telegram‑токен из env).
- `dangerouslySetInnerHTML` используется только для JSON-LD из своих данных — XSS нет.
- Все основные ссылки ведут на существующие страницы.
- Светлая тема выдержана, `text-white` используется только на тёмных блоках (CTA, Footer).
- Сборка проходит успешно (`npm run build`).
- Структура роутов корректна.
