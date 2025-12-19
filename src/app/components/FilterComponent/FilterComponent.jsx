"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./FilterComponent.css";

export default function FilterComponent({ label, items, selected, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const boxRef = useRef(null);

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const toggleItem = (item) => {
    onChange(
      selected.includes(item)
        ? selected.filter((i) => i !== item)
        : [...selected, item]
    );
  };

  const removeItem = (item) => {
    onChange(selected.filter((i) => i !== item));
  };

  const clearAll = () => {
    setSearch("");
    onChange([]);
  };

  useEffect(() => {
    if (!open) return;
    const onDocPointerDown = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocPointerDown);
    document.addEventListener("touchstart", onDocPointerDown, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDocPointerDown);
      document.removeEventListener("touchstart", onDocPointerDown);
    };
  }, [open]);

  return (
    <div className="filters-container">
      <div ref={boxRef} className={`filter-box ${open ? "open" : ""}`}>
        <button className="filter-toggle" onClick={() => setOpen(!open)}>
          {label}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={open ? "rotate" : ""}
          />
        </button>

        {open && (
          <div className="filter-content">
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Rechercher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <FontAwesomeIcon icon={faSearch} className="filter-search-icon" />

              {(search || selected.length > 0) && (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="clear-icon"
                  onClick={clearAll}
                />
              )}
            </div>

            <ul className="option-list">
              {filtered.map((item) => (
                <li
                  key={item}
                  onClick={() => toggleItem(item)}
                  className={selected.includes(item) ? "selected" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {selected.length > 0 && (
        <div className="selected-container">
          {selected.map((item) => (
            <div className="selected-tag" key={item}>
              {item}
              <FontAwesomeIcon
                icon={faXmark}
                className="remove-tag"
                onClick={() => removeItem(item)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
