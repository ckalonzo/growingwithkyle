import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

const myLoader = ({ src, width, quality }) => {
  console.log(`${src}?w=${width}&q=${quality || 75}`)
  return `${src}?w=${width}&q=${quality || 75}`
}
export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <Image
      loader={myLoader}
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
