"use client";

import FilterComponent from "../FilterComponent/FilterComponent";
import "./FilterManager.css";

export default function FiltersManager({
  allRecipes,
  filterTags,
  setFilterTags,
}) {
  const updateFilter = (key, values) => {
    setFilterTags((prev) => ({ ...prev, [key]: values }));
  };

  return (
    <section className="all-filters-container">
      {/* Filtre pour les ingrédients */}
      <FilterComponent
        label="Ingrédients"
        items={allRecipes
          .flatMap((r) => r.ingredients.map((i) => i.ingredient))
          .filter((v, i, a) => a.indexOf(v) === i)}
        selected={filterTags.ingredients}
        onChange={(v) => updateFilter("ingredients", v)}
      />

      {/* Filtre pour les appareils */}
      <FilterComponent
        label="Appareils"
        items={allRecipes
          .map((r) => r.appliance)
          .filter((v, i, a) => a.indexOf(v) === i)}
        selected={filterTags.appliances}
        onChange={(v) => updateFilter("appliances", v)}
      />

      {/* Filtre pour les ustensiles */}
      <FilterComponent
        label="Ustensiles"
        items={allRecipes
          .flatMap((r) => r.ustensils)
          .filter((v, i, a) => a.indexOf(v) === i)}
        selected={filterTags.ustensils}
        onChange={(v) => updateFilter("ustensils", v)}
      />
    </section>
  );
}
