import Head from 'next/head'

// Nav Bar Deps
import NavBar from '../components/nav/nav_bar'
import useLockedBody from '../hooks/lock_scroll'

import { useState } from 'react'

type Post = {
  slug: string
  title: string
  date: string
  tags: string[]
  content: string
  standalone?: boolean
}

const mockPosts: Post[] = [
  {
    slug: 'vision',
    title: 'Vision & Value',
    date: '2025-07-08',
    tags: ['philosophy'],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    standalone: false,
  },
  {
    slug: 'manifesto',
    title: 'My Manifesto',
    date: '2025-07-01',
    tags: ['personal', 'intro'],
    content: 'Sed ut perspiciatis unde omnis iste natus error sit...',
    standalone: false,
  },
]

export default function Blog() {
  const [locked, setLocked] = useLockedBody(false, 'root')
  
  const [query, setQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredPosts = mockPosts.filter((post) => {
    const matchQuery = post.title.toLowerCase().includes(query.toLowerCase())
    const matchTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => post.tags.includes(tag))
    return matchQuery && matchTags
  })

  const allTags = Array.from(new Set(mockPosts.flatMap((post) => post.tags)))

  return (
    <div>
      <Head>
        <title>EdEddyEdward | Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Navigation Bar */}
      <NavBar active_page='Blog' setLocked={setLocked}/>

      <div className="z-0 min-h-screen bg-olive pt-24 px-4 pb-16">
        <section className="max-w-4xl mx-auto space-y-8">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded shadow-sm bg-white"
          />

          {/* Tag filter buttons */}
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
                  className={`px-3 py-1 rounded-full text-sm ${
                    selected
                      ? 'bg-black text-white'
                      : 'bg-white border border-gray-300'
                  }`}
                >
                  {tag}
                </button>
              )
            })}
          </div>

          {/* Blog post panels */}
          <div className="flex flex-col gap-10">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white p-6 rounded shadow-md"
              >
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
                <div className="mt-4 text-gray-700 text-sm">
                  {post.content.substring(0, 200)}...
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
