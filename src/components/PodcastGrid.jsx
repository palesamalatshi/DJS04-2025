import React, { useContext } from "react";
import PodcastCard from "./PodcastCard";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";
import { PodcastContext } from "../context/PodcastContext";

const PodcastGrid = () => {

  const { podcasts, loading, error } = useContext(PodcastContext);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!podcasts || podcasts.length === 0) return <EmptyState />;

  return (
    <div className="grid-container">
      {podcasts.map((p) => (
        <PodcastCard key={p.id} podcast={p} />
      ))}
    </div>
  );
};

export default PodcastGrid;