/**
 * Fetch podcast shows from the API
 * and convert genre IDs to genre names
 */

const GENRE_MAP = {
  1: "Personal Growth",
  2: "Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids & Family"
};

export async function fetchPodcasts() {
  const response = await fetch("https://podcast-api.netlify.app/shows");

  if (!response.ok) {
    throw new Error("Failed to fetch podcasts");
  }

  const data = await response.json();

  const podcasts = data.map((podcast) => ({
    ...podcast,
    genreNames: podcast.genres.map((id) => GENRE_MAP[id])
  }));

  return podcasts;
}