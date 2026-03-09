Pagination.jsx
import React from "react";
import PodcastCard from "./PodcastCard";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";

/**
 * Grid of podcast previews
 */
const PodcastGrid = ({ podcasts, loading, error, onCardClick }) => {
  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!podcasts || podcasts.length === 0) return <EmptyState />;

  return (
    <div className="grid-container">
      {podcasts.map((p) => (
        <PodcastCard key={p.id} podcast={p} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default PodcastGrid;