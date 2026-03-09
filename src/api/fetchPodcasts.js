/**
 * Fetch podcasts from API
 * @returns {Promise<Array>}
 */
export async function fetchPodcasts() {
  const response = await fetch("https://podcast-api.netlify.app/shows")

  if (!response.ok) {
    throw new Error("Failed to fetch podcasts")
  }

  return await response.json()
}