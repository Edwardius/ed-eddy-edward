import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

type SortOrder = 'newest' | 'oldest' | 'random'

export default function SortDropdown({
  sortOrder,
  setSortOrder
}: {
  sortOrder: SortOrder
  setSortOrder: (order: SortOrder) => void
}) {
  const [isHovering, setIsHovering] = useState(false)

  const handleChange = (order: SortOrder) => {
    setSortOrder(order)
    setIsHovering(false)
  }

  return (
    <div
      className="relative font-mono text-sm z-20"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={`cursor-pointer px-3 py-2 border border-gray-300 text-white rounded shadow-sm
          ${isHovering ? 'bg-azukired-800' : 'bg-azukired-500 hover:bg-azukired-800'}
        `}
      >
        Sort: {sortOrder === 'newest'
          ? 'Newest First'
          : sortOrder === 'oldest'
          ? 'Oldest First'
          : 'Random Order'}
      </div>

      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-1 left-0 bg-white border border-gray-300 rounded shadow-md overflow-hidden z-20"
          >
            <div
              onClick={() => handleChange('newest')}
              className={`px-4 py-1.5 hover:bg-gray-100 cursor-pointer ${
                sortOrder === 'newest' ? 'font-semibold' : ''
              }`}
            >
              Newest First
            </div>
            <div
              onClick={() => handleChange('oldest')}
              className={`px-4 py-1.5 hover:bg-gray-100 cursor-pointer ${
                sortOrder === 'oldest' ? 'font-semibold' : ''
              }`}
            >
              Oldest First
            </div>
            <div
              onClick={() => handleChange('random')}
              className={`px-4 py-1.5 hover:bg-gray-100 cursor-pointer ${
                sortOrder === 'random' ? 'font-semibold' : ''
              }`}
            >
              Random Order
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
