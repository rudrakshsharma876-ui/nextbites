# NextBites

A little recipe site built with [Next.js](https://nextjs.org) (App Router) and TypeScript.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

- `app/layout.tsx` – the shared shell (nav bar) that wraps every page
- `app/page.tsx` – the home page at `/`
- `app/components/` – reusable components such as `RecipeCard` and `NavBar`
- `app/data/recipes.ts` – the `Recipe` type and the recipe data

## Roadmap

- **Part 1:** repo setup and home page with a responsive recipe grid
- **Part 2:** search, dynamic recipe pages and data fetching
- **Part 3:** deploy it live
