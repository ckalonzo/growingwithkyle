//import Image from 'next/image'
const myLoader = ({ src, width, quality }) => {
  return `https://fashionledge.com/dashboard/wp-content/uploads/2021/12/${src}?w=${width}&q=${quality || 75}`
}
export default function Avatar({ author }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        {/* <Image
        loader = {myLoader}
          src={author.avatar.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        /> */}
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
