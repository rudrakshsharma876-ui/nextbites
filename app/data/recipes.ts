// app/data/recipes.ts
// Single source of truth for recipe data: the Recipe type, the list,
// and a small helper to look up one recipe by its id.

export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil",
    ],
    steps: [
      "Preheat the oven as hot as it goes, ideally with a pizza stone inside.",
      "Stretch the dough into a thin round base.",
      "Spread the tomato sauce and tear the mozzarella over the top.",
      "Bake until the crust blisters and the cheese bubbles.",
      "Finish with basil leaves and a drizzle of olive oil.",
    ],
  },
  {
    id: "paneer-butter-masala",
    title: "Paneer Butter Masala",
    emoji: "🍛",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
    ingredients: [
      "Paneer cubes",
      "Butter",
      "Onion",
      "Tomatoes",
      "Ginger-garlic paste",
      "Cashews",
      "Garam masala",
      "Fresh cream",
    ],
    steps: [
      "Sauté onion, tomatoes and cashews in butter until soft.",
      "Blend into a smooth gravy and return it to the pan.",
      "Stir in ginger-garlic paste and garam masala; simmer for 5 minutes.",
      "Add the paneer cubes and cook for another 5 minutes.",
      "Swirl in the cream and serve hot with naan or rice.",
    ],
  },
  {
    id: "chicken-tacos",
    title: "Chicken Tacos",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    ingredients: [
      "Chicken thighs",
      "Taco seasoning",
      "Small tortillas",
      "Red onion",
      "Fresh coriander",
      "Lime",
    ],
    steps: [
      "Toss the chicken in taco seasoning.",
      "Pan-fry until cooked through, then slice thinly.",
      "Warm the tortillas in a dry pan.",
      "Fill with chicken, onion and coriander.",
      "Squeeze lime over the top and serve.",
    ],
  },
  {
    id: "veg-ramen",
    title: "Veggie Ramen",
    emoji: "🍜",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Japanese",
    ingredients: [
      "Ramen noodles",
      "Vegetable stock",
      "Miso paste",
      "Soy sauce",
      "Mushrooms",
      "Bok choy",
      "Spring onions",
    ],
    steps: [
      "Bring the stock to a simmer and whisk in the miso and soy sauce.",
      "Add the mushrooms and cook for 5 minutes.",
      "Cook the noodles separately and drain.",
      "Wilt the bok choy in the broth.",
      "Pour the broth over the noodles and top with spring onions.",
    ],
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: [
      "Sourdough bread",
      "Ripe avocado",
      "Lemon juice",
      "Chilli flakes",
      "Salt and pepper",
    ],
    steps: [
      "Toast the bread until golden.",
      "Mash the avocado with lemon juice, salt and pepper.",
      "Spread it thickly over the toast.",
      "Sprinkle with chilli flakes and serve.",
    ],
  },
  {
    id: "beef-burger",
    title: "Classic Beef Burger",
    emoji: "🍔",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "American",
    ingredients: [
      "Ground beef",
      "Burger buns",
      "Cheddar slices",
      "Lettuce",
      "Tomato",
      "Pickles",
      "Ketchup and mustard",
    ],
    steps: [
      "Shape the beef into patties and season both sides.",
      "Sear on a hot pan for 3–4 minutes per side.",
      "Add the cheese in the last minute so it melts.",
      "Toast the buns lightly.",
      "Stack with lettuce, tomato, pickles and sauces.",
    ],
  },
  {
    id: "sushi-rolls",
    title: "Salmon Sushi Rolls",
    emoji: "🍣",
    minutes: 60,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: [
      "Sushi rice",
      "Rice vinegar",
      "Nori sheets",
      "Sushi-grade salmon",
      "Cucumber",
      "Soy sauce",
      "Wasabi",
    ],
    steps: [
      "Cook the sushi rice and season it with rice vinegar; let it cool.",
      "Lay a nori sheet on a bamboo mat and spread a thin layer of rice.",
      "Line salmon and cucumber strips along one edge.",
      "Roll tightly using the mat, then slice into pieces with a wet knife.",
      "Serve with soy sauce and wasabi.",
    ],
  },
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    emoji: "🍰",
    minutes: 75,
    difficulty: "Hard",
    cuisine: "French",
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Sugar",
      "Eggs",
      "Butter",
      "Milk",
      "Baking powder",
      "Dark chocolate",
    ],
    steps: [
      "Preheat the oven to 180°C and line a cake tin.",
      "Whisk the butter and sugar, then beat in the eggs.",
      "Fold in the flour, cocoa, baking powder and milk.",
      "Bake for 35–40 minutes and let it cool.",
      "Pour melted dark chocolate over the top to finish.",
    ],
  },
];

// Find the recipe whose id matches. Returns undefined for an unknown id,
// so callers must handle the "not found" case.
export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
