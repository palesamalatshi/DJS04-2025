import React, { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";

export default function Pagination() {

  const { page, setPage, totalPages } = useContext(PodcastContext);

  return (
    <div className="pagination">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>

      <span>{page} / {totalPages}</span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
}s