// app/recipe/[id]/page.tsx
// One dynamic route that serves a page for every recipe: /recipe/<id>.
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe } from "../../data/recipes";

type RecipePageProps = {
  // In Next.js 15+, params arrives as a Promise, so we await it.
  params: Promise<{ id: string }>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = getRecipe(id);

  // Unknown id (typo, deleted recipe): show the standard 404 page.
  if (!recipe) notFound();

  return (
    <main className="container detail">
      <Link href="/" className="back-link">
        ← All recipes
      </Link>

      <header className="detail-header">
        <div className="detail-art" aria-hidden="true">
          {recipe.emoji}
        </div>
        <div>
          <h1>{recipe.title}</h1>
          <div className="card-meta detail-meta">
            <span>⏱ {recipe.minutes} min</span>
            <span className={`badge badge-${recipe.difficulty.toLowerCase()}`}>
              {recipe.difficulty}
            </span>
            <span>{recipe.cuisine}</span>
          </div>
        </div>
      </header>

      <div className="detail-body">
        <section>
          <h2>Ingredients</h2>
          <ul className="ingredients">
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Steps</h2>
          <ol className="steps">
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
