import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PodcastProvider } from "./context/PodcastContext";
import "./styles.css";

import { fetchPodcasts } from "./api/fetchPodcasts";

async function startApp() {
  const podcasts = await fetchPodcasts();

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <PodcastProvider podcasts={podcasts}>
        <App />
      </PodcastProvider>
    </React.StrictMode>
  );
}

startApp();