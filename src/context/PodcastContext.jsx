import React, { createContext, useState, useMemo } from "react";

/**
 * Podcast context for sharing state across the application.
 */
export const PodcastContext = createContext();

/**
 * Sorting options available in the application.
 */
export const SORT_OPTIONS = [
  { key: "latest", label: "Newest" },
  { key: "oldest", label: "Oldest" },
  { key: "az", label: "Title A → Z" },
  { key: "za", label: "Title Z → A" }
];

/**
 * PodcastProvider manages global state for
 * search, sorting, filtering and pagination.
 *
 * @param {{children: React.ReactNode, podcasts: Array}} props
 */
export function PodcastProvider({ children, podcasts }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortOption, setSortOption] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  /**
   * Extract unique genres from podcasts
   */
  const allGenres = useMemo(() => {
    const genres = podcasts.flatMap((p) => p.genreNames || []);
    return ["All", ...new Set(genres)];
  }, [podcasts]);

  /**
   * Apply search, filter and sorting
   */
  const filteredPodcasts = useMemo(() => {
    let result = [...podcasts];

    if (searchTerm) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedGenre !== "All") {
      result = result.filter((p) =>
        p.genreNames?.includes(selectedGenre)
      );
    }

    if (sortOption === "latest") {
      result.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    }

    if (sortOption === "oldest") {
      result.sort((a, b) => new Date(a.updated) - new Date(b.updated));
    }

    if (sortOption === "az") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortOption === "za") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;

  }, [podcasts, searchTerm, selectedGenre, sortOption]);

  /**
   * Pagination
   */
  const totalPages = Math.ceil(filteredPodcasts.length / itemsPerPage);

  const paginatedPodcasts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPodcasts.slice(start, start + itemsPerPage);
  }, [filteredPodcasts, currentPage]);

  /**
   * Reset page when filters change
   */
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedGenre, sortOption]);

  const value = {
    searchTerm,
    setSearchTerm,
    selectedGenre,
    setSelectedGenre,
    sortOption,
    setSortOption,
    currentPage,
    setCurrentPage,
    totalPages,
    podcasts: paginatedPodcasts,
    allGenres
  };

  return (
    <PodcastContext.Provider value={value}>
      {children}
    </PodcastContext.Provider>
  );
}