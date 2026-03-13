import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";
import SortSelect from "./SortSelect";
import { PodcastContext } from "../context/PodcastContext";

export default function Header() {

  const {
    searchTerm,
    setSearchTerm,
    selectedGenre,
    setSelectedGenre,
    sortOption,
    setSortOption,
    allGenres
  } = useContext(PodcastContext);

  return (
    <header className="app-header">
      <h1>🎙️ UNMUTED Podcast App</h1>

      <div className="controls">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <GenreFilter
          genres={allGenres}
          value={selectedGenre}
          onChange={setSelectedGenre}
        />

        <SortSelect
          value={sortOption}
          onChange={setSortOption}
        />
      </div>
    </header>
  );
}