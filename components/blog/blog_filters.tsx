import SortDropdown from '../search/sort_dropdown'
import { SortOrder } from './types/sort_order'

interface BlogFiltersProps {
  query: string
  setQuery: (q: string) => void
  sortOrder: SortOrder
  setSortOrder: (o: SortOrder) => void
  allTags: string[]
  selectedTags: string[]
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
}

export default function BlogFilters({ query, setQuery, sortOrder, setSortOrder, allTags, selectedTags, setSelectedTags } : BlogFiltersProps) {
  return (
    <div className="flex flex-col space-y-4 top-0 bg-olive pt-2 pb-2">
      {/* Search + Sort */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 border-2 border-olive rounded bg-white font-mono text-sm focus:border-azukired-500 focus:ring-azukired-500 focus:outline-none transition"
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
              className={`px-3 py-1 bg-black bg-opacity-5 hover:bg-opacity-10 rounded-full text-xs font-mono font-300 transition ease-in ${
                selected ? 'bg-black text-white bg-opacity-100 hover:bg-opacity-70' : 'bg-black'
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
