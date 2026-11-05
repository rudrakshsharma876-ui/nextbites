// app/components/RecipeCard.tsx
// One reusable, typed card. Feed it a Recipe and it renders that recipe,
// linking through to the recipe's own page at /recipe/<id>.
import Link from "next/link";
import type { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="card">
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
    </Link>
  );
}
