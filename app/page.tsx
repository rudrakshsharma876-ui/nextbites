// app/page.tsx
// Home page: maps the recipes array into a responsive grid of RecipeCards.
import RecipeCard from "./components/RecipeCard";
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

      <div className="grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
