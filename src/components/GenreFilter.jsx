function GenreFilter({ genres = [], value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}

export default GenreFilter;