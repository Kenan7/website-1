import { useState } from 'react'

import { TextEntry } from '@components/entry'
import styles from './posts-list.module.css'

type PostsProps = {
  slug?: string
  posts: PostsProps[]
  paginate?: boolean
}

const Posts = ({ posts, paginate }: PostsProps) => {
  const [showMore, setShowMore] = useState(3)

  return (
    <div className={styles.container}>
      {posts.slice(0, paginate ? showMore : undefined).map((post: any) => {
        const date = new Date(post.date).toLocaleDateString('default', {
          month: 'numeric',
          day: 'numeric'
        })

        return (
          <TextEntry
            key={`post-item-${post.slug}`}
            href="/blog/[slug]"
            as={`/blog/${post.slug}`}
            title={post.title}
            type={date}
            description={post.description}
          />
        )
      })}
      {paginate && showMore < posts.length && (
        <button
          onClick={() => {
            setShowMore(showMore + 3)
          }}
          className={styles.button}
        >
          Show More
        </button>
      )}
    </div>
  )
}

export default Posts
