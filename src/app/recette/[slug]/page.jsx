import Link from "next/link";
import Image from "next/image";
import allRecipe from "../../data/recipes.json";
import NotFound from "@/app/components/NotFound/NotFound";
import Footer from "@/app/components/Footer/Footer";
import "./page.css";

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const recipe = allRecipe.find((r) => r.slug === slug);

  if (!recipe) {
    return <NotFound />;
  }

  return (
    <div>
      <div className="header">
        <nav>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Les petits plats"
              width={207}
              height={25}
              className="logo"
            />
          </Link>
        </nav>
      </div>
      <main className="main-recipe">
        <section className="recipe-page-left-container">
          <Image
            className="recipe-image"
            src={`/images/${recipe.image}`}
            alt={`Image de la recette ${recipe.name}`}
            width={606}
            height={600}
          />
        </section>
        <section className="recipe-page-right-container">
          <h1>{recipe.name}</h1>
          <div className="time-container">
            <h6>Temps de préparation</h6>
            <p>{recipe.time}min</p>
          </div>
          <h6>Ingrédients</h6>
          <div className="recipe-page-ingredients-container">
            {recipe.ingredients.map((item, index) => (
              <div key={index} className="ingredient-item">
                <dt>{item.ingredient}</dt>
                <dd>
                  {item.quantity ? item.quantity : ""}
                  {item.unit ? ` ${item.unit}` : ""}
                </dd>
              </div>
            ))}
          </div>
          <h6>Ustensiles nécessaires</h6>
          <div className="recipe-page-utensils-container">
            {recipe.ustensils.map((utensil, index) => (
              <div key={index} className="utensil-item">
                <p>{utensil}</p>
              </div>
            ))}
          </div>
          <h6>Recette</h6>
          <div className="recipe-page-description-container">
            <p>{recipe.description}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
