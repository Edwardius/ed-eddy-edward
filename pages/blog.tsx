import Head from 'next/head'

// Nav Bar Deps
import NavBar from '../components/nav/nav_bar'
import useLockedBody from '../hooks/lock_scroll'
import useWindowDimensions from '../hooks/window_size'
import getBreakpoint from '../components/utils/get_breakpoint'

import { useState } from 'react'
import SortDropdown from '../components/search/sort_dropdown'
import ButtondownSubscribeForm from '../components/blog/buttondown_subscribe_form'

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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
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
  {
    slug: 'manifesto-1',
    title: 'My Manifesto',
    date: '2025-07-01',
    tags: ['personal', 'intro'],
    content: 'Sed ut perspiciatis unde omnis iste natus error sit...',
    standalone: false,
  },
  {
    slug: 'manifesto-2',
    title: 'My Manifesto',
    date: '2025-07-01',
    tags: ['personal', 'intro'],
    content: 'Sed ut perspiciatis unde omnis iste natus error sit...',
    standalone: false,
  },
  {
    slug: 'manifesto-3',
    title: 'My Manifesto',
    date: '2025-07-01',
    tags: ['personal', 'intro'],
    content: 'Sed ut perspiciatis unde omnis iste natus error sit...',
    standalone: false,
  },
  {
    slug: 'manifesto-4',
    title: 'My Manifesto',
    date: '2025-07-01',
    tags: ['personal', 'intro'],
    content: 'Sed ut perspiciatis unde omnis iste natus error sit...',
    standalone: false,
  },
  {
    slug: 'manifesto-5',
    title: 'My Manifesto',
    date: '2025-07-01',
    tags: ['personal', 'intro'],
    content: 'Sed ut perspiciatis unde omnis iste natus error sit...',
    standalone: false,
  },
  {
    slug: 'manifesto-6',
    title: 'My Manifesto',
    date: '2025-07-01',
    tags: ['personal', 'intro'],
    content: 'Sed ut perspiciatis unde omnis iste natus error sit...',
    standalone: false,
  },
  {
    slug: 'manifesto-7',
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

  const [showTags, setShowTags] = useState(false)
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')

  const sortedPosts = [...mockPosts].sort((a, b) =>
    sortOrder === 'newest'
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  const filteredPosts = sortedPosts.filter((post) => {
    const matchQuery = post.title.toLowerCase().includes(query.toLowerCase())
    const matchTags =
      selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag))
    return matchQuery && matchTags
  })

  const allTags = Array.from(new Set(mockPosts.flatMap((post) => post.tags)))

  const size = useWindowDimensions();
  const breakpoint = getBreakpoint('md'); // or 'lg' if you want to hide it sooner

  const isDesktop = size.width && size.width >= breakpoint;

  return (
    <div>
      <Head>
        <title>EdEddyEdward | Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Navigation Bar */}
      <NavBar active_page='Blog' setLocked={setLocked}/>

      <div className="h-screen bg-olive pt-24 pb-24 px-4 overflow-hidden">
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 h-full">
          {/* Left Sidebar */}
          {isDesktop && (
            <div className="w-1/3">
              <div className="flex items-center justify-center h-full">
                <div className="space-y-6 max-h-[80vh] overflow-hidden">
                  <img
                    src="/headshot.jpg"
                    alt="Profile photo"
                    className="rounded-full w-40 h-40 object-cover mx-auto"
                  />
                  <div className="text-sm font-mono text-gray-700">
                    <p className="font-bold uppercase text-xs tracking-widest">About This Blog</p>
                    <p className="mt-2">
                      A collection of things I wanted to write about.
                    </p>
                    <p className="mt-2">
                      I am well aware that I will most definitely sound like a cringe startup founder...
                    </p>
                    <p className="mt-2">
                      Do not take anything I write about seriously... I beg you.
                    </p>
                  </div>
                  <ButtondownSubscribeForm />
                </div>
              </div>
            </div>
          )}

          {/* Right Blog Content */}
          <div className="w-full md:w-2/3 h-full flex flex-col pr-2 space-y-4">
            {/* Search, Sort, and Tags */}
            <div className="flex flex-col space-y-4 top-0 bg-olive pt-2 pb-2">

              {/* Search + Sort Row */}
              <div className="flex items-center gap-4">
                {/* Search Bar */}
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-grow p-2 border border-gray-300 rounded shadow-sm bg-white font-mono text-sm"
                />

                {/* Sort Dropdown */}
                <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
              </div>

              {/* Tag Filter Buttons */}
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
            </div>


            {/* Scrollable Blog Posts */}
            <div className="pr-6 flex-1 overflow-y-auto space-y-8 scrollbar-azuki">
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
          </div>
        </section>

      </div>
    </div>
  )
}
