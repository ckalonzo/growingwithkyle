import PostPreview from '../components/post-preview'
import styles from "../styles/Hero.module.scss"
export default function MoreStories({ posts }) {
  return (
    <section className={styles.post}>
      <div className="row">

        {posts.map(({ node }) => (
          <div className="col-12 col-lg-3 mt-5">
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node}
            date={node.date}
            author={node.author?.node}
            slug={node.slug}
            excerpt={node.excerpt}
            category={node.categories?.nodes[0].name}
          />
          </div>
        ))}
      
      </div>
      
    </section>
  )
}
