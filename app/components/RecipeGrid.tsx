// app/components/RecipeGrid.tsx
// Client component: it holds the search text in state, so it must run in the browser.
"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

type RecipeGridProps = {
  recipes: Recipe[];
};

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  const [query, setQuery] = useState("");

  // Case-insensitive match on title or cuisine.
  const search = query.trim().toLowerCase();
  const visible = recipes.filter((recipe) =>
    (recipe.title + " " + recipe.cuisine).toLowerCase().includes(search)
  );

  return (
    <>
      <input
        type="search"
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes or cuisines…"
        aria-label="Search recipes"
      />

      {visible.length === 0 ? (
        <p className="empty">
          No recipes match “{query}”. Try another search.
        </p>
      ) : (
        <div className="grid">
          {visible.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </>
  );
}
