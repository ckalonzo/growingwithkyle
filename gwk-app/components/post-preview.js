import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import styles from "../styles/Hero.module.scss"

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category
}) {
  return (
    <div className={styles.card}>
      <div className="">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="card-body">
        <h3 className="card-title">
        <Link href={`/posts/${slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
        <div className="text-lg mb-4">
          <Date dateString={date} />
        </div>
        <div className="text-lg mb-4">
         category: {category}
        </div>
          {/* <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      /> 
      <Avatar author={author} />*/}
      </div>
    </div>
  )
}
