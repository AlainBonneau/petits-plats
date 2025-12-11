"use client";

import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FiltersManager from "../FilterManager/FilterManager";
import RecipeComponent from "../RecipeComponent/RecipeComponent";
import "./HomePage.css";

export default function HomePage({ allRecipes }) {
  const [search, setSearch] = useState("");
  const [filterTags, setFilterTags] = useState({
    ingredients: [],
    appliances: [],
    ustensils: [],
  });

  // Filtrage des recettes en fonction de la recherche uniquement
  const filteredSearch = allRecipes.filter((r) => {
    const searchLower = search.toLowerCase();
    const inTitle = r.name.toLowerCase().includes(searchLower);
    const inIngredients = r.ingredients.some((i) =>
      i.ingredient.toLowerCase().includes(searchLower)
    );

    return inTitle || inIngredients;
  });

  // Filtrage des recettes en fonction des tags sélectionnés
  const filteredByTags = filteredSearch.filter((r) => {
    const matchesIngredients = filterTags.ingredients.every((tag) =>
      r.ingredients.some(
        (i) => i.ingredient.toLowerCase() === tag.toLowerCase()
      )
    );

    const matchesAppliances = filterTags.appliances.every(
      (tag) => r.appliance.toLowerCase() === tag.toLowerCase()
    );

    const matchesUstensils = filterTags.ustensils.every((tag) =>
      r.ustensils.some((u) => u.toLowerCase() === tag.toLowerCase())
    );

    return matchesIngredients && matchesAppliances && matchesUstensils;
  });

  return (
    <div>
      <Header search={search} setSearch={setSearch} />

      <main className="main">
        <div className="wrapper">
          <section className="filter-title-container">
            <FiltersManager
              allRecipes={allRecipes}
              filterTags={filterTags}
              setFilterTags={setFilterTags}
            />
            <h5>{filteredByTags.length} recettes</h5>
          </section>

          <section className="recipes-container">
            {filteredByTags.map((recipe, index) => (
              <RecipeComponent key={index} recipe={recipe} />
            ))}
          </section>

          {filteredByTags.length === 0 ? (
            <div className="no-results">
              <p>Aucune recette ne correspond à votre recherche.</p>
              <p>Veuillez modifier votre recherche.</p>
            </div>
          ) : (
            <section className="recipes-container">
              {filteredSearch.map((recipe, index) => (
                <RecipeComponent key={index} recipe={recipe} />
              ))}
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
