import Head from 'next/head'

// Nav Bar Deps
import NavBar from '../components/nav/nav_bar'
import useLockedBody from '../hooks/lock_scroll'
import useWindowDimensions from '../hooks/window_size'
import getBreakpoint from '../components/utils/get_breakpoint'

import BlogSidebar from '../components/blog/blog_sidebar'
import BlogFilters from '../components/blog/blog_filters'
import BlogPostList from '../components/blog/blog_post_list'

import { useEffect, useState } from 'react'
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

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

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
        {hasMounted && isDesktop && <BlogSidebar />}

        <div className="w-full md:w-3/4 h-full flex flex-col pr-2 space-y-4">
          <BlogFilters
            query={query}
            setQuery={setQuery}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            allTags={allTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
          <BlogPostList posts={filteredPosts} />
        </div>
      </section>

      </div>
    </div>
  )
}
