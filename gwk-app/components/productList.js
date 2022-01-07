import ProductCard from "./productcard"

export default function ProductList(props) {

  const products = props.edges

  return (
    <>
    <section className="product-list mt-5 mb-5">
        <div className="container">
            <div className="row">
              {Object.values(products).map(product => (
                <div className="col-4">
                  <ProductCard {...product}/>
                </div>
              ))}
                
            </div>
        </div>

    </section>
    </>
  )
}
