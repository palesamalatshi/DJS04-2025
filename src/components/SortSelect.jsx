import React from "react"

export default function SortSelect({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="latest">Latest</option>
      <option value="oldest">Oldest</option>
      <option value="az">A–Z</option>
      <option value="za">Z–A</option>
    </select>
  )
}