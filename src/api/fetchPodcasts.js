/**
 * Fetch podcast shows from the API
 * @returns {Promise<Array>} Array of podcast objects
 */
export async function fetchPodcasts() {
  const response = await fetch("https://podcast-api.netlify.app/shows")

  if (!response.ok) {
    throw new Error("Failed to fetch podcasts")
  }

  const data = await response.json()
  return data
}