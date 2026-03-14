import React from "react";

export default function GenreFilter({ genres, value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {genres.map((genre, index) => (
        <option key={index} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}