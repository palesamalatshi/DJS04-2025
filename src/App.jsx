import { useEffect, useState, useMemo } from "react";
import { fetchPodcasts } from "./api/fetchPodcasts";
import PodcastGrid from "./components/PodcastGrid";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortOption, setSortOption] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  useEffect(() => {
    async function loadPodcasts() {
      try {
        const data = await fetchPodcasts();
        setPodcasts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPodcasts();
  }, []);

  const allGenres = useMemo(() => {
    const genres = podcasts.flatMap((p) => p.genreNames || []);
    return ["All", ...new Set(genres)];
  }, [podcasts]);

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

  const totalPages = Math.ceil(filteredPodcasts.length / itemsPerPage);

  const paginatedPodcasts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPodcasts.slice(start, start + itemsPerPage);
  }, [filteredPodcasts, currentPage]);

  if (loading) return <p className="loading-state">Loading podcasts...</p>;
  if (error) return <p className="error-state">Error: {error}</p>;

  return (
    <div className="app">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        sortOption={sortOption}
        setSortOption={setSortOption}
        genres={allGenres}
      />

      <PodcastGrid podcasts={paginatedPodcasts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;