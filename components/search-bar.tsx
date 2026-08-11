// components/SearchBar.tsx
"use client";

import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts..."
        className="w-full border rounded-lg px-4 py-2"
      />
      {query && (
        <p className="text-sm text-gray-500 mt-1">Searching for: {query}</p>
      )}
    </div>
  );
}
