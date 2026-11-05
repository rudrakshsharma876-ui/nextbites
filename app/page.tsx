// app/page.tsx
// Home page stays a server component: it reads the data and hands it
// to the client RecipeGrid, which handles the interactive search.
import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Find your next bite.</h1>
        <p>
          {recipes.length} hand-picked recipes, from quick snacks to weekend
          projects.
        </p>
      </section>

      <RecipeGrid recipes={recipes} />
    </main>
  );
}
