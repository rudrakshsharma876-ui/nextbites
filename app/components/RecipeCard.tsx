// app/components/RecipeCard.tsx
// One reusable, typed card. Feed it any Recipe and it renders that recipe.
import type { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="card">
      <div className="card-art" aria-hidden="true">
        {recipe.emoji}
      </div>
      <div className="card-body">
        <h3>{recipe.title}</h3>
        <div className="card-meta">
          <span>⏱ {recipe.minutes} min</span>
          <span className={`badge badge-${recipe.difficulty.toLowerCase()}`}>
            {recipe.difficulty}
          </span>
          <span>{recipe.cuisine}</span>
        </div>
      </div>
    </article>
  );
}
