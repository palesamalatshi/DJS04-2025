import Header from "./components/Header";
import PodcastGrid from "./components/PodcastGrid";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="app">

      <Header />

      <PodcastGrid />

      <Pagination />

    </div>
  );
}

export default App;