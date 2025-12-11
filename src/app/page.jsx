import allRecipes from "./data/recipes.json";
import HomePage from "./components/HomePage/HomePage";

export default function Home() {
  return <HomePage allRecipes={allRecipes} />;
}
