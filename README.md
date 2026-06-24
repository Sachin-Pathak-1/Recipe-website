# ProChef Recipe Website

ProChef is a modern recipe discovery web application built with React and Vite. It helps users explore curated meals, browse recipes by cuisine or category, search for dishes, and view detailed cooking instructions with ingredients in a clean, responsive interface.

**Live Demo:** [https://prochef-recipe.vercel.app/](https://prochef-recipe.vercel.app/)

## Overview

The application uses [TheMealDB](https://www.themealdb.com/) API to fetch recipe data dynamically. Users can start from the dashboard, explore featured recipes, filter meals by country or category, search by recipe name, and open a full recipe detail page with ingredients, measurements, cuisine information, category tags, and preparation steps.

## Features

- Recipe discovery dashboard with curated recipe sections
- Auto-playing recipe sliders for featured and quick meal collections
- Search recipes by dish name
- Browse recipes by global cuisine
- Browse recipes by category such as Vegetarian, Dessert, Chicken, Seafood, Breakfast, Pasta, Goat, Pork, and Lamb
- Extended country selector for cuisine-based filtering
- Detailed recipe pages with:
  - Recipe image
  - Ingredients and measurements
  - Category and region labels
  - Step-by-step preparation instructions
- Responsive layout for desktop, tablet, and mobile screens
- Loading and error states for API-driven views
- Dark themed UI with Tailwind CSS styling

## Tech Stack

- **React** - Component-based frontend UI
- **Vite** - Fast development server and production build tooling
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon set
- **React Slick / Slick Carousel** - Recipe carousel sliders
- **TheMealDB API** - Recipe data source
- **Vercel** - Live deployment platform

## Routes

| Route | Description |
| --- | --- |
| `/` | Home dashboard with curated recipes, quick meals, cuisine links, and category filters |
| `/recipe/:id` | Detailed recipe page for a selected meal |
| `/search/:input` | Search results for a user-entered dish name |
| `/select/:filterType/:valueType` | Filtered recipe list by cuisine or category |
| `/select/country` | Full country selector for cuisine filtering |

## Project Structure

```text
src/
  App.jsx
  main.jsx
  index.css
  pages/
    Layout.jsx
  components/
    CategorySelection.jsx
    CountrySelector.jsx
    Cuisine.jsx
    HomeView.jsx
    Navbar.jsx
    RecipeCard.jsx
    RecipeCardMini.jsx
    RecipeDetailView.jsx
    RecipeSlider.jsx
    SearchView.jsx
    SelectionView.jsx
    TrendingRecipe.jsx
    useFetch.js
```

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed on your machine.

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The app will start on a local Vite development URL, usually:

```text
http://localhost:5173/
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Run Linting

```bash
npm run lint
```

## API Reference

This project fetches recipe data from TheMealDB public API.

Base URL:

```text
https://www.themealdb.com/api/json/v1/1/
```

Common endpoints used in the project include:

- `search.php?s={query}` - Search meals by name
- `lookup.php?i={id}` - Get full recipe details by meal ID
- `filter.php?a={area}` - Filter recipes by cuisine or country
- `filter.php?c={category}` - Filter recipes by category
- `list.php?a=list` - List available cuisine areas

## Deployment

The project is deployed on Vercel:

[https://prochef-recipe.vercel.app/](https://prochef-recipe.vercel.app/)

For a Vercel deployment, the expected configuration is:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework preset:** Vite

## Author

Built as a React recipe discovery project with a focus on responsive UI, dynamic API data, and smooth browsing flows.
