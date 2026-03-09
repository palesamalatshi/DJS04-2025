import { useEffect, useState } from "react"
import { fetchPodcasts } from "./api/fetchPodcasts"

function App() {
  const [podcasts, setPodcasts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadPodcasts() {
      try {
        const data = await fetchPodcasts()
        setPodcasts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadPodcasts()
  }, [])

  if (loading) return <p>Loading podcasts...</p>

  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>🎙️ UNMUTED Podcast App</h1>

      <p>Total podcasts loaded: {podcasts.length}</p>
    </div>
  )
}

export default App