import ImageCarousel from "./imageCarousel"
import styles from "./../styles/card.module.scss"
import Image from "next/image"
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
export default function ProductCard(props) {
  const product = props.node
  console.log(product)
  let imageUrl = product.galleryImages.edges[0].node.sourceUrl
  function createMarkup(content) {
    return {__html: content};
  }
<div className="card-text text-muted" dangerouslySetInnerHTML={createMarkup(product.description)} />
  return (
    <>
    <div className={styles.productCard} >
      
        <Image
      loader={myLoader}
          src={`${imageUrl}`}
           width={408}
        height={350}
          className={styles.logo}
           alt="product image"
        /> 
      <div className={styles.productContent}>
        <h5>{product.name}</h5>
        <h2 className="text-center">{product.price}</h2>
      </div>
      <div className="text-center">
        <button className={styles.buyButton + " btn btn-secondary"}>Shop now</button>
      </div>
    </div>
    </>
  )
}
