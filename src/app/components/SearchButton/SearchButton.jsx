"use client";

import "./SearchButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchButton({ value, onChange }) {
  return (
    <div className="input-wrapper">
      <input
        type="search"
        placeholder="Rechercher une recette, un ingrédient, ..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
    </div>
  );
}
