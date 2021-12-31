import ProductCard from "./productcard"
export default function ProductList() {
  return (
    <>
    <section className="product-list mt-5 mb-5">
        <div className="container">
            <div className="row">
                <div className="col-3">
                <ProductCard />
                </div>
                <div className="col-3">
                <ProductCard />
                </div>
                <div className="col-3">
                <ProductCard />
                </div>
                <div className="col-3">
                        <ProductCard />
                </div>
            </div>
        </div>

    </section>
    </>
  )
}
