import SortDropdown from '../search/sort_dropdown'

export default function BlogFilters({ query, setQuery, sortOrder, setSortOrder, allTags, selectedTags, setSelectedTags }) {
  return (
    <div className="flex flex-col space-y-4 top-0 bg-olive pt-2 pb-2">
      {/* Search + Sort */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded shadow-sm bg-white font-mono text-sm"
        />
        <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const selected = selectedTags.includes(tag)
          return (
            <button
              key={tag}
              onClick={() =>
                setSelectedTags((prev) =>
                  selected ? prev.filter((t) => t !== tag) : [...prev, tag]
                )
              }
              className={`px-3 py-1 rounded-full text-sm font-mono font-500 text-gray-500 ${
                selected ? 'bg-black text-white' : 'bg-white border border-gray-300'
              }`}
            >
              {tag}
            </button>
          )
        })}
      </div>
    </div>
  )
}
