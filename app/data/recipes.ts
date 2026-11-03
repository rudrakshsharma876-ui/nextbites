// app/data/recipes.ts
// Single source of truth for recipe data: the Recipe type and the list.

export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "paneer-butter-masala",
    title: "Paneer Butter Masala",
    emoji: "🍛",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
  },
  {
    id: "chicken-tacos",
    title: "Chicken Tacos",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
  },
  {
    id: "veg-ramen",
    title: "Veggie Ramen",
    emoji: "🍜",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Japanese",
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "beef-burger",
    title: "Classic Beef Burger",
    emoji: "🍔",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "American",
  },
  {
    id: "sushi-rolls",
    title: "Salmon Sushi Rolls",
    emoji: "🍣",
    minutes: 60,
    difficulty: "Hard",
    cuisine: "Japanese",
  },
  {
    id: "chocolate-cake",
    title: "Chocolate Cake",
    emoji: "🍰",
    minutes: 75,
    difficulty: "Hard",
    cuisine: "French",
  },
];
