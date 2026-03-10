import React from "react";
import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";
import SortSelect from "./SortSelect";

export default function Header({
  searchTerm,
  setSearchTerm,
  selectedGenre,
  setSelectedGenre,
  sortOption,
  setSortOption,
  genres
}) {
  return (
    <header className="app-header">
      <h1>🎙️ UNMUTED Podcast App</h1>
      <div className="controls">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <GenreFilter
          genres={genres}
          value={selectedGenre}
          onChange={setSelectedGenre}
        />
        <SortSelect value={sortOption} onChange={setSortOption} />
      </div>
    </header>
  );
}