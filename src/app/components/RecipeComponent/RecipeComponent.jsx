import Image from "next/image";
import Link from "next/link";
import "./RecipeComponent.css";

export default function RecipeComponent({ recipe }) {
  return (
    <Link className="recipe-link" href={`/recette/${recipe.slug}`}>
    <article className="recipe-container">
      <div className="recipe-img-container">
        <p>{recipe.time}min</p>
        <Image
          className="recipe-img"
          src={`/images/${recipe.image}`}
          alt={`image de ${recipe.name}`}
          width={380}
          height={253}
        />
      </div>
      <div className="recipe-white-bg">
        <div className="recipe-wrapper">
          <div className="recipe-infos-container">
            <h2>{recipe.name}</h2>
            <div className="recipe-description-container">
              <h6>Recette</h6>
              <p>
                {recipe.description.length > 200
                  ? `${recipe.description.substring(0, 200)}...`
                  : recipe.description}
              </p>
            </div>
          </div>
          <div className="recipe-ingredients-container">
            <h6>Ingrédients</h6>
            <div className="recipe-quantity">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index}>
                  <dt>{ingredient.ingredient}</dt>
                  <dd>
                    {ingredient.quantity}
                    {ingredient.unit}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
}
