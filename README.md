# smart-habit-tracker

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Структура проекта
src/
├── core/                  # Базовые примитивы приложения
│   ├── api/               # API-слой
│   │   ├── http/          # HTTP-клиент (axios/fetch)
│   │   ├── resources/     # API-ресурсы (habits, auth, stats)
│   │   └── index.js       # Экспорт API
│   │
│   ├── composables/       # Глобальные composables
│   ├── directives/        # Кастомные директивы
│   └── utils/             # Утилиты и хелперы
│
├── modules/               # Функциональные модули
│   ├── habits/            # Модуль привычек
│   │   ├── components/    # Компоненты модуля
│   │   ├── composables/   # Локальные composables
│   │   ├── store/         # Pinia-сторе модуля
│   │   └── index.js       # Публичный интерфейс модуля
│   │
│   ├── auth/              # Модуль аутентификации
│   ├── statistics/        # Модуль статистики
│   └── ...                # Другие модули
│
├── ui/                    # UI-библиотека проекта
│   ├── components/        # Глобальные UI-компоненты
│   │   ├── buttons/
│   │   ├── inputs/
│   │   ├── cards/
│   │   └── ...          
│   │
│   ├── layouts/           # Шаблоны страниц
│   └── plugins/           # Плагины для UI
│
├── views/                 # Страницы (роуты)
│   ├── DashboardPage.vue
│   ├── HabitsPage.vue
│   └── ...
│
├── assets/                # Статика
│   ├── styles/            # Глобальные стили
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── global.scss    
│   │
│   ├── icons/             # SVG-иконки
│   └── fonts/             # Шрифты
│
├── router/                # Маршрутизация
│   ├── index.js           # Инициализация роутера
│   └── routes.js          # Дефиниция маршрутов
│
├── stores/                # Глобальные Pinia-сторе
│   ├── app.store.js       # Глобальное состояние
│   └── user.store.js      # Данные пользователя
│
├── locales/               # i18n локализация (если нужно)
├── tests/                 # Тесты
│
├── App.vue                # Корневой компонент
└── main.js                # Точка входа
