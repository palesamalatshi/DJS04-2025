import { useState, useEffect } from "react";
import { podcasts as mockPodcasts, genres as allGenres, seasons as allSeasons } from "../data/data";

/**
 * Custom hook to fetch podcasts and manage loading/error state
 * @returns {Object} { podcasts, loading, error }
 */
export const usePodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate API call using mock data for now
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Map genres IDs to genre names
        const enriched = mockPodcasts.map((pod) => {
          const podGenres = pod.genres.map((gId) => {
            const genreObj = allGenres.find((g) => g.id === gId);
            return genreObj ? genreObj.title : "Unknown";
          });

          // Attach seasons info
          const seasonObj = allSeasons.find((s) => s.id === pod.id);
          return { ...pod, genres: podGenres, seasonDetails: seasonObj?.seasonDetails || [] };
        });

        setPodcasts(enriched);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch podcasts");
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  return { podcasts, loading, error };
};