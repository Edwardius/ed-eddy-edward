import Head from 'next/head'

// Nav Bar Deps
import NavBar from '../components/nav/nav_bar'
import useLockedBody from '../hooks/lock_scroll'
import useWindowDimensions from '../hooks/window_size'
import getBreakpoint from '../components/utils/get_breakpoint'

import BlogSidebar from '../components/blog/blog_sidebar'
import BlogFilters from '../components/blog/blog_filters'
import BlogPostList from '../components/blog/blog_post_list'
import { Post } from '../components/blog/types/post'

import { useEffect, useState } from 'react'
import SortDropdown from '../components/search/sort_dropdown'
import ButtondownSubscribeForm from '../components/blog/buttondown_subscribe_form'
import { getAllPosts } from '../components/utils/posts'

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

export default function Blog({ posts }: { posts: Post[] }) {
  const [locked, setLocked] = useLockedBody(false, 'root')
  
  const [query, setQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const [showTags, setShowTags] = useState(false)
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'random'>('newest')

  const sortedPosts = [...posts]
  if (sortOrder === 'newest') {
    sortedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } else if (sortOrder === 'oldest') {
    sortedPosts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  } else if (sortOrder === 'random') {
    sortedPosts.sort(() => Math.random() - 0.5)
  }

  const filteredPosts = sortedPosts.filter((post) => {
    const matchQuery = post.title.toLowerCase().includes(query.toLowerCase())
    const matchTags =
      selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag))
    return matchQuery && matchTags
  })

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))

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
